---
title: "Bayesian Paired-Comparison with the bpcs Package"
date: 2021-01-28
draft: true
Tags: [r, bpcs, Bayesian statistics]
slug: bpcs-paper
---

Yesterday, we submitted the paper:

> Mattos, D. I. and Ramos, E. M. S. "Bayesian Paired-Comparison with the bpcs Package"

This paper discusses all the statistical models implemented in the bpcs package and makes three deep reanalyses of existing behavior research. See below the abstract.

"This article introduces the bpcs R package (Bayesian Paired Comparison in Stan) and the statistical models implemented in the package. The goal of this package is to facilitate the use of Bayesian models for paired comparison data in behavioral research. Historically, studies on preferences have relied on Likert scale assessments and the frequentist approach to analyze the data. As an alternative, this article proposes the use of Bayesian models for forced choices assessments. The advantages of forced-choice assessments are that they minimize common bias that Likert scales are susceptible to, they can increase criterion validity, control for faking responses, and are quite useful to assess preferences in studies with children and non-humans primates. Bayesian data analyses are less sensitive to optional stopping, have better control of type I error, have stronger evidence towards the null hypothesis, allows propagation of uncertainties, includes prior information, and perform well when handling models with many parameters and latent variables. The bpcs package provides a consistent interface for R users and several functions to evaluate the posterior distribution of all parameters, to estimate the posterior distribution of any contest between items, and to obtain the posterior distribution of the ranks. Three reanalyses of recent studies that used the frequentist Bradley-Terry model are presented. These reanalyses are conducted with the Bayesian models of the bpcs package and all the code used to fit the models, generate the figures and the tables are available in the online appendix."

The preprint of the paper can be accessed at: https://arxiv.org/pdf/2101.11227.pdf

The online appendix can be accessed at: https://davidissamattos.github.io/bpcs-online-appendix/

Let me know if you have any questions or any comments!