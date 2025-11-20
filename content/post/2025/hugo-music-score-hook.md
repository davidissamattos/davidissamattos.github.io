---
title: "Hugo Music Score Hook"
date: 2025-11-20T21:09:28+01:00
Tags: []
draft: false
slug: "hugo-music-score-hook"
---

As I wanted to create more posts that are music related and not only programming related, I created a Hugo hook that allows me to display music scores in this blog. I haven't tested that extensively with highly complex scores, but I suppose it works fine as it uses OSMD as the backend music engine.

The only limitation is that it requires the MusicXML notation, which is pretty standard when sharing scores across applications. Your editing software likely can export to musicxml.

Let's get to the hook. It is a simple codeblock with musicxml. It supports direct paste of the xml as well as linking to a file in your assets folder

## Using the hook

### Method 1: Link to a MusicXML file

Place your `.musicxml` or `.xml` file in the `static/` folder (e.g., `static/music/score.musicxml`), then reference it in your markdown:

~~~markdown
```musicxml {file="/music/score.musicxml"}
```
~~~

### Method 2: Inline MusicXML content

Paste the MusicXML content directly in the code block:

~~~markdown
```musicxml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 3.1 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="3.1">
  <part-list>
    <score-part id="P1">
      <part-name>Music</part-name>
    </score-part>
  </part-list>
  <part id="P1">
    <measure number="1">
      <attributes>
        <divisions>1</divisions>
        <key>
          <fifths>0</fifths>
        </key>
        <time>
          <beats>4</beats>
          <beat-type>4</beat-type>
        </time>
        <clef>
          <sign>G</sign>
          <line>2</line>
        </clef>
      </attributes>
      <note>
        <pitch>
          <step>C</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <type>whole</type>
      </note>
    </measure>
  </part>
</score-partwise>
```
~~~


## Adding it to your blog

Create the file layouts/_default/_markup/render-codeblock-musicxml.html

Paste the content (a mix of Hugo syntax with HTML, JS and CSS)

```js
{{- $id := printf "osmd-%d" (add 1 .Ordinal) -}}
{{- $attributes := .Attributes -}}
{{- $isMusicXMLFile := false -}}
{{- $musicXMLContent := "" -}}

{{- if isset $attributes "file" -}}
  {{- $isMusicXMLFile = true -}}
  {{- $musicXMLPath := $attributes.file -}}
  {{- /* File path relative to static folder */ -}}
  {{- $fullPath := printf "/static/%s" $musicXMLPath -}}
{{- end -}}

<div class="musicxml-container" id="{{ $id }}-container">
  <div id="{{ $id }}" class="osmd-viewer"></div>
</div>

<script>
  (function() {
    // Wait for OSMD to be available
    function initOSMD() {
      if (typeof opensheetmusicdisplay === 'undefined' || !opensheetmusicdisplay.OpenSheetMusicDisplay) {
        setTimeout(initOSMD, 100);
        return;
      }

      const container = document.getElementById('{{ $id }}');
      const osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay(container, {
        autoResize: true,
        backend: "svg",
        drawTitle: true,
      });

      {{- if $isMusicXMLFile }}
      // Load from file
      const musicXMLPath = '{{ $attributes.file }}';
      osmd.load(musicXMLPath).then(function() {
        osmd.render();
      }).catch(function(error) {
        console.error('Error loading MusicXML file:', error);
        container.innerHTML = '<p style="color: red;">Error loading MusicXML file: ' + musicXMLPath + '</p>';
      });
      {{- else }}
      // Load from inline content
      const musicXML = `{{ .Inner | safeJS }}`;
      osmd.load(musicXML).then(function() {
        osmd.render();
      }).catch(function(error) {
        console.error('Error rendering MusicXML:', error);
        container.innerHTML = '<p style="color: red;">Error rendering inline MusicXML content</p>';
      });
      {{- end }}
    }

    // Start initialization
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initOSMD);
    } else {
      initOSMD();
    }
  })();
</script>

<style>
  .musicxml-container {
    margin: 2rem 0;
    padding: 1rem;
    background-color: #fffef9;
    border-radius: 8px;
    overflow-x: auto;
  }
  
  .osmd-viewer {
    min-height: 200px;
  }
</style>

<style>
  .musicxml-container {
    margin: 2rem 0;
    padding: 1rem;
    background-color: #f8f9fa;
    border-radius: 8px;
    overflow-x: auto;
  }
  
  .osmd-viewer {
    min-height: 200px;
  }
</style>

```

Now you only need to add the library to your header.

Add this line to your custom header in partials. Or download the script to a js in static (get some help from chatgpt/copilot/claude)

`<script src="https://cdn.jsdelivr.net/npm/opensheetmusicdisplay@1.9.2/build/opensheetmusicdisplay.min.js"></script>
`