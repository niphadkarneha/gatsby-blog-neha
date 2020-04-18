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

Natural Language Processing  (NLP) is a subfield of Artificial Intelligence where the goal is to understand, comprehend, and decipher natural language used by humans. There are gamut of tools available to carry out various tasks of NLP, on the one hand we have open source tools like SpaCy, NLTK, and NLPjs and on the other we have proprietary software by IBM Watson, Amazon Comprehend, and Google’s Natural Language.


Sentiment Analysis is a part of NLP, which is built to identify and categorize content computationally into positive, negative, and neutral. From a Business point of view, one can carry out data analysis on consumer reviews, product reviews, social media content to know how well a product is being received.


Up until a couple of days back, it dawned on me that I never carried sentiment analysis on my own website. My website is a product that I have created and so far I have been its reach for e.g. website traffic, bounce rates, geolocation of site visitors etc. I never analyzed the content I am publishing out there, I wanted my content to be positive and borderline neutral but not negative.

I decided to investigate and used a simple programming language like Python and its related libraries like Natural Language Toolkit(NLTK) and SpaCy carry out Sentiment analysis. In addition, I wanted to learn a new tool, I read the documentation on products offered by Google and IBM Watson. I have no preference nor any particular reason for choosing these two products, it was more of the availability. The way these tools report their analysis differ in detail but the overall gist remains the same. 

The sentiment score ranges ranges from -1 (minus one) to +1 (plus one), negative to positive. The magnitude of the score refers to the intensity of the sentiment. I used the content from my landing page to carry out the analysis, and the initial results were shocking. The landing page content got a neutral score of 0.2 with a magnitude of 3.6.

I did not realize my content was neutral and negative, I am entering the job market and I did not want my content to have any neutral or negative connotations. Words that had negative or neutral connotations like, 'down', 'fall', 'amateur' etc brought down the score substantially. If we look at the words in terms of context they are not particularly negative, for e.g. “jot down” and “graduating in Fall”. But I did make changes to my content and my findings are below. Here are the before and after scores, the change were mostly restructuring and sentence reconstruction.


<div style="width:100%;height:0;padding-bottom:73%;position:relative;"><iframe src="https://giphy.com/embed/UWaunbOKkwwZILAYda" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/UWaunbOKkwwZILAYda">Visualization created using GIPHY</a></p>


Here are the brief scores for both IBM Watson and Google's API.


| Tool     						  | Sentiment Score | Magnitude     |
| :---        					  |    :----:   	|          ---: |
| IBM Watson  					  | 0.75   			| NA   			|
| Google's Natural Language API   | 0.7        		| 6.6     		|


Now, I am sending out postive content out there

<div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/WOlmbj2oKd1Je9WeCB" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/good-vibes-only-goodvibesonly-WOlmbj2oKd1Je9WeCB">Visualization by GIPHY</a></p>

References:

Cloud Natural Language  |  Cloud Natural Language API  |  Google Cloud. (n.d.). Retrieved from https://cloud.google.com/natural-language/

IBM Cloud Tone Analyzer | Tone Analyzer | IBM Cloud. (n.d.). Retrieved from https://cloud.ibm.com/docs/services/tone-analyzer?topic=tone-analyzer-about/ 
