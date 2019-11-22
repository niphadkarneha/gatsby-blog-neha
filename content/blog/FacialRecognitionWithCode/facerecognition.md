---
title: Face Recognition with Python Code
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

Face Recognition library for Python is a powerful, easy to use, and simplest library. This blog post is for beginner's who want to dabble with Face detection or Object detection
using Python. I am going to use Google Colaboratory tool so that you do not have to worry about installing libraries or making sure that you have the right version of python.

Google Colaboratory is a jupyter notebook environment that runs on the cloud and does not require any setup. It is easy, free to use, and wait for it

<div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/5gYaMoRVw28vMdtZ3n" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/cc-gpu-gumgum-5gYaMoRVw28vMdtZ3n">Free GPU</a></p>

All you need to make sure is that you have a google account to sign in and the tutorial is right [here](https://colab.research.google.com/notebooks/welcome.ipynb).

Let's get started, in this 2 part tutorial we will first try to detect one image or one person from a group. In Part 2, we will detect 2 images or 2 people and label the rest as unknown.

## Part 1

### Detecting 1 Person Amongst Many

Face Recognition library let's you upload an image, often called as the, "known image" which will be used for the purpose of identification. I have used an image that can be found on almost all of my social media accounts.

![Profile Picture](./nehaprofile.PNG)

Figure 1: My profile picture which will be called as, "Known image".

Python is going to rely on libraries like Face Recognition, Pillow, and NumPy to use the known image and search for my face in the group. As a test image, I have used a group image. This particular photograph was taken last year in Summer 2018, when I volunteered for the Machine Learning and Data Science Bootcamp held at Old Dominion University (ODU) in collaboration with Virginia Space Grant Consortium (VSGC). In this image, you will see Me (Neha), Dr. Ravi Mukkamala (Chair - Department of Computer Science), Dr. Yaohang Li (Associate Professor at ODU), and seniors from High School in the Hampton Roads area. This workshop was conducted in order to promote STEM education. You can see we can successfully detect my face, and it can be marked by a bounding box around it.

![Group Picture](./result_neha.PNG)
Figure 2: You can see the bounding box around my face, the library was 100% accurate.

## Part 2

### Detecting 2 People Amongst Many

Let's try and recognize more people in the same group picture. Let's try and recognize the Chair for the Department of Computer Science at ODU, Dr. Ravi Mukkamala, and we'll for everyone else in the image, we will try and tag them as unknown. In order to do this, we will need to download Image and ImageDraw from the Pillow library since I will be drawing on the images. Just like our previous example, the way we identified my image, we will replicate it for Dr. Ravi. I will load_image_file as a numpy array, then I will use face_encodings to return a list of 128-dimensional face encodings.
We will only need the first item and we can set the index to [0]. Now, we have face encodings for me and Dr. Ravi.

The next thing I want to do is create a list of encoding and names for both of us. The rest of the procedure remains fairly identical to the first process. In the resulting image below, you can see that all of the faces are annotated with some information, in case of Dr. Ravi and myself we have our names below our images but rest of them are labelled as unknown.

![Group Picture](./final.PNG)
Figure 3: You can see the bounding boxes on all our faces but the program only recognizes our names and labels them. Rest of the faces are labelled as unknown.

For Beginner's, who are trying to learn Python and explore all the things you can do with it. I found a great lecture by Dr. David Malan who teaches Computer Science 50 or CS50 at Harvard University. Amongst the lecture series,  [CS50 2019 - Lecture 6 - Python](https://www.youtube.com/watch?v=fL308_-Kbt0) taught by Dr. David Malan is one of the best introductory courses out there. I learned python on my own through scraping the web but CS50 python course is absolute joy to watch. I would highly recommend it to anyone who is trying or thinking of learning python. Towards the end of Lecture 6, Dr. Malan plays with Facial Recognition and he uses the same code, albeit on his computer. I have created the Google Colab link so that you can try this for yourself, just download the [ImageRecognition.ipnyb](https://github.com/niphadkarneha/FaceRecognition/blob/master/ImageRecognition.ipynb) you can either run it on Anaconda or Google Colab, the choice is yours.

If you want to watch the CS50 Lecture 6 Python, you can watch the whole thing there

<iframe width="560" height="315" src="https://www.youtube.com/embed/fL308_-Kbt0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


Happy Learning 📜
