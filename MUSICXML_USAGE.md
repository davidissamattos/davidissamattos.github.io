# Hugo MusicXML Render Hook with OSMD

This setup allows you to display music notation in your Hugo markdown files using OpenSheetMusicDisplay (OSMD).

## Usage

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


## Example

Create a new music post using:
```bash
hugo new music/my-music-post.md
```

Then add your MusicXML code blocks in the content. Add either the musicxml directly or the file from static


## Notes

- MusicXML files should be placed in the `static/` folder
- File paths in the `file` attribute are relative to the site root (not the static folder)
- The viewer is responsive and will resize with the browser window
- You can have multiple music scores on the same page
