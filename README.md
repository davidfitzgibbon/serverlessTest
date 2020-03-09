# Install Requirements

### Install Netlify CLI

```yarn global add netlify-cli```


### Install requirements in functions folder

```cd functions; npm i```

# To Run
```netlify dev```

Demo page now visible at http://localhost:8888/

Demo API now available at http://localhost:8888/api which is a rewrite of localhost:34567/.netlify/functions, done in netlify.toml

# To change domains list

In functions/.env is a variable called `DOMAINS`. This is a string serparated by piped "OR"s. This is later turned into an array in JS using `.split("||")`.

To add a new domain to the list just add `||domain.com`.

Do not include a trailing "/", this is accounted for in the url and could cause issues with urls like "/api?xyz=123".