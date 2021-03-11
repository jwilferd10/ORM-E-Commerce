# ORM-E-Commerce

## Video Rundown

## Table of Contents 
  - [Description](#description)
  - [User Story](#user-story)
  - [Resources Used](#resources-used)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contact Information](#contact-information)

## Description:
Internet retail, also known as e-commerce, is the largest sector of the electronics industry, having generated an estimated US$29 trillion in 2017 (Source: United Nations Conference on Trade and Development). This ORM-E-Commerce is the back end for an e-commerce site. There's a plethora amount of things happening within the scripts that takes a bit to understand, thankfully after spending time on this I am definitely leaving with a better understanding more how CRUD methods work and with a better understanding of RESTful CRUD Operations.

## User Story
**AS A manager at an internet retail company**
1. I WANT a back end for my e-commerce website that uses the latest technologies
2. SO THAT my company can compete with other e-commerce companies

**GIVEN a functional Express.js API**

- WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
  - THEN I am able to connect to a database using Sequelize

- WHEN I enter schema and seed commands
  - THEN a development database is created and is seeded with test data

- WHEN I enter the command to invoke the application
  - THEN my server is started and the Sequelize models are synced to the MySQL database

- WHEN I open API GET routes in Insomnia Core for categories, products, or tags
  - THEN the data for each of these routes is displayed in a formatted JSON

- WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
  - THEN I am able to successfully create, update, and delete data in my database

## Resources Used

    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "mysql2": "^2.1.0",
    "sequelize": "^5.21.7"

## Installation
Install this project by clicking the *GREEN* button above, you can download it by ZIP or copy the SSH!

## Usage
<p>First and foremost I strongly recommend trying the ORM out in a local repository. But if you'd like to test it out via the deployed link that is here:</p>

<p> Live Deployment: https://tranquil-sands-85208.herokuapp.com/ </p>

### How To Use: 
- Products
  - To create a new product you'll want to enter: product_name, price, stock, category_id, and finally the tagIds *Note: Needs to be an Array!*
- Tags
  - To create a new tag you'll want to enter: tag_name: 
- Categories
  - To create a new category you'll need to enter: category_name:

Everything else follows simple and easy to remember CRUD methods! 
 
 ## For Quick and Easy Testing!
 
 ### Localhost Links 
 - localhost:3001/api/products/
 - localhost:3001/api/tags/
 - localhost:3001/api/categories/
 #### **OR** 
 ### Heroku Links (Reminder: Be prepared to play around with it)
 - https://tranquil-sands-85208.herokuapp.com/api/products/
 - https://tranquil-sands-85208.herokuapp.com/api/tags/
 - https://tranquil-sands-85208.herokuapp.com/api/categories/

## Contact Information
- ### [jwilferd10](https://github.com/jwilferd10)
