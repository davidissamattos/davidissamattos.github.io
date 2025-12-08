---
title: "Hugo Music Score Shortcode"
date: 2025-12-08T20:09:28+01:00
Tags: [hugo, music, osmd, hugo-shortcode]
draft: false
slug: "hugo-music-score-shortcode"
---

Last month I have been using a codeblock hook to show scores using hugo. While it works, passing parameters in codeblocks is a pain.

I decided to convert it to a better system, i.e. shortcode, with lots of options. Still using OSMD as the display source

You can easily add the shortcode by adding it as a submodule. You can see the code here on (Github)[https://github.com/davidissamattos/hugo-musicxml-shortcode]:

1. Navigate to your Hugo site's root directory
2. Add the shortcode as a submodule in the themes directory:
      ```bash
      git submodule add https://github.com/davidissamattos/hugo-musicxml-shortcode.git themes/hugo-musicxml-shortcode
      ```
3. Update your site's `config.toml` or `config.yaml` to include the theme:
      ```toml
      theme = ["hugo-musicxml-shortcode", "your-main-theme"]
      ```
4. Initialize and update submodules when cloning your site repository:
      ```bash
      git submodule init
      git submodule update
      ```

## Usage

In terms, of usage it is quite straight forward, see an example:

~~~markdown
{{</* musicxml
      title="Solo feature"
      file="/music/robin_adair.musicxml"
*/>}}
{{</* /musicxml */>}}
~~~

This is rendered like this: with a fold down preview that you can expand
{{< musicxml
      title="Solo feature"
      file="/music/robin_adair.musicxml"
>}}
{{< /musicxml >}}


But we can add many other options, like subset measures, parts, preview, fold, hide composer and title. The example below shows only measures 5-10 hides the composer and title, does not show the folding option nor the preview when it is folded

~~~markdown
{{</* musicxml
    title="Solo feature"
    file="/music/robin_adair.musicxml"
    preview="false"
    fold="false"
    hideComposer="true"
    hideTitle="true"
    fromMeasure="5"
    toMeasure="10"
*/>}}
{{</* /musicxml */>}}
~~~

{{< musicxml
      title="Solo feature"
      file="/music/robin_adair.musicxml"
      hideComposer="true"
      hideTitle="true"
      fold="false"
      preview="false"
      fromMeasure="5"
      toMeasure="10"
>}}
{{< /musicxml >}}

We can also remove the flat icon if that is desired. See below the complete list of options

## Parameters

All boolean-like parameters treat `false`, `0`, `no`, or `off` (case-insensitive) as `false`. Any other value is treated as `true`.

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `file` | string | – | Path to the MusicXML file to load. Required unless inline content is provided inside the shortcode. |
| `title` | string | `"View full score"` | Title shown above the metadata panel and used for the Flat.io link. |
| `preview` | bool | `true` | Enables the small preview excerpt inside the `<summary>`. |
| `previewMeasures` | number | `4` | Number of measures to show in the preview excerpt (still clamped by `toMeasure`). |
| `fold` | bool | `true` | Wraps the viewer in a `<details>` so the score can be collapsed. |
| `flat` | bool | `true` | Shows the "Add to Flat" link when a `file` is provided. |
| `hideTitle` | bool | `false` | Hides the score title in the full OSMD rendering. |
| `hideComposer` | bool | `false` | Hides composer and lyricist labels in both preview and full renderings. |
| `hidePartName` | bool | `false` | Hides the part/staff labels on the score. |
| `part` | string or comma-separated list | all parts | Limits rendering to specific parts. Match by part name or MusicXML part ID. Example: `part="Solo Cornet,Horn"` |
| `fromMeasure` | number | `1` | First measure to draw in both preview and full score. |
| `toMeasure` | number | last measure | Final measure to draw. Omit or set `< 1` to show the complete score. |