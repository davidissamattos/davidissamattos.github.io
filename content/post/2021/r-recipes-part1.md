---
title: "R Recipes Part - 1"
date: 2021-02-17
Tags: [r, tidyverse]
slug: r-recipes-part-1
draft: true
---

## R recipes Part 1

I thought of writing a post to share some small R snippets/recipes of useful commands that I have been using quite often lately.

### Merge all csv files in a folder

I have been doing a lot of experimental simulations in Google Cloud lately. These simulations are run in multiple VM and each VM saves each computation step in an individual csv file in Cloud Storage Bucket folder. In the end of the simulations, I have a folder with thousands of csv files (that share the same columns) that I need to merge. This recipe is a function that I pass the name of a folder and it merges all csv files in this folder and returns a single csv file.

```r

```


### Expand (rank) dataset into paired comparisons

To use the bpcs package, we required to have paired comparisons. However, in experiments with often have a wide dataset that contains the rank or the values of each player in a separate column, and the rows represent each comparison.

```r

```


### Merge two columns with *NA*
Coalescing

```r
data <- data.frame(
    'a' = c('A','B','C','D','E'),
    'x' = c(1,2,NA,NA,NA),
    'y' = c(NA,NA,3,NA,NA),
    'z' = c(NA,NA,NA,4,NA))

```


### Source all files in a directory


