---
title: "Notare"
date: 2025-12-16T16:26:43+01:00
Tags: ["music", "musicxml","notare", "python"]
draft: false
slug: "notare"
---

Today, I release a command line utility to handle transformations and processing of music scores without opening them.

I have been working with digitalization of trumpet resources, and that generates A LOT of files, and sometimes we need to modify and analyze them in bulk using scripts. Of course we can create python scripts for everything... But instead I decided to create a command line tool to do that work in a more isolated manner. It is called `notare` and can be installed with Python using pip. It works well on Windows/Linux/Mac (but I am only placing some Windows examples below)

Here are some links:

* https://github.com/davidissamattos/notare
* https://pypi.org/project/Notare/

You can install it:

```bash
pip install notare
```

And you should be ready to run. Here are some of the functionalities:

- formats: List supported input and output formats
- version: Print the notare package version
- convert: Convert between formats (e.g., MusicXML ↔ MIDI, PDF via LilyPond/MuseScore)
- transpose: Transpose scores (per part or whole) and adjust key signatures
- metadata: Show detailed metadata or print single requested fields; can also update fields
- set-metadata: Set a single general metadata field and write the result
- extract: Slice measures and/or select parts; write excerpt
- analyze: Compute analysis metrics (key clarity, entropy, densities, etc.)
- show: Render in browser via OSMD; optional `--print` to open the print dialog
- play: Render to MIDI and open the default system player (no stdout)


And of course some examples of how to use. Check the links for more information:


Windows:
```bash
#Display the score in the browser/print it
type tests\data\BrahWiMeSample.musicxml | notare show 
type tests\data\BrahWiMeSample.musicxml | notare show --print

#Extract different measures and parts to create a new file 
type tests\data\MozartPianoSonata.musicxml | notare extract --measures "1-3" | notare show 
type tests\data\MozartPianoSonata.musicxml | notare extract --measures "1,3" | notare show 
type tests\data\MozartPianoSonata.musicxml | notare extract --part-number 0 | notare show #show all parts
type tests\data\MozartPianoSonata.musicxml | notare extract --part-number 1 | notare show
# Show metadata
type tests\data\MozartPianoSonata.musicxml | notare metadata #all metadata
type tests\data\MozartPianoSonata.musicxml | notare metadata --composer
type tests\data\MozartPianoSonata.musicxml | notare metadata --clef --key-signature --composer --title

# Change metadata
type tests\data\c_scale.musicxml | notare set-metadata --composer "J. Doe" | notare metadata --composer

# Analysis of metrics on the score
type tests\data\MozartPianoSonata.musicxml | notare analyze
```


**More functionality is coming**

I will keep adding in this post additional functionality!
