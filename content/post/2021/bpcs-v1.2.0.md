---
title: "bpcs - release v.1.2.0"
date: 2021-03-10
Tags: [r, bpcs, Bayesian statistics]
slug: bpcs-release-1.2.0
---

We have a new release of the bpcs package on Github. This release introduces a few new features, removed dependencies and mostly moved from rstan to cmdstanr.

Therefore we require that you have cmdstanr and cmdstan installed and configured prior to use the package. Compilation of the model is done only once by cmdstan outside the R environment

See below the release notes:

* Moving to cmdstanr instead of rstan. 
  - This will allow us to fix some bugs and tweaks that were not optimal.
  - Now we can have faster installations and let cmdstan compile the models.
  - There will be some additional time to compile the models for the first time but that is only the first time we use it
  - We can now remove the errors from ubsan-clang in CRAN which apparently is a lot of trial and error to solve and not supporting tools from CRAN for identifying that
* The interface of the bpcs will remain (practically) the same
* new function to retrieve the posterior distribution of the parameters `get_parameters_posterior`
* alias to retrieve the summary data frame of the parameters `get_parameters_df`
* Removed dependency on coda
* Now we can specify the probability mass in the parameters and in summary
* rstan and shinystan are now optional
* Fix problems with multiple clusters in the posterior predictive function

To get the latest version of the bpcs package, install it from Github:

```r
remotes::install_github('davidissamattos/bpcs')
```

When cmdstanr is uploaded to CRAN we will submit a new version there!