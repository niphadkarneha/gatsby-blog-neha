---
title: Adieu to Python 2
date: "2019-10-01T00:00:00+00:00"
---

If you began your journey on learning how to code a couple of years back and your chosen language was Python most likely you would have started with Python 2. Other programming languages can be overwhelming for beginner programmers but Python 2 can be easy to read and understand. Over the past decade, we have been gradually moving towards Python version 3. Whether Python 2 and Python 3 are different languages or the same language with different version can be a debate over cup of coffee but the pressing issue of 2019 is the change from Python 2 to Python 3.

Since, the beginning of 2019 you would have come across something like this on your Command Line or Terminal.

> DEPRECATION: Python 2.7 will reach the end of its life on January 1st, 2020. Please upgrade your Python as Python 2.7 won't be maintained after that date. A future version of pip will drop support for Python 2.7.

The alert tells us that after Jan. 1, 2020, Python 2.7 — the last version of Python 2 will no longer be actively maintained. We've know this for a couple of years now and if you look at the official python documentation, it gives us the precise timeline for each version

![Timeline](./timeline.PNG)

Enterprises big and small, if not already will soon migrate to Python 3. If you are a student like me who uses Python for basic programming assignments or Data Science projects and if you do not work on any enterprise version maybe one of the libraries that you’re using is bulky and is compatible only with Python 2, in such instances you will have to keep your code compatible with Python 3.  Most of the Supporting libraries and modules for python have already migrated.

Sometime ago, I helped, [Transitland-processing-animation](https://www.mapzen.com/blog/animating-transitland/) migrate from Python 2 to Python 3. One cannot dismiss the benefits of Open Source Software's. The process of migration was easy and straightforward, tools like 2to3 will help and while they are useful, they do have some limitations. The differences in Python 2 and Python 3 are not just the differences in print statements

```py
print 1 + 2
```

VS

```py
print(1+2)
```

It goes deeper into bug fixes and I'll write about them seperately, it is beyond the scope of this article. I’m going to briefly highlight how to properly install Python 3 on a Mac OS X computer.  

Python 2 is installed by default on Apple computers, Python 3 is not. You can confirm this by typing in Terminal
python --version and hitting Enter, if there are no errors you will most likely see:

![python2](./python2.PNG)

Now, remember we want the latest version of Python 3 i.e. Python 3.7.4. In order to do that we need Xcode and Homebrew

```sh
$ xcode-select --install
```

Click through all the confirmation commands. Xcode is a large program and it will take sometime to download and install. (It also depends on your internet connection)
Next, let's install Homebrew:

```Sh
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

To confirm Homebrew installed correctly, run this command:

```Sh
$ brew doctor
```

Install Python 3
To install the latest version of Python, run the following command:

```Sh
$ brew install python3
```

Now let’s confirm which version was installed:

```Sh
$ python3 --version
```

To open a Python 3 shell from the command line type python3:
```Sh
$ python3
```

The output you will see:
![python3](./python3.PNG)

In order to exit, type exit() and press Return

OR

Ctrl-D (at the same time)


Note you can still run Python shells with Python 2 by simply typing python:

```Sh
$ python
```

To install with Virtual Environments, The Hitchhiker’s guide to python gives a great step by step tutorial on just how to do that. I have included one useful link in the references.

The switch from Python 2 to Python 3 albeit the huge workload does not have to be the Impending Apocalypse for the software world, we can be proactive, contribute to open source projects, and breathe new life into the amazing softwares out there. Afterall, we do have approximately 2 months and 30 days to go :)

<strong>References:</strong>

2017, 3. A. (n.d.). TransitFlow - using Python and Processing to visualize regional transit frequency. Retrieved from https://www.mapzen.com/blog/animating-transitland/ </br>

Homebrew. (n.d.). Retrieved from https://brew.sh/ </br>

Pipenv & Virtual Environments - The Hitchhiker's Guide to Python. (n.d.). Retrieved from https://docs.python-guide.org/dev/virtualenvs/#virtualenvironments-ref </br>

Porting Python 2 Code to Python 3¶. (n.d.). Retrieved from https://docs.python.org/3/howto/pyporting.html </br>
Python 2.7 Countdown. (n.d.). Retrieved from https://pythonclock.org/ </br>
