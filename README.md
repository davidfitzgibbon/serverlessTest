# Install

### Install Netlify CLI

```yarn global add netlify-cli```

[docs](https://docs.netlify.com/cli/get-started/)


### Install requirements in functions folder

```cd functions; npm i```


### Set up your .env file

You'll find the file `functions/.env-sample`. This is a started file for you to base your own `.env` file on. Create a copy of `.env-sample` in the same folder and name it `.env`.

In this file is a variable called `DOMAINS`. This string contains all the domains that the API will check.

These domains are serparated by piped "OR"s. This is later turned into an array in JS using `.split("||")`.

To add a new domain to the list just add `||domain.com`.

Do not include a trailing `/`, this is accounted for in the url and could cause issues with urls like `/api?xyz=123`.

# Run
```netlify dev```

Demo page now visible at http://localhost:8888/

Demo API now available at http://localhost:8888/api

NOTE:
1. Updating `.env` and comitting it to GitHub does not update the live Environment variables. This must be done from within Netlify.
2. The more domains you add, the slower your requests could become. This is because the api will check each domain, in order, until it finds a valid response, before it responds.
3. 300s and 500s are valid responses. These will return unless specifically removed. 