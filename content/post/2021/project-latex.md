---
title: "Structuring a Latex project for a paper"
date: 2021-05-11
Description: "How to structure a Latex project for a paper"
Tags: ["latex", "overleaf", "writing"]
---

Over the last five years, I have written papers in different combinations of Word + Mendeley/Zotero, Latex/Overleaf, Google Docs + Zotero, Word Online + Mendeley.

Writing papers in Word together with a good reference manager (Zotero/Mendeley) is a smooth experience, given that the journal/conference provides a good template with styles or macros to format. However, a big drawback is when you have your paper rejected or need to place them in another specific format. Then, a lot of your time goes into making your new template work, copy and pasting figures, re-adjusting captions etc.

Latex (with Overleaf) provides a much better experience for collaborative paper writing compared to Word/Google Docs at the expense that you don't have Grammarly connected (although one can use Chrome extension Overleaf textarea as a workaround). Latex can be a bit daunting if you are starting but having an organized project removes most of the hurdles. 

No one likes to scroll 10,000 words of unformatted text in a web-browser to edit anything (even with the file outline), have the figures spread around the place, or huge tables in the middle of the main tex file.

So, I suggest to keep things separate:
* one section per file in a separate folder (sections) with numbers to order the files.
* Separate folder for figures (figures)
* Each table goes into its own text file
* The main.tex file only goes template stuff and all the content you input there. In this way, you can have multiple main.tex file with different templates (one for your journal and one for arxiv for example)
  
## Suggested structure example

Below is a common example of a structure I use in my papers:

- main.tex
- main-arxviv.tex
- your-template.cls (for your journal)
- arxiv.sty (template for arxiv)
- bibliography/
  - your-template.bst (for your journal)
  - refA.bib
  - refB.bib (if you are using multiple bib files)
- figures/
  - figureA.pdf
  - figureB.pdf
- tables/
  - table1.tex
  - table2.tex
- sections/
  - 0abstract.tex
  - 1intro.tex
  - 2background.tex
  - 8conclusion.tex


## Main tex file

My main.tex looks quite simple:

```latex
\documentclass[11pt]{article}
\usepackage{graphicx}
\usepackage{booktabs}

\title{Great piece of work}
\author{David Issa Mattos}
\date{\today}

\begin{document}

\begin{abstract}
	\input{sections/0abstract}
\end{abstract}

\keywords{keyword1, kewyword2}

\maketitle

\input{sections/1intro.tex}
\input{sections/2background.tex}
\input{sections/3researchmethod.tex}
\input{sections/4results}
\input{sections/5discussion}
\input{sections/6conclusion}

\bibliographystyle{bibliography/your-template}
\bibliography{bibliography/refA.bib}

\end{document}

```

## Sections

While my sections contain only the actual content. E.g. 1intro.tex:

```latex
\section{Introduction}
This is an intro.

The remainder of this paper is organized as follows. Section \ref{sec:2background} presents ...
```

## Figures

Just refer to their appropriate location in includegraphics:

```latex
\begin{figure}
    \centering
    \includegraphics[width=\texwidth]{figures/figureA.pdf}
    \caption{My caption}
    \label{fig:figureA}
\end{figure}
```

## Tables

For tables, I add them as input

```latex
\section{Results}
Table \ref{tab:table1} shows the descriptive statistics of the sample

\input{tables/table1}
```

Where table1.tex (requires package booktabs):

```latex
\begin{table}[t]
\centering
\caption{Summary statistics}
\label{tab:table1}
\begin{tabular}{cc}
\topline
 & Mean (SD) \\
\midrule
Age & 40.2 (7.2) \\
Income & 5000 (400)
\bottomrule
\end{tabular}
\end{table}
```

I think this structure makes it very easy to use and navigate the paper, as well as reuse it and change the template (to add it in your thesis template or submit it to another journal).

## Bonus: conditional compilation in the template

Of course, often, we need to add template specific commands. In this case we can use conditional compilation (to avoid using those commands in the arxiv template for example).

For example IEEEtran starts with this big first letter and all-caps first word.

```latex
 \IEEEPARstart{B}{enchmarking}
```

To avoid this we can conditional format it like this:

* Define a variable for the template
* If-else in the sections

Suppose that the  main.tex uses the IEEEtran, and has this command defined. We can define a variable in Latex like this:

```latex
%Conditional compiling variable
\newif\ifieeetemplate
\ieeetemplatetrue
```

In the main-arxiv.tex (that do NOT use the IEEEtran, so compilation would give an error), we define the variable as false:

```latex
%Conditional compiling variable
\newif\ifieeetemplate
\ieeetemplatefalse
```

In the section where we are conditionally compiling:

```latex
\ifieeetemplate
    \IEEEPARstart{B}{enchmarking}
\else
    Benchmarking
\fi
```