---
title: "On the Assessment of Benchmark Suites for Algorithm Comparison"
date: 2021-04-15
Tags: [r, item response theory, Bayesian statistics]
draft: false
slug: evo-irt-paper
---

Today, we submitted a new paper (On the Assessment of Benchmark Suites for Algorithm Comparison) to the IEEE Transactions on Evolutionary Computing (and of course to Arxiv). In this paper, we challenge the current state-of-the-art suites used for benchmarking in evolutionary computing.

Specifically, we utilize a Bayesian Item Response Theory model combined with Fisher Information to analyze how two famous benchmark suites (the BBOB and the PBO) actually perfom in practice in terms of the empirical succcess rate. We found that there is a big mismatch between the difficulty levels of these suites and the state-of-the-art algorithms. This leads to benchmark suites that have low discrimination and that are not good at estimating the ability of algorithms to solve a problem.

We hope that our proposed approach helps researchers to design benchmark suites (with a quantitative assessment) that are more suitable to compare optimization algorithms.

You can read the abstract below:

> Benchmark suites, i.e. a collection of benchmark functions, are widely used in the comparison of black-box optimization algorithms. Over the years, research has identified many desired qualities for benchmark suites, such as diverse topology, different difficulties, scalability, representativeness of real-world problems among others. However, while the topology characteristics have been subjected to previous studies, there is no study that has statistically evaluated the difficulty level of benchmark functions, how well they discriminate optimization algorithms and how suitable is a benchmark suite for algorithm comparison. In this paper, we propose the use of an item response theory (IRT) model, the Bayesian two-parameter logistic model for multiple attempts, to statistically evaluate these aspects with respect to the empirical success rate of algorithms. With this model, we can assess the difficulty level of each benchmark, how well they discriminate different algorithms, the ability score of an algorithm, and how much information the benchmark suite adds in the estimation of the ability scores. We demonstrate the use of this model in two well-known benchmark suites, the Black-Box Optimization Benchmark (BBOB) for continuous optimization and the Pseudo Boolean Optimization (PBO) for discrete optimization. We found that most benchmark functions of BBOB suite have high difficulty levels (compared to the optimization algorithms) and low discrimination. For the PBO, most functions have good discrimination parameters but are often considered too easy. We discuss potential uses of IRT in benchmarking, including its use to improve the design of benchmark suites, to measure multiple aspects of the algorithms, and to design adaptive suites.

* The preprint can be accessed at https://arxiv.org/abs/2104.07381 
* The online appendix (with the code) at https://davidissamattos.github.io/evo-irt/.

If you have any comments or suggestions don't hesitate to contact me!

David

