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

The preprint can be accessed at https://arxiv.org/abs/2104.07381 and the online appendix at https://davidissamattos.github.io/evo-irt/.

If you have any comments or suggestions don't hesitate to contact me!

David

