# A Minimum Viable Participatory Mapping
### Bo Zhao | Department of Geography, University of Washington
### June 17th, 2023 

## 1. Introduction

This is a tutorial to make a minimum viable participatory mapping project. Participatory mapping, also known as community-based mapping, is a general term that refers to the process of creating maps by, for, or with local communities, often in collaboration with specialists. It allows local communities to represent their own perceptions, knowledge, and experiences about their environment. The aim is to produce a map that combines local knowledge with spatial data to support decision-making processes. These maps can be used for a variety of purposes, such as natural resource management, land use planning, or advocacy for land rights.

 With this project, users can contribute their local knowledge by clicking on a map, inputting their information, and seeing their input represented as a red dot. Existing contributions can be viewed in a similar manner. While this basic model offers fundamental functionality, it can be tailored or expanded to suit different participatory mapping initiatives. This approach can be particularly beneficial for digital geographers who want to kick-start their own participatory mapping projects. Examples of such initiatives include "Shifting LGBTQ+ Spaces", "Archiving the CHOP", and "Queering the Map".

Here are a few prerequisites to follow this tutorial. You should have:

- A basic understanding of HTML, CSS, and JavaScript,
- Familiarity with the command line, Node.js, and the PostgreSQL database,
- Some experience with open source web mapping, and
- Accounts on Github and Heroku, and be willing to pay $20 for the Heroku service.

