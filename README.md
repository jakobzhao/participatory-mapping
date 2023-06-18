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

> If you are not familiar with these topics, you can find many tutorials online. For example, [W3Schools](https://www.w3schools.com/) provides a comprehensive introduction to HTML, CSS, and JavaScript. [The Command Line Crash Course](https://learnpythonthehardway.org/book/appendixa.html) is a good place to start learning the command line. [The Node.js Tutorial](https://www.tutorialspoint.com/nodejs/index.htm) is a good place to start learning Node.js. [The PostgreSQL Tutorial](https://www.postgresqltutorial.com/) is a good place to start learning PostgreSQL. [The  MapLibre GL JS Docs](https://maplibre.org/maplibre-gl-js-docs/api/) is a good place to start learning Leaflet. [The Github Tutorial](https://guides.github.com/activities/hello-world/) is a good place to start learning Github. [The Heroku Tutorial](https://devcenter.heroku.com/articles/getting-started-with-nodejs) is a good place to start learning Heroku. If you believe you are ready, let's get started!

If you want to learn how the system works, please start with **Step one**, if you just want to build your own participatory mapping project, please start with **Step two**.


## 2. Fork the repository

Certainly! Here's a beginner-friendly tutorial on how to fork the repository at https://github.com/jakobzhao/participatory-mapping under your own account, and rename it to anything you want:

1. Log into your GitHub account.
Open your web browser and go to GitHub. In the top-right corner of the page, you'll see two options: "Sign in" and "Sign up". If you have an account already, click "Sign in". If you don't, click "Sign up" and follow the instructions to create a new account.

2. Go to the repository you want to fork.
In your web browser, navigate to the specific URL of the repository you want to fork, which is https://github.com/jakobzhao/participatory-mapping. You can copy this URL and paste it into your browser's address bar.

3. Fork the repository.
In the top-right corner of the page, you'll see a button that says 'Fork'. Click on it. This will create a copy of the repository under your own GitHub account. A "fork" is essentially your own copy of someone else's project, which you can modify and use as you wish without affecting the original project.

4. Confirm the fork.
You'll be automatically redirected to the new repository under your account. The URL (web address) of this new repository will be something like https://github.com/YourUsername/participatory-mapping, where YourUsername is replaced by your actual GitHub username.

5. Rename the repository. To rename your new repository, you'll need to go to the repository's 'Settings'. You can find the 'Settings' tab towards the right of the page, on the menu bar that starts with 'Code', 'Pull requests', 'Actions', etc.
In the 'Settings' page, scroll down until you see a section called 'Repository name'. There, you'll see a text box with the current name of your repository. Click on the text box and erase the current name. Then, type in the new name you want for your repository. Let's say we want to change the name to 'my-awesome-map'. So, type 'my-awesome-map' into the text box. After typing the new name, scroll down a bit and click on the 'Rename' button. A prompt will pop up asking if you're sure you want to rename your repository. Click 'I understand, rename this repository'.

That's it! You've successfully forked the 'participatory-mapping' repository from jakobzhao's account to your own account, and renamed it to 'my-awesome-map'. From now on, you can access this repository at https://github.com/YourUsername/my-awesome-map, where YourUsername is replaced by your actual GitHub username.

> Once forked and renamed, you can clone the repository to your local machine. To do this, you'll need to have Git installed on your computer. If you don't have Git installed, you can download it from `https://git-scm.com/downloads`. Once Git is installed, you can clone the repository to your local machine.  To do this,  you will need to use either Command Prompt on Windows or Terminal on Mac OS to complete this task. After opening the command prompt or terminal, please navigate to a desired directory for managing your projects using `cd`, like `cd C:\YourDirectory` in command prompt or `cd ~/YourDirectory` in Terminal. Then, clone the forked repository by typing `git clone https://github.com/YourUsername/my-awesome-map.git`

> Once cloned to your local machine, you can edit your repository in your local machine using VS code. Visual Studio Code is a free source-code editor made by Microsoft for Windows, Linux, and MacOS. It includes support for debugging, embedded Git control, GitHub, syntax highlighting, intelligent code completion, snippets, and code refactoring. You can download it from the [Visual Studio Code download page](https://code.visualstudio.com/download). To open a repository in Visual Studio Code: please go to `File` -> `Open Folder...` on Windows or `File` -> `Open...` on MacOS, navigate to your cloned repository and open it. Now, you're ready to edit files in the repository.

For the purpose of simplicity in this tutorial, we'll primarily utilize the GitHub web interface for editing the repository. To learn more about how to edit a repository through the web interface, please check out [this tutorial](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github).


## 3. Understand the mechanism of the system

To know how the system works, we need to understand the structure of the repository, the functionality of the main files, and the system workflow. 

### 3.1 repository structure

In this step, we will walk through the forked repository and understand the structure of the repository and the function of each file. The structure of the repository and the functions of the contained files are show below:

```bash
├── README.md
├── docs
│   ├── index.html
├── src
│   ├── config
│       ├── database.js
│   ├── controllers
│       ├── product.controller.js
│   ├── routes
│       ├── index.js
│       ├── product.routes.js
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

* `docs`: This is a folder where the static files are stored. As a minimum viable solution, it only has one file `index.html`, but you can contain additional files to enrich your own project.
    
  * `docs/index.html`: serves as the main HTML document for the web application, which is a participatory mapping tool.

* `node_modules`: This is a folder where Node.js modules (or packages) are stored. When you use Node.js and install packages using the Node Package Manager (npm), those packages are placed in this folder.

* `src`: This is typically where the source code of the application is stored. For a Node.js application, this would usually contain JavaScript files.
    
  * `src/config`: This is a folder where the configuration files are stored. In this case, it contains a file called `database.js`, which is used to configure the database connection. within this folder, `database.js` is used to configure the database connection. It contains the database connection parameters, such as the host, user, password, and database name.

  * `src/controllers`: This is a folder where the controllers are stored. In this case, it contains a file called `product.controller.js`, which is used to control the product. `product.controller.js` is used to control the product. It contains functions to create, retrieve, update, and delete products.

  * `src/routes`: This is a folder where the routes are stored. In this case, it contains two files: `index.js` and `product.routes.js`. The `index.js` file is used to define the routes for the application, and the `product.routes.js` file is used to define the routes for the product.

  * `src/app.js`: This is the main application file. It is used to configure the application and start the server.

* `PROCFILE`: A Procfile is a mechanism for declaring what commands are run by your application's dynos on the Heroku platform. It is used to explicitly declare what command should be executed to start your app.

* `README.md`: This is a markdown file that usually contains information about the software, such as what it does, how to install it, how to use it, and sometimes, how to contribute to it. It's the first thing people see when they visit the repository on GitHub.

* `datatable.sql`: This appears to be an SQL file, which typically contains SQL commands for interacting with a database. This could be creating tables, inserting data, querying data, etc. In this case, it is likely used to set up the database structure for the participatory mapping application.

* `package-lock.json`: This is an automatically generated file by npm, which is used to keep track of the exact version of every package that is installed. This helps to ensure that the dependencies remain the same on all machines the project is installed on.

* `package.json`: This file is used in Node.js projects to keep track of all the packages (dependencies) that your project uses. This includes things like libraries and frameworks that your project depends on. It can also contain other metadata such as the project's name, description, and version.

* `server.js`: This is likely the main entry point for the application. In a Node.js application, this file usually sets up the server and starts it, often setting up routes for a web server and other server configuration.

### 3.2 system workflow

Let's delve into the system workflow step-by-step to understand how this particular system operates and how you can construct a similar one.

1. **Accessing the Website:** When a user types in  [https://jakobzhao.github.io/participatory-mapping/](https://jakobzhao.github.io/participatory-mapping/) in their browser, they are directed to the `index.html` file in the `docs` folder. This is because GitHub Pages, which is being used to host this site, serves static files and the docs folder is set as the root directory for the website.

2. **Client-Side Operations:** The `index.html` page serves as the client-side of the application, housing the primary functions of the participatory mapping tool. It can dispatch requests to, and receive responses from, the web services hosted on Heroku. For instance, when a user fills out a form and clicks the `submit` button, the client-side code sends a request to the server-side code, which then stores the user-contributed data in the database. The function `submitNewRecord` in the `index.html` file manages the data submission process. In this function, the code snippet `await fetch('https://participatory-mapping-70cdde6a8df5.herokuapp.com/api/add-record', settings)` forwards the data to the server-side code via the `/add-record` route. The `addRecord` function in the `controllers/productController.js` file processes the data and stores it in the database.

3. **Server-Side Operations:** The server-side of the application, hosted on Heroku, uses Node.js for coding. Heroku, a cloud-based platform, enables developers to build, run, and operate applications. The commands to kickstart the server on Heroku are detailed in the PROCFILE. The files `server.js`, `app.js`, and `routes/*.js` are primarily used to set up the server, create web applications, and establish routes to the services. For example, the code snippet `router.post('/add-record', productController.addRecord)` triggers the `addRecord` function in the `controllers/productController.js` file when the client-side code sends a request via the `/add-record` route.

4. **Web Services:** The server-side code handles client-side requests, processing them to return the appropriate response. These web services can retrieve existing data from the database or store new user-contributed data. For example, the `addRecord` function, defined in `controllers/productController.js`, extracts the contributed data (e.g., contributor, content, lat, lng) and stores them in the database. The code snippet `let {recordRows} = await db.query('INSERT INTO "tblRecord"(contributor, content, lat, lng) VALUES ($1, $2, $3, $4)', [contributor, content, lat, lng])` is used for this purpose.

5. **Database Operations:** The application uses a PostgreSQL database to store and manage data. This database is cloud-hosted through Heroku. Connection information for this database is provided in the `src/config/database.js` file, ensuring successful execution of the SQL statement in the data query method `db.query()`.
  
This workflow illustrates how the system uses a combination of static web hosting (via GitHub Pages), server-side operations (via Heroku and Node.js), and cloud-based database management (via Heroku and PostgreSQL) to provide a dynamic and interactive participatory mapping tool.


## 4. Host your project on Heroku

To deploy your forked GitHub repository to Heroku, you'll need to follow these step-by-step instructions. Before starting, ensure you have a Heroku account. If you don't have one, sign up for free at https://signup.heroku.com/.

* Create a new app on Heroku:
  * Log in to your Heroku account.
  * On the Heroku dashboard, click the "New" button, then select "Create new app".
  * Give your app a unique name (e.g., "my-app-name").
  * Choose the region closest to your location.
  * Click the "Create app" button.

* Connect the Heroku app to your GitHub repository:
  * On the "Deploy" tab of your Heroku app dashboard, under "Deployment method", choose "GitHub".
  * In the "Connect to GitHub" section, search for the repository you forked and click the "Connect" button.

* Set up the build command:
  * In the "Deploy" tab of your Heroku app dashboard, scroll down to the "Manual deploy" section.
  * Click the "Deploy Branch" button to manually deploy the app for the first time.
  * In the "Automatic deploys" section, enable automatic deploys if desired.
  * In the "Manual deploy" section, make sure the correct branch is selected.
  * Scroll down to the "Buildpacks" section and click on the "Add buildpack" button.
  * Choose the appropriate buildpack for your application. Since we are deploying a Node.js app, select the "Node.js" buildpack.
  * Click the "Save changes" button to update the buildpacks.

* Verify the deployment:

  * Once the deployment is complete, click the "View" button to open your deployed application in a new tab.
  * Ensure that your application is running as expected.

Congratulations! You have successfully deployed your forked GitHub repository to Heroku. The app is now live and accessible to the public. You can continue making changes to your repository and deploying updates to Heroku using the configured automatic deployment or manually triggering deployments.

Remember to regularly check your Heroku app dashboard for logs and potential issues. You can also monitor your app's performance, scale it as needed, and manage other aspects of your deployed application through the Heroku dashboard.


## 5. Initialize the database

This participatory mapping tool enables the data management through a cloud-based PostgreSQL database that is offered by Heroku. Initializing the database on Heroku involves a few steps. Here is a step-by-step guide on how to do it.

* Create a Heroku Account: If you don't have a Heroku account, go to https://www.heroku.com/ and sign up.

* Create a new Heroku app: After logging into your account, in the dashboard, click on "New" at the top right corner and then "Create new app". Enter your app name and choose a region, then click "Create app".

* Add a PostgreSQL add-on: In your app dashboard, click on the "Overview" tab. Under the "Installed add-ons" section, click on "Configure Add-ons". In the "Add-ons" search bar, type "Heroku Postgres" and select it. Choose the plan you want (there is a free one available) and then click "Provision".

* Retrieve the Database URL: After adding the PostgreSQL add-on to your app, you need to retrieve the database URL. Here are the steps:
  * Click on the "Heroku Postgres" add-on under the "Resources" tab. This will take you to the Heroku Postgres dashboard.
  * In the Heroku Postgres dashboard, click on the "Settings" tab.
  * Click on the "View Credentials" button. This will display the credentials for your PostgreSQL database, including the database URL.

* Connect to your Database: To connect to the database, you can use any PostgreSQL client, such as `pgAdmin`. You need to have pgAdmin installed on your machine. If you don't have it yet, you can download it from the official pgAdmin website. The installation process may vary depending on your operating system. 

* After installing pgAdmin, open it. You will see the pgAdmin dashboard. In pgAdmin, servers are essentially connections to databases. To create a new server:
  * Right-click on the "Servers" in the left panel and choose "Create > Server...". 
  * In the "Create - Server" dialog box, enter a name for the server under the "General" tab. This can be any name you like and doesn't affect the connection.
  * Click on the "Connection" tab. Here, you will enter the details of your Heroku Postgres database. These details can be found from the "View Credentials" section of your database in the Heroku dashboard.
     > - Host: This is the "Host" value in Heroku credentials.
     > - Port: This is the "Port" value in Heroku credentials.
     > - Maintenance database: This is the "Database" value in Heroku credentials.
     > - Username: This is the "User" value in Heroku credentials.
     > - Password: This is the "Password" value in Heroku credentials.
  * After entering these details, click "Save".
  
* Connect to the Database: After creating the server, you can connect to your database. In the left panel, navigate to "Servers > [Your Server Name] > Databases > [Your Database Name]". Double-click on your database name to connect to it.
  
* Open SQL Query Tool: After connecting to your database, you can open the SQL Query Tool. Right-click on your database name and choose "Query Tool". This will open a new SQL Query Tool tab.
  
*  Initialize your Database: In the SQL Query Tool, you can now initialize your database with the provided SQL script. Paste the SQL script in the file `datatable.sql` into the query editor. After pasting the script, click on the "Execute" button (which looks like a "Play" button) to run the script. This will create your table in the database. You have now initialized a table in your PostgreSQL database on Heroku using pgAdmin.

## 6. Publish the map


### switch the basemap

### collect new data and store them in the database

### update the information on the info panel

### new domain name and url
