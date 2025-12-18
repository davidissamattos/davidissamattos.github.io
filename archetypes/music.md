---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
Tags: ['music', "trumpet", "trompete","score","partitura","musicxml"]
draft: false
slug: "{{ .Name }}"
---

Melodia e partitura de: {{ replace .Name "-" " " | title }}

{{< musicxml
      title=""
      file=""
      preview="false"
      fold="false"
>}}
{{< /musicxml >}}

Video da música:

{{< youtube  >}}