# gr-Model-View-Controller-Challenge_TechBlog
## Description

Internet retail, also known as e-commerce, plays a significant role within the electronics industry, as it empowers businesses and consumers alike to conveniently engage in online buying and selling of electronic products. In the latest available data from 2021, the industry in the United States alone was estimated to have generated the substantial amount of US$2.54 trillion, according to the United Nations Conference on Trade and Development. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. With that being said, this project was developed using some starter code to create a back-end app for an e-commerce type applicattion. The bases of this app uses the CLI and ORM mapping for getting data, storing data and or updating data using different types of RESTFUL api calls:

  Methods of HTTP calls:

      - GET
      - POST
      - UPDATE
      - DELETE

## Table of Contents
- [gr-Model-View-Controller-Challenge\_TechBlog](#gr-model-view-controller-challenge_techblog)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tools \& resources used:](#tools--resources-used)
  - [Contributing](#contributing)
  - [Contact Info](#contact-info)

## Installation 

First you should clone this repo (https://github.com/grosario1/gil-E_commerce_Back_End-ORM.git). You will need to ensure you install the npm utility and express.js framework in order for you run the app. You can follow the instructions to install the utility from here: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm. Once, it is install, use the cmd to navigate to the repo you just cloned and run.... `node init -y` to initized the node js project, then install the express js package by running `npm install --save express`. You will also need to install the mysql2 framework in order to allow to code to connect to your mysql instance and database. Since you will need to connect to the database using a user name and password, it is recommended to store your credentials into a different file and call them from your code using variables. With this being said, in addtion to installing the other npm frameworks & modules, you should install `dotenv` which is a zero-dependency module that loads environment variables from a .env file into process.env. Install this module by running `npm install --save dotenv`.
## Usage


- **Step #1:** Install MySQL into your local environment. You can follow the installation guide here: https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/

- **Step #2:** Ensure you start the mysql server in your local environment. See guides: (https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/)

- **Step #3:** From directory where you cloned the repo, log into the mysql database, `mysql -uroot -p`

- **Step #4:** Ensure you source the database schema and seeds files.

e.g.

```
mysql> source db/schema.sql
Query OK, 3 rows affected (0.02 sec)

Query OK, 1 row affected (0.00 sec)

Database changed
```
- **Step $5:** From directory where you cloned the repo, run `npm run seed` to seed the database with the data.

- **Step #6:** From directory where you cloned the repo, run `npm run start` from the command line to start the npm app and the app will start listening in your localhost on port 3001.

- **Step #7:** You can now use an api development platform tool such as Postman (https://www.postman.com) or Insomnia (https://insomnia.rest/) to test the api routes for this app. See demo below using Insomnia to test the routes:


- Example of ORM app - Ecomm backend (click on Walkthrough video link):



You can find code repo [here.](https://github.com/grosario1/gil-E_commerce_Back_End-ORM)


## Tools & resources used:

- Module 14 examples
- JavaScript
- local mySQL client - https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/
- npm package manager - https://docs.npmjs.com/cli/v8/commands/npm-install
- mysql2 - https://www.npmjs.com/package/mysql2
- dotenv npm package - https://www.npmjs.com/package/dotenv

## Contributing
The project is open for contributions. If you would like to contribute, create a new branch from the main and add any updates as deemed necessary. If you should find any issues with the code, please open a 'New Issue' from https://github.com/grosario1/gil-E_commerce_Back_End-ORM/issues and these request can be review and updated accordingly.
## Contact Info
For more questions, feel free to contact me:

- GitHub: https://github.com/grosario1
- Email: grosario@alum.quinnipiac.edu

