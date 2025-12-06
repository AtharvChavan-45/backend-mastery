### backend-mastery
A modular and scalable backend crafted with Node.js + Express + MongoDB. Plug-and-play APIs, smooth authentication, clean architecture, and ready for real-world deployment. Clone → Install → Run → Build!

## Express for routing

Express is a backend framework in Node.js that helps you:
	•	Build web servers
	•	Create APIs
	•	Handle HTTP requests (GET, POST, etc.)
	•	Send responses to the client (browser, frontend app)

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
✔ Connect Node.js app to MongoDB
✔ Create database tables (called models)
✔ Validate data (proper format)
✔ Run queries (find, update, delete data)

```js
const mongoose = require('mongoose');
```
# Schema = structure or blueprint of data

```js
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String
})
```
# Model — creating collection (table)

```js
const User = mongoose.model('User', userSchema)
```
This creates a User collection in MongoDB
(Collection = table in SQL)