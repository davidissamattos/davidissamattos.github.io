---
title: "The bpcs package is now on CRAN"
date: 2020-12-09
draft: false
slug: bpcs-cran
---

After some months of work the bpcs package is at version v1.0.0 and is available on CRAN (https://CRAN.R-project.org/package=bpcs). Now we can easily run Bayesian inference on Bradley-Terry models (including many extensions).

See below the description of the package

Models for the analysis of paired comparison data using Stan. The models include Bayesian versions of the Bradley-Terry model, including random effects (1 level), generalized model for predictors, order effect (home advantage) and the variations for the Davidson (1970) model to handle ties. Additionally, we provide a number of functions to facilitate inference and obtaining results with these models. 

# Features of the bpcs package

  - Bayesian computation of different variations of the Bradley-Terry
    (including with home advantage, random effects and the generalized
    model).
  - Bayesian computation of different variations of the Davidson model
    to handle ties in the contest (including with home advantage, random
    effects and the generalized model).
  - Accepts a column with the results of the contest or the scores for
    each player.
  - Customize a normal prior distribution for every parameter.
  - Compute HDP interval for every parameter with the
    `get_hpdi_parameters` function
  - Compute rank of the players with the `get_rank_of_players` function.
  - Compute all the probability combinations for one player beating the other with the `get_probabilities` function.
  - Convert aggregated tables of results into long format (one contest
    per row) with the `expand_aggregated_data.`
  - Obtain the posterior distribution for every parameter of the model
    with the `get_sample_posterior` function.
  - Easy predictions using the `predict` function.
  - We do not reinforce any table or plotting library\! Results are
    returned as data frames for easier plotting and creating tables
  - We reinforce the need to manually specify the model to be used.

## Models available

  - Bradley-Terry (`bt`) (Bradley and Terry 1952)
  - Davidson model (`davidson`) for handling ties (Davidson 1970)

Options to add to the models:

  - Order effect (`-ordereffect`). E.g. for home advantage (Davidson and
    Beaver 1977)
  - Generalized models (`-generalized`). When we have contestant
    specific predictors (Springall 1973)
  - Intercept random effects (`-U`). For example, to compensate
    clustering or repeated measures (Böckenholt 2001)

E.g.:

  - Simple BT model: `bt`
  - Davidson model with random effects: `davidson-U`
  - Generalized BT model with order effect: `bt-generalized-ordereffect`


# Get the package

To get the latest version of the bpcs package, install it from Github:

```r
remotes::install_github('davidissamattos/bpcs')
```