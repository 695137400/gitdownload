'use strict';

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status !== "complete") return;

    chrome.tabs.executeScript(tabId, {
        code: 'var div = document.createElement("div");div.id = "app";document.getElementsByTagName("body")[0].append(div);',
        runAt: 'document_start'
    }, function (res) {

        var cssFiles = ['app.425bdf97.css'];

        var jsFiles = [
            'app.5b7f2b79.js',
            'chunk-vendors.341b463c.js',
        ];

        eachTask([function (cb) {
            return eachItem(cssFiles, inject('insertCSS'), cb);
        }, function (cb) {
            return eachItem(jsFiles, inject('executeScript'), cb);
        }]);

        function inject(fn) {
            return function (file, cb) {
                console.log(file)
                chrome.tabs[fn](tabId, {file: file, runAt: 'document_start'}, cb);
            };
        }
    });
});


function eachTask(tasks, done) {
    (function next() {
        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        if (index === tasks.length) done && done(); else tasks[index](function () {
            return next(++index);
        });
    })();
}

function eachItem(arr, iter, done) {
    var tasks = arr.map(function (item) {
        return function (cb) {
            return iter(item, cb);
        };
    });
    return eachTask(tasks, done);
}
