# Current Project

## Porting to Kubernetes, course BAWJK

Everything is Kubernetes these days. So we ported the original BAWJ course to a Kubernetes environment [ar.jl](https://github.com/rbontekoe/ar), in our case MicroK8s running on Ubuntu 20.04.

### Course Title
Building Business Application with Julia in MicroK8s.

### Basic Idea
- Using MicroK8s;
- Retain the original modules AppliSales.jl, AppliAR.jl, and AppliGeneralLedger.jl;
- Communication via TCP sockets;
- Pluto.jl notebook as interface.

### Audience

This course is Julia programmers who are familiar with the principles from the course BAWJ.

### Course design

The course design follows a lecture/lab task-oriented approach.

### Course goals

This course will teach you how to:

- Install MicroK8s on Ubuntu 20.04.
- Activate Istio, Registry, Storage, DNS, and Dashboard.
- Write communication software using TCP sockets.
- Store AppliAR and AppliGeneralLedger Docker images on MacroK8s registry.
- Install ArgoCD.
- Write and test Kubernetes YAML files.
- Create an ArgoCD application.

## Online course, BAWJ

We started with the project `rbontekoe/RbO.jl.` to build up experience with Julia, based on the ports and adapter design pattern. The publisher-subscriber model was chosen, which resulted in the RbO.jl package. With Documenter.jl we wrote the [documentation](https://rbontekoe.github.io/RbO.jl/) for the module. It also gave us the idea to write courses with Documenter.jl, and developed a [tutorial](https://rbontekoe.github.io/tutorial_rbo/) as a test.

There are many excellent online courses nowadays. The content mainly consists of videos, and a syllabus is often missing. We experience it as a problem when you quickly want to look up some code. We will try to combine these two: videos in a curriculum.

### Course Title

Developing Business Applications with Julia.

### Basic Idea

- Identifying the processes of a training center;
- The workflow of the specialties registration and course evaluation.

### Audience

This course is for starting Julia programmers with some basic knowledge of the programming language.

### Course design

The course design follows a lecture/lab task-oriented approach.

### Course goals

This course will teach you how to:

- Designing a specialty using the ports and adapter design pattern.
- Implementing the design, using:
  - Struct's,
  - Multiple Dispatch.
- Defining test software.
- Using Channels for inter-process communication.
- Using REST API for human interaction
- Turn the code into a Julia module.
- Using GitHub to upload the software.
- Create a Dockerfile using the official Julia Image.
- Enable an SSH connection to containers using certificates.
- Using Docker Compose to create the containers of the application.

### Outline

Under development, please look at the [index](https://www.appligate.nl/BAWJ/) of the course.
