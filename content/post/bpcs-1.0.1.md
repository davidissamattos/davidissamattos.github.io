---
title: "bpcs - release v.1.0.1"
date: 2020-12-16
draft: false
Tags: [r, bpcs, Bayesian statistics]
slug: bpcs-release-1.0.1
---

This is a minor release to streamline the usage of the bpcs package, correct a few bugs and add publication-ready functions for tables and figures

See below the release notes:

* removed ties_pred from models that do not have ties
* fixed predict for models with ties, so we return a vector y_pred with 0, 1, 2 and not separate as now
* removed posterior distributions from the get_rank_of_players and get_probabilities. Now we have new functions to obtain the data frame or the posterior distributions separately. The posterior is now returned as matrix
* Probabilities table is now optional in the summary function
* New functions to get the probabilities for specific data `get_probabilities_newdata_df` and `get_probabilities_newdata_posterior`
* Publication ready functions for 
  - plots: `get_parameters_plot` function and a thin S3 plot wrapper for the same function. Plots are default to APA.
  - tables: Functions for publication tables: `get_parameter_table`, `get_probabilities_table` and `get_rank_of_players_table`
* `get_hpdi_parameters`  became `get_parameters` and the user specify if credible intervals or hpdi
* Added ties to `expand_aggregated_data`.
* We can get now both credible and HPD intervals in `get_parameters`. n_eff and Rhat are also now possible to add and remove from this df
* Added functions to save and load bpc models

To get the latest version of the bpcs package, install it from Github:

```r
remotes::install_github('davidissamattos/bpcs')
```