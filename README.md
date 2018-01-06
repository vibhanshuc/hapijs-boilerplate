# Hapijs Boilerplate

A boilerplate for REST API's based on hapijs

## Requirements
1. Node 7+
1. NPM 3+

## Instructions
1. Clone the repo
1. Run `npm install`
1. Set NODE_ENV environment variable
   * production
   * development
   * local
1. Create a env file (`local.env`, `developement.env`, `production.env`) from a
    copy of `env.sample` file in project root directory.
    
       ./
        |- env.sample
        |- local.env
        |- development.env
        |- production.env
         
1. Run `node index.js` from root directory of project

## Use nodemon during development
1. Run `npm install -g nodemon`
1. Run `nodemon index.js` from root directory of project

## Features
1. Code linting using ESLINT
1. Reload server on changes using Nodemon
1. Documentation using HAPI SWAGGER
1. Manage environment variables using DOTENV