If you are not familiar with these topics, you can find many tutorials online. For example, [W3Schools](https://www.w3schools.com/) provides a comprehensive introduction to HTML, CSS, and JavaScript. [The Command Line Crash Course](https://learnpythonthehardway.org/book/appendixa.html) is a good place to start learning the command line. [The Node.js Tutorial](https://www.tutorialspoint.com/nodejs/index.htm) is a good place to start learning Node.js. [The PostgreSQL Tutorial](https://www.postgresqltutorial.com/) is a good place to start learning PostgreSQL. [The  MapLibre GL JS Docs](https://maplibre.org/maplibre-gl-js-docs/api/) is a good place to start learning Leaflet. [The Github Tutorial](https://guides.github.com/activities/hello-world/) is a good place to start learning Github. [The Heroku Tutorial](https://devcenter.heroku.com/articles/getting-started-with-nodejs) is a good place to start learning Heroku. If you believe you are ready, let's get started!

If you want to learn how the system works, please start with **Step one**, if you just want to build your own participatory mapping project, please start with **Step two**.


## 2. Fork the repository

Certainly! Here's a beginner-friendly tutorial on how to fork the repository at https://github.com/jakobzhao/participatory-mapping under your own account, and rename it to anything you want:

1.	Log into your GitHub account.
Open your web browser and go to GitHub. In the top-right corner of the page, you'll see two options: "Sign in" and "Sign up". If you have an account already, click "Sign in". If you don't, click "Sign up" and follow the instructions to create a new account.

2.	Go to the repository you want to fork.
In your web browser, navigate to the specific URL of the repository you want to fork, which is https://github.com/jakobzhao/participatory-mapping. You can copy this URL and paste it into your browser's address bar.

3.	Fork the repository.
In the top-right corner of the page, you'll see a button that says 'Fork'. Click on it. This will create a copy of the repository under your own GitHub account. A "fork" is essentially your own copy of someone else's project, which you can modify and use as you wish without affecting the original project.

4.	Confirm the fork.
You'll be automatically redirected to the new repository under your account. The URL (web address) of this new repository will be something like https://github.com/YourUsername/participatory-mapping, where YourUsername is replaced by your actual GitHub username.

5.	Rename the repository. To rename your new repository, you'll need to go to the repository's 'Settings'. You can find the 'Settings' tab towards the right of the page, on the menu bar that starts with 'Code', 'Pull requests', 'Actions', etc.
In the 'Settings' page, scroll down until you see a section called 'Repository name'. There, you'll see a text box with the current name of your repository. Click on the text box and erase the current name. Then, type in the new name you want for your repository. Let's say we want to change the name to 'my-awesome-map'. So, type 'my-awesome-map' into the text box. After typing the new name, scroll down a bit and click on the 'Rename' button. A prompt will pop up asking if you're sure you want to rename your repository. Click 'I understand, rename this repository'.

That's it! You've successfully forked the 'participatory-mapping' repository from jakobzhao's account to your own account, and renamed it to 'my-awesome-map'. From now on, you can access this repository at https://github.com/YourUsername/my-awesome-map, where YourUsername is replaced by your actual GitHub username.

> Once forked and renamed, you can clone the repository to your local machine. To do this, you'll need to have Git installed on your computer. If you don't have Git installed, you can download it from `https://git-scm.com/downloads`. Once Git is installed, you can clone the repository to your local machine.  To do this,  you will need to use either Command Prompt on Windows or Terminal on Mac OS to complete this task. After opening the command prompt or terminal, please navigate to a desired directory for managing your projects using `cd`, like `cd C:\YourDirectory` in command prompt or `cd ~/YourDirectory` in Terminal. Then, clone the forked repository by typing `git clone https://github.com/YourUsername/my-awesome-map.git`

> Once cloned to your local machine, you can edit your repository in your local machine using VS code. Visual Studio Code is a free source-code editor made by Microsoft for Windows, Linux, and MacOS. It includes support for debugging, embedded Git control, GitHub, syntax highlighting, intelligent code completion, snippets, and code refactoring. You can download it from the [Visual Studio Code download page](https://code.visualstudio.com/download). To open a repository in Visual Studio Code: please go to `File` -> `Open Folder...` on Windows or `File` -> `Open...` on MacOS, navigate to your cloned repository and open it. Now, you're ready to edit files in the repository.

For the purpose of simplicity in this tutorial, we'll primarily utilize the GitHub web interface for editing the repository. To learn more about how to edit a repository through the web interface, please check out [this tutorial](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github).


## 3. Understand the functions

### 3.1 repository structure

In this step, we will walk through the forked repository and understand the structure of the repository and the function of each file. The structure of the repository is show below:

```bash
├── README.md
├── docs
│   ├── index.html
├── src
│   ├── config
│   ├── controllers
│   ├── routes
│   ├── app.js
├── node_modules
│   ├── ...
├── server.js
├── package.json
├── database.sql
├── package.json
├── package-lock.json
├── PROCFILE
```

The function of each folder and main file are listed below:

• `docs`: This is usually a folder where documentation files are stored. It might contain additional information about how to use the software, the design decisions that were made during its development, or any other kind of information that might be helpful to users or developers.
    
- `docs/index.html`: serves as the main HTML document for the web application, which is a participatory mapping tool.

• `node_modules`: This is a folder where Node.js modules (or packages) are stored. When you use Node.js and install packages using the Node Package Manager (npm), those packages are placed in this folder.

• `src`: This is typically where the source code of the application is stored. For a Node.js application, this would usually contain JavaScript files.

• `PROCFILE`: A Procfile is a mechanism for declaring what commands are run by your application's dynos on the Heroku platform. It is used to explicitly declare what command should be executed to start your app.

• `README.md`: This is a markdown file that usually contains information about the software, such as what it does, how to install it, how to use it, and sometimes, how to contribute to it. It's the first thing people see when they visit the repository on GitHub.

• `datatable.sql`: This appears to be an SQL file, which typically contains SQL commands for interacting with a database. This could be creating tables, inserting data, querying data, etc. In this case, it is likely used to set up the database structure for the participatory mapping application.

• `package-lock.json`: This is an automatically generated file by npm, which is used to keep track of the exact version of every package that is installed. This helps to ensure that the dependencies remain the same on all machines the project is installed on.

• `package.json`: This file is used in Node.js projects to keep track of all the packages (dependencies) that your project uses. This includes things like libraries and frameworks that your project depends on. It can also contain other metadata such as the project's name, description, and version.

• `server.js`: This is likely the main entry point for the application. In a Node.js application, this file usually sets up the server and starts it, often setting up routes for a web server and other server configuration1.


## 3. Host your project on Heroku

the project on Heroku

Grant Heroku access to external accounts for additional functionality.


## 4. Initialize the database



## 5.  Customize the web map 

### switch the basemap

### collect new data and store them in the database

### update the information on the info panel

### new domain name and url
