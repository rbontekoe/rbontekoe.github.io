# Our Story

![AppliGate](/rbontekoe.github.io/logo5.png)

AppliGate is an IT-Training & Consultancy company in the Netherlands.

## History
AppliGate became known in 1986 with the course `Hardware Beheer PC`, a class where people learned to fix errors that occurred with PCs. In 1994 AppliGate started as Lotus Authorized Education Center, LAEC, with instructor-led Lotus Notes & Domino training. IBM XPages training in 2009. In 2014 we stopped by delivering these courses due to decreasing demand. After first experimenting with Scala, we decided to switch to Julia in July 2019.

## Our Focus
AppliGate is developing online courses,
- with [Julia](https://julialang.org/) as programming language, and
- IoT in mind.

## Why?
We discovered that Julia is a programming language that is easy to learn. It also supports Pluto.jl as notebook, ideal for experimenting with Julia via a browser. One package make it easy to create online course material:
- [Documenter.jl](https://juliadocs.github.io/Documenter.jl/stable/): Learning material and documentation.

## Course Development
Everything is Kubernetes these days. So we ported the original BAWJ course to a Kubernetes environment [ar.jl](https://github.com/rbontekoe/ar), in our case MicroK8s running on Ubuntu 20.04:
- Retain the original modules AppliSales.jl, AppliAR.jl, and AppliGeneralLedger.jl
- Communication via TCP sockets;
- Pluto.jl notebook as interface;
- Istio;
- ArgoCD;
- Jenkins.

In the past we developed the 'course' [BAWJ, Building Business Applications with Julia](https://www.appligate.nl/BAWJ/stable). Our goal is to build the software for a modular based system:
- Using Docker,
- The Onion architecture.

## Languages and Tools
- Julia;
- VSCode;
- Git;
- Docker;
- ArgoCD;
- Jenkins;
- Raspberry Pi 3B.
