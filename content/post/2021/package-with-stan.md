---
title: "Writing R packages With Stan"
date: 2021-02-15
Tags: [r, Stan, Bayesian statistics]
slug: packages-with-stan
---

Now, I have been developing the [bpcs](https://github.com/davidissamattos/bpcs) package for the last 4 months I thought of sharing a bit my experience with developing a R package with Stan.

## rstan + rstantools

My first experience was with rstan + rstantools. Creating a skeleton package based on rstantools is really fast and straightforward. 

* During installation time, the Stan model is compiled and ready to be called. This creates a longer time in development if you are constantly changing the Stan model
  * My experience is that it is best to have an almost-ready model before starting to iterate with the package. Alternatively, have a script where you can test the model without the need to install. The installation process to compile the model takes longer than just using rstan.
    * Avoid having many models or you will be spending 20min in installation
    * This can create problems if you are submitting to CRAN
    * This can also create problems if you are using Github actions (since they limited time to run the CI)
  * It is not always that changes in the model result in a re-compilation in Rstudio with devtools. Through some trial and error I found that to force recompilation you need:
    1. `pkgbuild::clean_dll()` to clean the source files. This will force recompile -->
    2. `devtools::document()`. This will update the package and recompile the model
    3. Restart the r session to make the model reload in the memory
    4. Run`devtools::load_all()` again. Now you are ready to test your recompiled model
* I found multiple problems when using the `rstan::gqs` function. To give some context, I fitted my model with `rstan::sample` (no problems here) and then I used `rstan::gqs` in a `predict` S3 function with the parameters fitted from the model.
  * My problem here is that there are/were some small bugs in the generated quantities in Stan. 
    * Estimated parameters could not be optional since they need to be present, so I needed to have transformed parameters to make sure all parameters were present
    * The transformed parameters did not play nice with the generated quantities and the recommended approach is to have the transformed parameters inside the generated quantities. This increases copy and paste in the model
    * With transformed parameters I was doing a lot of subsets (e.g. a parameter was a vector, the transformed parameters was a real and I was assigning to the real variable only the first item of the transformed parameter). Apparently, this creates a problem in CRAN with ubsan-clang where the Stan code is not properly compiled in clang and leads to memory errors in macOS. There are no tools to investigate this and there is a lot of trial and errors with a very specific setup. This lead me to change to `cmdstanr` in the package development.



## cmdstanr

For version 1.2.0, I decided to change to `cmdstanr` instead of the `rstan` + `rstantools` combo. My decision was based on:

* Development and installation is much faster.  `cmdstan` compiles the models faster.
* New features are available almost immediatly. `rstan` is in version 2.21 while `cmdstan` in vesion 2.26
* It is now the user responsibility to have a toolchain configured and working and to install `cmdstan`. If Stan changes its own recommended procedures this should not impact the package. `cmdstan` can be easily installed with `cmdstanr`, so this should not be an issue.
* **Definetely it is worth going from `rstan` to `cmdstanr`**

Here a few thing to remember:

* To call the model you have placed in `inst/stan`

Problems that I have encountered so far:

* Generated quantities: as before I was trying to use the generated quantities in Stan for the predict function. However, the same model that compiled and worked with `rstan` stopped working in some of the `bpcs` use cases. The error message did not help much since the csv file is not even created. I **suspect** that this was the error that was appearing with ubsan-clang but now instead of a memory error in CRAN, this is caught in the `cmdstan`.
  * Based on that I decided to move the generated quantities directly to R. This created a bit of code repetition (in R and in Stan), but now all models work properly. The code is a bit easier to debug and test. Performance impact was small for most of my test cases. I use a for loop for every observation in the prediciton dataset but for each posterior sample is vectorized. In the future, I plan to make everything vectorized, which should improve prediction perfomance for larger datasets. 
* I my tests, I am sampling several test data sets to test different models combinations. Once in a while I have an error of not finding the csv file. It didn't seem to be systematic or dependent on a model
  * These only appeared with testthat test and not when I run each one independently 
  * This creates a problem with CI in Github actions and those nice badges in Github.
* No matter how much I tried, I could not use `#include` in the Stan model. It might be my poor R/Stan skills, but I just couldn't make it work in a package (I could make it work in a script though).
