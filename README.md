# linnJS - A simple interface for interacting with the Linnworks API

The linnworks api, as documented [here](http://apidoc.linnworks.net/Home/), is a great resource. This library is meant to abstract away some of the difficulties in using the API from a node.js application.

All it does right now is initalize the connection for you and provide you with a Promise-based interface for sending `post` requests to the server.

Assuming you've put the repo in your `node_modules` folder (I'll soon work out how to get this on npm), this is how you might use it:

```js
var linnJS = require('linnJS');
linnJS.initialize(process.env.linnworksusername, process.env.linnworkspw)
    .then(function(api){
        // this is where the magic happens
        api.post('ImportExport/AreExportsEnabled')
            .then(function(response){
                console.log(response); // will print false or true
            });
    })
    .catch(function(err){
        console.log(err);
    });
```

After the connection with the API is initialized, simply call `api.post` with 2 arguments: the API method you wish to call, and an object with any data that you want to post to that method.

The example above, `api.post('ImportExport/AreExportsEnabled')`, is how you'd call [this method](http://apidoc.linnworks.net/Home/ApiMethod/AreExportsEnabled).

Here's an example where you'd have to post some data as well ([for this method](http://apidoc.linnworks.net/Home/ApiMethod/EnableExports)):

```js
api.post('ImportExport/EnableExports', {enable:true});
```
