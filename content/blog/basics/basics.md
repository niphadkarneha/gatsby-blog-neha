---
title: The Basics
date: "2019-06-20T21:53:43+00:00"
---

Just like any other developer out there, I had to get started with Git. Now for someone who is learning
how to code, "Git" can be a bit challenging. Especially if you've never worked in a team before. When I started working as a Research Assistant for the Department of Computer Science at Old Dominion University, I was working with a File Transfer Protocol (FTP) called, "FileZilla". It is free and easy to use, during my first semesters that's all we used to transfer files to and from the server. I used FTP to complete and host a lot of my class projects. It sufficed the need of the hour.

However,

> To err is human - Alexander Pope.

There might have come a time when you would have accidentally overwritten a file or deleted an important folder unintentionally. It has happened to all of us at one point or the other. That's where, "Version Control Systems" come in place. There are different kinds of VCS depending on usage like CVS, SVN, Mercurial, Bazaar, and Git. We started using git for both our web and mobile projects. I've almost only worked on Android for the past year and half. Android Studio has an amazing integration with Git for source control mamangement.


## What is Git?

Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. You can find the git manual right here - [Git](https://git-scm.com/docs). Once you've read the manual you can take a small quiz that will test you knowledge of Git.


## Remember Git is not Github. So What is it, Then?

At a high level, GitHub is a website and cloud-based service that helps developers store and manage their code, as well as track and control changes to their code. The link to Github guides is [here](https://guides.github.com/).If you don't want to go through the entire manual, I completely understand. I can tell you basic commands to get you started but before that lets look at some installations.

### Installing Git on Mac

Open the Terminal program, on the upper right corner locate the search icon/magnifying glass and type, "terminal". Once it's open, type git --version and press enter. If a version number is returned, Git is already installed. If something along the lines of -bash: git: command not found pops up, install Xcode from the App Store.

In XCode, install Command Line Tools: > Preferences > Downloads > Command Line Tools. You can now use Git through Terminal.

It is not necessary but an extremely usefull tool to manage dev tools is called, "Homebrew". It would be amazing if you can install Homebrew.

### Installing Git on Windows

Download Git for Windows. You will be using the Git Bash program. It will utilize all the same commands as Terminal.

Now that we've installed Git on you computer, lets try and make a simple webpage. 

## Github Account

GitHub is the most popular location to host repositories, so go ahead and make an account there if you haven't.

I'll assume your username is you. This would make your new GitHub account github.com/you.

Once you've made your account, create a repository by clicking Add New Repo. Do not initialize with a README.md or .gitignore at this point. We can call the repository, "website". Your repository has been created at github.com/you/website. It should be completely empty.

Secondly, if you are not comfortable with using terminal just yet don't worry. There are the four commands that you need to know. When you first open your terminal you will most likely be in the main directory.

- ls: List all the directories or files.
- cd: Changes the directory. You will need to specify which directory you want to go to for e.g. if you see a 
folder on your computer by the name, "New folder" you can go to that folder using your terminal by typing in,"cd New folder"
- pwd: Will tell you everything that is there in this new folder.
- mkdir: Will help you create a new folder/directory on your computer. 

Lets go step by step now and we will be using the Terminal

1. Create a folder

```
mkdir website
```

2. Go to the workin directory we just created. CD stands for, "Change directory"

```
cd website
```

3. Let's make an html page inside our working directory and let's name it, "index.html"

```
touch index.html
```

4. Write out first line, "Hello World!". Its tradition.

```
vi index.html
```

This will give you the ability to enter text into the document.

Type these 3 lines

```
<!DOCTYPE html>
<h1>Hello World!</h1>
</html> vi index.html
```

5. Press ESC and then SHIFT and "Z".

6. Let's open your webpage and test see what it says

```
open index.html
```

This will open up your browser and by now you should see, "Hello World!".

Now we want to make sure that you save up all the hardwork that you've just put in and it does not get lost. For this we will put or store our index.html page on github.  You'll need to these commands

## Basic Git command for reference

- git config: Configure Git
- git init: Initialize Git repository
- git status: Tells you if you have any files on your computer that you have not transferred to Github yet.
- git add: Track files
- git commit: Commit tracked files
- git push: Upload files
- git pull: Download files


All of the future commands we do today will only apply to your local Git environment. However, there is one important global step to take before doing anything else - configure your Git account.

Configure your global Git account. Open your terminal and copy paste these commands one by once.

> git config --global user.name "Firstname Lastname"
> git config --global user.email username@email.com

Make sure you're still in the project-local folder, then move on. 

Initialize Git repository.

> git init

This initialized an empty Git repository in /Users/you/website-local/.git/

Great! Now you have an empty Git repo on your local computer.

Let's hook up local directory with the repo we made at github.com.

> git remote add origin https://github.com/you/website

Terminal won't respond, but it was successful. Check the status of your local repository by using 

> git status

The terminal will now tell us that there is an index.html file that is not present in our github repository. The message
will go something like this, "nothing added to commit but untracked files present (use "git add" to track)
"

> git add index.html
> git commit -m "adding the html file"
> git push origin master

Now refresh your GitHub page. Success! All your files are now stored on Github.com!
