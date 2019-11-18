---
title: Natural Language Processing for Wesbsite Landing Page
date: "2019-10-15T20:17:37+00:00"
layout: post
draft: false
path: "/posts/SentimentAnalysis/"
category: "Sentiment Analysis"
tags:
  - "Python"
  - "GoogleNaturalLanguage"
  - "Google Cloud"
  - "Natural Language API"
description: "Sentiment analysis of my webpage."
---

I have used Natural Language Proessing (NLP) tools for sentiment analysis in my past projects. In the process to understand NLP, you will carry out analysis on consumer reviews, product reviews, speeches etc they form the building blocks. Up until a couple of days back, it dawned on me that I never carried sentiment analysis on my own website. I have been only studying website traffic, and bounce rates. 

I have used python in the past to do this task but I wanted to try something new and I looked at the products offered by Google and IBM Watson. No particular reason for choosing these two companies or their tools other than search engine ranking. The way in these tools report their analysis differ in detail but the overall gist remains the same. The sentiment score ranges ranges from -1 (minus one) to +1 (plus one), negative to positive. The Magnitude of the score refers to the intensity of the sentiment. 

I used the content from my landing page to carry out the analysis, and the initial results were shocking to me. The landing page content got a neutral score of 0.2 with a magnitude of 3.6, I didn't realize my content was neutral and negative, I am just entering the job market I didn't want to sound neutral or negative. Words that had negative or neutral connotations like down, fall, amateur etc brought down the score substantially. If we look at the words in terms of context they are not particularly negative, for e.g. "jot down" and "graduating in Fall". But I did make changes to my content and my findings are below. Here are the before and after scores, the change were mostly restructing and sentence reconstruction.


<div style="width:100%;height:0;padding-bottom:73%;position:relative;"><iframe src="https://giphy.com/embed/UWaunbOKkwwZILAYda" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/UWaunbOKkwwZILAYda">Visualization created using GIPHY</a></p>


Here are the brief scores for both IBM Watson and Google's API.


| Tool     						  | Sentiment Score | Magnitude     |
| :---        					  |    :----:   	|          ---: |
| IBM Watson  					  | 0.75   			| NA   			|
| Google's Natural Language API   | 0.7        		| 6.6     		|




References:

Cloud Natural Language  |  Cloud Natural Language API  |  Google Cloud. (n.d.). Retrieved from https://cloud.google.com/natural-language/

IBM Cloud Tone Analyzer | Tone Analyzer | IBM Cloud. (n.d.). Retrieved from https://cloud.ibm.com/docs/services/tone-analyzer?topic=tone-analyzer-about/ 