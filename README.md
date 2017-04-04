
enfslist-promise
================
Module that add list functionality to node fs module

**enfs** stands for [E]asy [N]ode [fs]

This module is intended to work as a sub-module of [enfs](https://www.npmjs.com/package/enfs)

Description
-----------
This module will add a method that allows the obtaining of the 
list of items in the file system under one directory and sub-directories.

- This module will add following methods to node fs module:
  * list
  * listSync
  * listP
  
Usage
-----
`enfslist`

```js
    const enfslist = require("enfslist");
```

Errors
------
All the methods follows the node culture.
- Async: Every async method returns an Error in the first callback parameter
- Sync: Every sync method throws an Error.


Additional Methods
------------------
- [list](#list)
- [listSync](#listsync)
- [listP](#listP)


### list
  - **list(path, [options], callback)**

> Obtain the list of items under a directory and sub-directories asynchronously.
Each item will be an object containing: {path: pathToItem, stat: itemStat}

[options]:
  * fs (Object): an alternative fs module to use (default will be [enfspatch](https://www.npmjs.com/package/enfspatch))
  * dereference (Boolean): if true will dereference symlinks listing the items to where it points (default: false)
  * back (Number): What you want to get back (0- an array of objects with path and stats, 1- only the paths, 2- only the stats);
  * stats (Array): What information you want in stats. Ex: ```js ["isFile", "atime", "size"] ```
  * ignoreAccessError (Boolean): If true will ignore all files and folder's without access permission (default false)

```js
    enfslist.list("/home", function(err, listOfItems){
        listOfItems.forEach(function(item){
            //do something
        });
    });
```


### listSync
  - **listSync(path, [options])**

> Obtain the list of items under a directory and sub-directories synchronously
Each item will be an object containing: {path: pathToItem, stat: itemStat}

[options]:
  * fs (Object): an alternative fs module to use (default will be [enfspatch](https://www.npmjs.com/package/enfspatch))
  * dereference (Boolean): if true will dereference symlinks listing the items to where it points (default: false)
  * back (Number): What you want to get back (0- an array of objects with path and stats, 1- only the paths, 2- only the stats);
  * stats (Array): What information you want in stats. Ex: ```js ["isFile", "atime", "size"] ```
  * ignoreAccessError (Boolean): If true will ignore all files and folder's without access permission (default false)

```js
    const listOfItems = enfslist.listSync("/home");
    listOfItems.forEach(function(item){
        //do something
    });
```


### listP
  - **listP(path, [options])**

> Obtain the list of items under a directory and sub-directories asynchronously.
Each item will be an object containing: {path: pathToItem, stat: itemStat}

[options]:
  * fs (Object): an alternative fs module to use (default will be [enfspatch](https://www.npmjs.com/package/enfspatch))
  * dereference (Boolean): if true will dereference symlinks listing the items to where it points (default: false)
  * back (Number): What you want to get back (0- an array of objects with path and stats, 1- only the paths, 2- only the stats);
  * stats (Array): What information you want in stats. Ex: ```js ["isFile", "atime", "size"] ```
  * ignoreAccessError (Boolean): If true will ignore all files and folder's without access permission (default false)

```js
    enfslist.listP("/home").then(function(listOfItems){
        listOfItems.forEach(function(item){
            //do something
        });
    }).catch(function(err){
        console.log("Error occurred: "+err.message);
    });
```

License
-------

Creative Commons Attribution 4.0 International License

Copyright (c) 2016 Joao Parreira <joaofrparreira@gmail.com> [GitHub](https://github.com/n3okill)

This work is licensed under the Creative Commons Attribution 4.0 International License. 
To view a copy of this license, visit [CC-BY-4.0](http://creativecommons.org/licenses/by/4.0/).


