---
title: "bpcs - release v.1.1"
date: 2021-01-27
Tags: [r, bpcs, Bayesian statistics]
slug: bpcs-release-1.1.0
---

A new release of the bpcs package is available in Github. This release introduces new models and correct some bugs. This release will be submitted to CRAN (not there yet) and the on-going paper we are writing is based on this release.

See below the release notes:

* Possibility to add up to 3 intercept random effects (hopefully you will never need more than that)
* Model for subject predictors
* Make predictions of submodels with the model_type option
* Some small bug fixes

Unfortunately, we didn't have time to add a function to obtain the posterior distribution of the parameters without accessing the stanfit directly. But I think the other features are worth to update!

To get the latest version of the bpcs package, install it from Github:

```r
remotes::install_github('davidissamattos/bpcs')
```