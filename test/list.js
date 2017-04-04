/**
 * @project enfslist-promise
 * @filename list.js
 * @description async methods for listing items in directories with promises
 * @author Joao Parreira <joaofrparreira@gmail.com>
 * @copyright Copyright(c) 2016 Joao Parreira <joaofrparreira@gmail.com>
 * @licence Creative Commons Attribution 4.0 International License
 * @createdAt Created at 18-02-2016.
 * @version 0.0.1
 */

/* global describe, it, before, after*/
"use strict";

const nodePath = require("path");
const nodeOs = require("os");
const enfsList = require("../");
const util = require("./util");

describe("enfslist-promise async", function () {
    const tmpPath = nodePath.join(nodeOs.tmpdir(), "enfslist-promise");
    const files = ["file1", "file2", "file3", "file4"];
    before(function (done) {
        util.before(tmpPath, files, done);
    });
    after(function (done) {
        util.after(tmpPath, done);
    });
    it("should list files", function () {
        //it will return also the base path used to list files
        return enfsList.listP(tmpPath).then(function (list) {
            list.length.should.be.equal(files.length + 1);//the +1 is the directory that also appears in the list
        });
    });
});
