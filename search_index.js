var documenterSearchIndex = {"docs":
[{"location":"blog/#Blog-1","page":"Blog","title":"Blog","text":"","category":"section"},{"location":"blog/#February-2020-1","page":"Blog","title":"February 2020","text":"","category":"section"},{"location":"blog/#/10/2020-1","page":"Blog","title":"02/10/2020","text":"","category":"section"},{"location":"blog/#","page":"Blog","title":"Blog","text":"See blog BAWJ.","category":"page"},{"location":"blog/#December-2019-1","page":"Blog","title":"December 2019","text":"","category":"section"},{"location":"blog/#/05/2019-1","page":"Blog","title":"12/05/2019","text":"","category":"section"},{"location":"blog/#","page":"Blog","title":"Blog","text":"Last week I managed to establish an SSH connection between two containers. This week I could finish Chapter 9, Create the Container, more or less. The next step is to test a channel connection between two containers.","category":"page"},{"location":"blog/#November-2019-1","page":"Blog","title":"November 2019","text":"","category":"section"},{"location":"blog/#/15/2019-1","page":"Blog","title":"11/15/2019","text":"","category":"section"},{"location":"blog/#","page":"Blog","title":"Blog","text":"Almost ready to link www.appligate.nl to rbontekoe.github.io. We have to change the CNAME record at the provider from appligate.appspot.com to rbontekoe.github.io.","category":"page"},{"location":"blog/#","page":"Blog","title":"Blog","text":"We also started with writing the course material for the online training BAWJ.","category":"page"},{"location":"blog/#October-2019-1","page":"Blog","title":"October 2019","text":"","category":"section"},{"location":"blog/#/21/2019-1","page":"Blog","title":"10/21/2019","text":"","category":"section"},{"location":"blog/#","page":"Blog","title":"Blog","text":"Why not build a website with Documenter.jl? We did it today. When you go to AppliGate, you enter our new site. In the meantime, we got more experience with Julia. E.g., we resized Rob's picture with Images.jl. It was straightforward.","category":"page"},{"location":"blog/#","page":"Blog","title":"Blog","text":"julia> using Images\n\njulia> img = load(\"rob.png\")\n\njulia> img2 = imresize(img, ratio=0.5)\n\njulia> save(\"rob2.png\", img2)","category":"page"},{"location":"blog/#September-2019-1","page":"Blog","title":"September 2019","text":"","category":"section"},{"location":"blog/#/17/2019-1","page":"Blog","title":"9/17/2019","text":"","category":"section"},{"location":"blog/#","page":"Blog","title":"Blog","text":"Reading Think Julia I discovered the package Serialization. While playing with it, I realized that it could solve my CQRS and Event Sourcing problem. With the method serialize, you can create a text representation of an object, that you can store. With deserialize, you do the reverse. Serialize writes to an IOStream, and deserialize reads from it. An IOStream can be an IOBuffer or a file. It makes Event Sourcing easier.","category":"page"},{"location":"blog/#","page":"Blog","title":"Blog","text":"I also looked at channels. You can use channels to communicate between processes. For the time being, I will use inter CPU-core communication. Later on, I extend it to remote nodes. I only have to expand the methods of createSubscriber and createPublisher.","category":"page"},{"location":"blog/#/10/2019-1","page":"Blog","title":"9/10/2019","text":"","category":"section"},{"location":"blog/#","page":"Blog","title":"Blog","text":"Last week I was busy implementing the database methods. I realized that the domain objects I wanted to keep must have an identification code. So Subscriber, Publisher, and Message got an id. To create the id, I used the hash function with a name and time as a parameter. It had consequences for the documentation. In the example code, I used the tag 'jldoctest,' so Documenter could test the example code during the generation of the manual. Because the ids keep changing, I had to give up. Too bad, because I found that a strong point of Documenter.jl. I replaced the test tag 'jldoctest' with the language tag 'julia.' Maybe there is something to do against continually changing values.","category":"page"},{"location":"blog/#","page":"Blog","title":"Blog","text":"Infected by the CQRS thought, I decided to add changed domain objects to the database instead of modifying an existing record.","category":"page"},{"location":"employees/#Employees-1","page":"Employees","title":"Employees","text":"","category":"section"},{"location":"employees/#Rob-Bontekoe-1","page":"Employees","title":"Rob Bontekoe","text":"","category":"section"},{"location":"employees/#","page":"Employees","title":"Employees","text":"(Image: Rob Bontekoe) Rob founded AppliGate in 1985. He is currently a software developer and working on the 'Elderly Monitoring System' plan. An overview of his achievements and projects.","category":"page"},{"location":"employees/#EDUCATION-1","page":"Employees","title":"EDUCATION","text":"","category":"section"},{"location":"employees/#","page":"Employees","title":"Employees","text":"Reactive Architecture, Lightbend – certified, December 28th, 2018.\nBachelor Electronics Engineering, HTS-E Rens & Rens – November 26th, 1965.","category":"page"},{"location":"employees/#NOTEWORTHY-1","page":"Employees","title":"NOTEWORTHY","text":"","category":"section"},{"location":"employees/#Java-Developer-Rienks-Arbodienst-–-Dec-2013-Nov-2017-1","page":"Employees","title":"Java Developer | Rienks Arbodienst – Dec 2013 - Nov 2017","text":"","category":"section"},{"location":"employees/#","page":"Employees","title":"Employees","text":"He migrated the data from the Lotus Notes Absence Registration & Tracking System for an online system.\nDesigned and developed the 'Invoicing Manager' application, which reduced the invoicing process from 14 days to 2 days per month, as well as the 'Management Information' system for real-time insight into the performance of the company doctors and consultants.","category":"page"},{"location":"employees/#Java-and-IBM-Lotus-Domino-Developer-and-Instructor-AppliGate-–-Jul-1994-Nov-2014-1","page":"Employees","title":"Java and IBM Lotus Domino Developer & Instructor | AppliGate – Jul 1994 - Nov 2014","text":"","category":"section"},{"location":"employees/#","page":"Employees","title":"Employees","text":"He made AppliGate the first Lotus Authorized Education Center (LAEC) in the Netherlands in 1994; LAEC of the year in the Netherlands in 2000.\nIn 1996 the AppliGate website was developed to enable HR managers and students to register online for a course.\nHe obtained the contract to deliver a customized 'IBM WebSphere Portal' course for a large ICT company.\nIBM Champion 2011/2012 for 'Lotus and IBM Collaboration Solutions.'","category":"page"},{"location":"employees/#SOFTWARE-PROJECTS-1","page":"Employees","title":"SOFTWARE PROJECTS","text":"","category":"section"},{"location":"employees/#Website-AppliGate-1","page":"Employees","title":"Website AppliGate","text":"","category":"section"},{"location":"employees/#","page":"Employees","title":"Employees","text":"He built the AppliGate website using IBM Lotus Domino and Javascript,\nmade in line with this all internal business applications needed to function as a Lotus Authorized Education Centre in the Netherlands. He used IBM Lotus Notes & Domino and LotusScript to accomplish it,\nredesigned the AppliGate website in 2013 using the Restlet framework, Java, GAE, and Bigtable (JDO), and\ndeveloped the Event Scheduler for scheduling training courses, using the Restlet framework, Java, and Bigtable","category":"page"},{"location":"employees/#Backend-Android-Medical-Record-App-1","page":"Employees","title":"Backend Android Medical Record App","text":"","category":"section"},{"location":"employees/#","page":"Employees","title":"Employees","text":"He developed the backend for the Android app using the Restlet framework, Java, Lotus Domino.","category":"page"},{"location":"employees/#Billing-Manager-1","page":"Employees","title":"Billing Manager","text":"","category":"section"},{"location":"employees/#","page":"Employees","title":"Employees","text":"He automated the billing process as a replacement for a Microsoft Excel-based application using UML, IBM XPages (JSF), and Java. Created a YouTube instruction video using Camtasia,\nbuilt a SOAP interface for communication with the online financial administration using Java,\nmodernized the declaration system using LotusScript and Java, and\nadded a Management Information System, for an overview of the declarations per month by an employee, department, or customer using IBM XPages (JSF) and Java.","category":"page"},{"location":"employees/#Online-Absence-Registration-Portal-1","page":"Employees","title":"Online Absence Registration Portal","text":"","category":"section"},{"location":"employees/#","page":"Employees","title":"Employees","text":"He added 2-factor authentication to the online access of the Absence Registration system using the Restlet framework, Java, and JQuery, and\nmaintained the online Absence registration system using Spring and Java.","category":"page"},{"location":"employees/#Internal-Absence-Registration-and-Monitoring-System-1","page":"Employees","title":"Internal Absence Registration and Monitoring System","text":"","category":"section"},{"location":"employees/#","page":"Employees","title":"Employees","text":"He maintained the communication with external systems using LotusScript, XML, and XSLT, and\ndeveloped a connection with AFAS Profit systems using the Restlet framework, Java, and SOAP.","category":"page"},{"location":"employees/#Links-1","page":"Employees","title":"Links","text":"","category":"section"},{"location":"employees/#","page":"Employees","title":"Employees","text":"AngularJs project - 2013: Multiple Choice - Java, GAE, Restlet, Firebase, AngularJS.\nThe course How to use Managed Beans in XPages, part 1, and part 2.","category":"page"},{"location":"employees/#SKILLS-1","page":"Employees","title":"SKILLS","text":"","category":"section"},{"location":"employees/#","page":"Employees","title":"Employees","text":"Outstanding: Java, Docker, REST (Restlet framework), JSON, GAE, JDO, XPages, Lotus Domino, Julia.\nWell known: Scala, Akka, Play, Slick, PostgreSQL, SBT, Python, Flask, JavaScript, AngularJS, HTML/CSS, XML, XSLT, SOAP, Linux.","category":"page"},{"location":"#Our-Story-1","page":"AppliGate","title":"Our Story","text":"","category":"section"},{"location":"#","page":"AppliGate","title":"AppliGate","text":"(Image: AppliGate)","category":"page"},{"location":"#","page":"AppliGate","title":"AppliGate","text":"AppliGate is an IT-Training & Consultancy company in the Netherlands.","category":"page"},{"location":"#History-1","page":"AppliGate","title":"History","text":"","category":"section"},{"location":"#","page":"AppliGate","title":"AppliGate","text":"AppliGate became known in 1986 with the course Hardware Beheer PC, a class where people learned to fix errors that occurred with PCs. In 1994 AppliGate started as Lotus Authorized Education Center, LAEC, with instructor-led Lotus Notes & Domino training. IBM XPages training in 2009. In 2014 we stopped by delivering these courses due to decreasing demand. After first experimenting with Scala, we decided to switch to Julia in July 2019.","category":"page"},{"location":"#Our-Focus-1","page":"AppliGate","title":"Our Focus","text":"","category":"section"},{"location":"#","page":"AppliGate","title":"AppliGate","text":"AppliGate is developing online courses,","category":"page"},{"location":"#","page":"AppliGate","title":"AppliGate","text":"with Julia and Python as programming languages, and\nIoT in mind.","category":"page"},{"location":"#Why?-1","page":"AppliGate","title":"Why?","text":"","category":"section"},{"location":"#","page":"AppliGate","title":"AppliGate","text":"We discovered that Julia is a programming language that is easy to learn. It also supports Jupyter Notebooks (IJulia), ideal for experimenting with Julia via a browser. Two packages make it easy to create online course material:","category":"page"},{"location":"#","page":"AppliGate","title":"AppliGate","text":"Documenter.jl: Learning material and documentation.\nLiterate.jl: IJulia notebooks as teaching material.","category":"page"},{"location":"#Course-Development-1","page":"AppliGate","title":"Course Development","text":"","category":"section"},{"location":"#","page":"AppliGate","title":"AppliGate","text":"Currently, we are developing the 'course' Building Business Applications with Julia. Our goal is to build the software for a modular based system:","category":"page"},{"location":"#","page":"AppliGate","title":"AppliGate","text":"Using Docker,\nthe Onion architecture, and\nMachine Learning.","category":"page"},{"location":"#Languages-and-Tools-1","page":"AppliGate","title":"Languages and Tools","text":"","category":"section"},{"location":"#","page":"AppliGate","title":"AppliGate","text":"Julia;\nFlask/Python;\nAtom;\nGit;\nDocker;\nRaspberry Pi Zero W;\nRaspberry Pi 3B;\nGoogle Kubernetes Engine.","category":"page"},{"location":"contact/#Contact-1","page":"Contact","title":"Contact","text":"","category":"section"},{"location":"contact/#AppliGate-Consultancy-1","page":"Contact","title":"AppliGate Consultancy","text":"","category":"section"},{"location":"contact/#","page":"Contact","title":"Contact","text":"AppliGate Consultancy is the operating company of Edugate Beheer BV.","category":"page"},{"location":"contact/#","page":"Contact","title":"Contact","text":"Chamber of Commerce number: 31028621.","category":"page"},{"location":"contact/#","page":"Contact","title":"Contact","text":"Location number: 000020419244.","category":"page"},{"location":"contact/#Contact-Data-1","page":"Contact","title":"Contact Data","text":"","category":"section"},{"location":"contact/#","page":"Contact","title":"Contact","text":"Address Landweg 74\nZIP code & City 3833 VM LEUSDEN\nCountry The Netherlands\n \nTelephone +31 6 20 146 141\nE-mail rbontekoe@appligate.nl","category":"page"},{"location":"projects/#Current-Project-1","page":"Projects","title":"Current Project","text":"","category":"section"},{"location":"projects/#Online-course-1","page":"Projects","title":"Online course","text":"","category":"section"},{"location":"projects/#","page":"Projects","title":"Projects","text":"We started with the project rbontekoe/RbO.jl. to build up experience with Julia, based on the ports and adapter design pattern. The publisher-subscriber model was chosen, which resulted in the RbO.jl package. With Documenter.jl we wrote the documentation for the module. It also gave us the idea to write courses with Documenter.jl, and developed a tutorial as a test.","category":"page"},{"location":"projects/#","page":"Projects","title":"Projects","text":"There are many excellent online courses nowadays. The content mainly consists of videos, and a syllabus is often missing. We experience it as a problem when you quickly want to look up some code. We will try to combine these two: videos in a curriculum.","category":"page"},{"location":"projects/#Course-Title-1","page":"Projects","title":"Course Title","text":"","category":"section"},{"location":"projects/#","page":"Projects","title":"Projects","text":"Developing Business Applications with Julia.","category":"page"},{"location":"projects/#Basic-Idea-1","page":"Projects","title":"Basic Idea","text":"","category":"section"},{"location":"projects/#","page":"Projects","title":"Projects","text":"Identifying the processes of a training center;\nThe workflow of the specialties registration and course evaluation.","category":"page"},{"location":"projects/#Audience-1","page":"Projects","title":"Audience","text":"","category":"section"},{"location":"projects/#","page":"Projects","title":"Projects","text":"This course is for starting Julia programmers with some basic knowledge of the programming language.","category":"page"},{"location":"projects/#Course-design-1","page":"Projects","title":"Course design","text":"","category":"section"},{"location":"projects/#","page":"Projects","title":"Projects","text":"The course design follows a lecture/lab task-oriented approach.","category":"page"},{"location":"projects/#Course-goals-1","page":"Projects","title":"Course goals","text":"","category":"section"},{"location":"projects/#","page":"Projects","title":"Projects","text":"This course will teach you how to:","category":"page"},{"location":"projects/#","page":"Projects","title":"Projects","text":"Designing a specialty using the ports and adapter design pattern.\nImplementing the design, using:\nStruct's,\nMultiple Dispatch.\nDefining test software.\nUsing Channels for inter-process communication.\nUsing REST API for human interaction\nTurn the code into a Julia module.\nUsing GitHub to upload the software.\nCreate a Dockerfile using the official Julia Image.\nEnable an SSH connection to containers using certificates.\nUsing Docker Compose to create the containers of the application.","category":"page"},{"location":"projects/#Outline-1","page":"Projects","title":"Outline","text":"","category":"section"},{"location":"projects/#","page":"Projects","title":"Projects","text":"Under development, please look at the index of the course.","category":"page"}]
}
