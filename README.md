# Prompter-Friday-Project

At Dev Academy each week we participate in a Friday group project where we have to make a fullstack app from scratch in a day. This project we were in a group of three, which was a challenge but we managed to successfully create our MVP. 

We decided as everyday we always answer a icebreaker question to turn these questions into an app similar to REDDIT.
Here is a basic overview of our userstory and code. 

## User story MVP

* To view all prompts
* To click on a prompt and see all comments based on the prompt
* Login and comment their thoughts on prompt
* Delete their own comment

  ### Stretch
  * only update and delete comments they have made
  * show user who added comment


## Frontend set-up
 * Routes using react-router-dom
 * User Login using Auth0
 * useMutation to send form data to backend
 * Hooks- creating own hooks for requests
 * CSS for basic styling


## Backend set-up
* Express for routes - where we will add in our middleware
* Knex library for database queries
* Two migration tables - comments and prompts
  
  



For a more indepth reflection click [here](https://medium.com/@millerkatie1990/prompter-icebreaker-questions-bbfcb237105c) for my blog. 


npm install # to install dependencies
npm run dev # to start the dev server
```

You can find the server running on [http://localhost:3000](http://localhost:3000) and the client running on [http://localhost:5173](http://localhost:5173).
