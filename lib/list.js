/**
 * @project enfslist-promise
 * @filename list.js
 * @description entry point for enfslist-promise module
 * @author Joao Parreira <joaofrparreira@gmail.com>
 * @copyright Copyright(c) 2016 Joao Parreira <joaofrparreira@gmail.com>
 * @licence Creative Commons Attribution 4.0 International License
 * @createdAt Created at 18-02-2016.
 * @version 0.0.1
 */

"use strict";


const enfslist = require("enfslist");


module.exports = enfslist;
module.exports.listP = function (path, options) {
    return new Promise((resolve, reject) => {
        enfslist.list(path, options, (err, result) => {
            return err ? reject(err) : resolve(result);
        });
    });
};
