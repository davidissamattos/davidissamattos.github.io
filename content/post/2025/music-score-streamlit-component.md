---
title: "Music Score Streamlit Component"
date: 2025-11-19T21:06:45+01:00
Tags: ['streamlit', 'musicxml', 'music21', 'python', 'osmd']
draft: false
slug: "music-score-streamlit-component"
---

This week I released a new Python package in pip that allows you to display music sheets in Streamlit applications.

Pypi: https://pypi.org/project/streamlit-music-score/
Github: https://github.com/davidissamattos/streamlit-music-score 

## Installation

Just run:

`pip install streamlit-music-score`

It has dependencies on music21 and streamlit

## Intro

This pacakge basically allows you to display music scores coming from a lot of different formats, including MusicXML, abc, lilypond and any other of the list. Conversion between these and MusicXML is handled by music21

- ABC
- Braille
- Capella
- Clercq-Temperley
- Humdrum
- Lilypond
- MEI
- MIDI
- MuseData
- MusicXML
- Noteworthy
- Roman Text
- Scala
- Text
- TinyNotation
- Vexflow
- Volpiano

These formats are converted to MusicXML which can be rendered.

The package renders MusicXML scores inside Streamlit using the
[OpenSheetMusicDisplay](https://opensheetmusicdisplay.org/) (OSMD) library.

You have three methods:
* `music_score` Feed a musicxml string directly
* `music_score_file` Read a file. It loads it first with music21. Accepts any file format that music21 accepts
* `music_score_stream` Parse a music21 object. Useful if you are doing transformations with music21 and just want to visualize the result.

OSMD play functionality is only available for sponsors at the moment. As soon as it is released to the public this demo will be updated also to include play controls.


## Usage

```python
from streamlit_music_score import music_score, music_score_file, music_score_stream

xml = "<score-partwise>...</score-partwise>"  # MusicXML string from music21
music_score(xml, height=540)
```

### API
- `score_xml`: MusicXML string (UTF-8).
- `height`: Pixel height for the component (default `540`).
- `key`: Optional Streamlit widget key.

We also have a demo page that shows some usages including using Python to modify scores and them display