---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
preparationTime: "XX min"
totalTime: "XX min"
portions: "X-Y"
{{- $p := split (replace .Path "\\" "/") "/" -}}
{{- $section := index $p 0 -}}
{{- $sub := "" -}}
{{- if ge (len $p) 2 -}}{{- $sub = index $p 1 -}}{{- end -}}
mainCategory: "{{ if $sub }}{{ $sub }}{{ end }}"
tags: ["{{ $section }}"{{ if $sub }}, "{{ $sub }}"{{ end }}]
images: []
---

## Ingredientes

* 1 cup ...
* 2 cups ...

## Passo-a-passo

1. do this
2. do that

## Notas

some notes

