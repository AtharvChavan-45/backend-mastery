# backend-mastery
A modular and scalable backend crafted with Node.js + Express + MongoDB. Plug-and-play APIs, smooth authentication, clean architecture, and ready for real-world deployment. Clone → Install → Run → Build!

## Express for routing

Express is a backend framework in Node.js that helps you:
 - Build web servers
 - Create APIs
 - Handle HTTP requests (GET, POST, etc.)
 - Send responses to the client (browser, frontend app)

It makes server development easy, fast, and organized.

```js
const express = require('express');
const app = express();// App is now your server
```

## Mongoose for database connection

- Mongoose is a Node.js package used to work with MongoDB database easily.
- Mongoose is a middleman between Node.js and MongoDB who helps store and fetch data in a safe and organized way.
- MongoDB stores data in a non-SQL format (documents).

Mongoose helps you:
- ✔ Connect Node.js app to MongoDB
- ✔ Create database tables (called models)
- ✔ Validate data (proper format)
- ✔ Run queries (find, update, delete data)

```js
const mongoose = require('mongoose');
```
### Schema = structure or blueprint of data

```js
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String
})
```
### Model — creating collection (table)

```js
const User = mongoose.model('User', userSchema)
```
This creates a User collection in MongoDB
(Collection = table in SQL)

## dotenv package -

- dotenv is a package that helps you store secret information (like passwords, database links, API keys) in a separate file called .env
- Instead of writing secrets directly in your code, you write them in .env file
- - require('dotenv').config(); loads those secret values into your project so you can use them

# .env file

```js
PORT=5000
MONGO_URI=mysecretpassword
```
# server.js file

```js
require('dotenv').config();

console.log(process.env.PORT);       // 5000
console.log(process.env.MONGO_URI); // mysecretpassword
```

