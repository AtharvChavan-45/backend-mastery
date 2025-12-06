require('dotenv').config();
const express = require('express');
// import express from "express";
const app = express();

const port = 4000;
const Githubdata = {
    "login": "AtharvChavan-45",
  "id": 158123475,
  "node_id": "U_kgDOCWzF0w",
  "avatar_url": "https://avatars.githubusercontent.com/u/158123475?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/AtharvChavan-45",
  "html_url": "https://github.com/AtharvChavan-45",
  "followers_url": "https://api.github.com/users/AtharvChavan-45/followers",
  "following_url": "https://api.github.com/users/AtharvChavan-45/following{/other_user}",
  "gists_url": "https://api.github.com/users/AtharvChavan-45/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/AtharvChavan-45/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/AtharvChavan-45/subscriptions",
  "organizations_url": "https://api.github.com/users/AtharvChavan-45/orgs",
  "repos_url": "https://api.github.com/users/AtharvChavan-45/repos",
  "events_url": "https://api.github.com/users/AtharvChavan-45/events{/privacy}",
  "received_events_url": "https://api.github.com/users/AtharvChavan-45/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Atharv Ashvin Chavan",
  "company": null,
  "blog": "",
  "location": "maharashtra, india",
  "email": null,
  "hireable": null,
  "bio": "👋🏻 Hello, I'm Atharv Ashwin Chavan |\r\n💻 MERN Stack Developer |\r\nIf I am not building something,\r\n😊 I would be thinking of building something.\r\n",
  "twitter_username": null,
  "public_repos": 9,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-01-30T03:19:13Z",
  "updated_at": "2025-11-29T05:09:50Z"
}

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Successful connection of backend</h1>')
})
app.get('/github',(req,res)=>{
    res.json(Githubdata);
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`)
})