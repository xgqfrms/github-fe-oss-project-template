# github actions

```sh
$ npm init

$ npm i -D @types/node

```

```sh
# tsconfig.json
$ tsc --init

```


```json
  "scripts": {
    "dev": "tsc -p tsconfig.json",
    "build": "tsc -p tsconfig.build.json",
    "test": "cd ./dist && node ./index.js && exit 0",
    "bug": "echo \"Error: no test specified\" && exit 1"
  },
```

## action.yml

