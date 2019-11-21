---
title: Facial Recognition with Python Code
date: "2019-11-21T20:48:51+00:00"
layout: post
draft: false
path: "/posts/FacialRecognitionWithCode/"
category: "Facial Recognition and Python"
tags:
  - "face_recognition"
  - "Python"
  - "Pillow"
description: "Facial Recognition with Python Code"
---

#Work-In-Progress

CS50 or Computer Science 50 is a series of introductory course taught at Harvard University. Amongst the lecture series,  [CS50 2019 - Lecture 6 - Python](https://www.youtube.com/watch?v=fL308_-Kbt0) taught by Dr. David Malan is one of the best introductory courses out there. I learned python on my own through scraping the web but CS50 python course is absolute joy to watch. I would highly recommend it to anyone who is trying or thinking of learning python. Towards the end of Lecture 6, Dr. Malan plays with Facial Recognition and I could not help but think when I started out it was not this easy.

Dr. Malan made use of a library in Python called, [Face Recognition](https://pypi.org/project/face_recognition/), which is by far the simplest library out there equipped with a lot
of sample source codes. I tried it for myself but I did not the reader of this article to worry about installing libraries of making sure that they had the right version of Python installed.
So, I decided to run the code on Google Colaboratory, all you need to make sure is that you have a google account to sign in.

Face Recognition library let's you upload a known image which will be used for the purpose of identification. I have used an image that can be found on almost all of my social media accounts

![Profile Picture](./nehaprofile.PNG)

Python is going to rely on libraries like Face Recognition, Pillow, and NumPy to use the known image and search for my face in the group. As a test image, I have used a group image. This particular photograph was taken last year in Summer 2018, when I volunteered for the Machine Learning and Data Science Bootcamp held at Old Dominion University (ODU) in collaboration with Virginia Space Grant Consortium (VSGC). In this image, you will see Me(Neha), Dr. Ravi Mukkamala (Chair - Department of Computer Science), Dr. Yaohang Li (Associate Professor at ODU), and seniors from High School in the Hampton Roads area. This workshop was conducted in order to promote STEM education. You can see we can successfully detect my face, and it can be marked by a bounding box around it.

![Group Picture](./result_neha.PNG)

You can watch the whole thing there

<iframe width="560" height="315" src="https://www.youtube.com/embed/fL308_-Kbt0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
