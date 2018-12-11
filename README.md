# node_typescript_template
A project template for writing node.js apps in TypeScript.

## Folder structure

### /
Any files and folders which do not require compilation can go here.

### /src/
TypeScript source files and any inner folder structure for containing them go here.

## Writing TypeScript to ship to client-side
Suppose we have a project structure which looks something like this:

```
/
    public/
        css/
            game.css
        html/
            game.html
        js/
            game_controls.js
    src/
        app.js
    package.json
    tsconfig.json
```

Not only this, but we wish for everything under `/public/` to be served statically. This is not the important part to consider, so let's also say we have already written this code or are using a library to do it for us.
We would like to be able to write some client-side TypeScript code which we send to the client as JavaScript. To do this, we can start by editing our package.json.

```javascript
{
  // ...
  "scripts": {
    // ...
    "build": "tsc",
    "devstart": "npm run build && node dist/app.js"
    // ...
  },
  // ...
}
```

Let's go ahead and decide to write any client-side code in a new folder called /src/client. Next, if we add `tsc -p src/client` to our build command, the TypeScript compiler will be invoked inside our new folder. We also need a new `tsconfig.json` file in this folder. Just copy the one from the root folder, and then edit it so that `compilerOptions.outDir` is `"../../public/js"`, and `include` is `["./**/*.ts"]`. In this way, all `.ts` files in this folder and any sub-folder will be compiled and sent to the folder we want to statically serve from.
