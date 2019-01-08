(function() {
    var vk_config = {
        root: "./lib/",
        path: {
            jquery: "jquery.js",
            underscore: "underscore.js"
        }
    };

    var vk = {
        loadjs: function(script_filename, callback) {
            script_doc = document.getElementById(script_filename);
            if (script_doc) {
                return;
            }
            var script = document.createElement("script");
            script.setAttribute("id", script_filename);
            script.setAttribute("type", "text/javascript");
            script.setAttribute("src", vk_config.root + vk_config.path[script_filename]);
            var fs = document.getElementsByTagName("script")[0];
            fs.parentNode.insertBefore(script, fs);
            console.log("loading:" + script_filename);
            script.onload = script.onreadystatechange = function() {
                console.log("loaded:" + script_filename);
                callback();
            };
        },
        count_js: 0,
        use: function(ids, callback) {
            var that = this;
            if (!Array.isArray(ids)) {
                ids = [ids];
            }
            that.count_js = ids.length;
            for (var i = 0; i < ids.length; i++) {
                (function(i) {
                    script_doc = document.getElementById(ids[i]);
                    if (script_doc) {
                        return;
                    }
                    script = document.createElement("script");
                    script.setAttribute("id", ids[i]);
                    script.setAttribute("type", "text/javascript");
                    script.setAttribute("src", vk_config.root + vk_config.path[ids[i]]);
                    var fs = document.getElementsByTagName("script")[0];
                    fs.parentNode.insertBefore(script, fs);
                    console.log("loading:" + ids[i]);
                    script.onload = script.onreadystatechange = function() {
                        console.log("loaded:" + ids[i]);
                        that.count_js--;
                        if (that.count_js == 0) {
                            callback();
                        }
                    };
                })(i);
            }
        },
        seq: function(ids, callback) {
            var that = this;
            if (!Array.isArray(ids)) {
                ids = [ids];
            }
            that.count_js = ids.length;
            function load(script_filename) {
                return new Promise(function(resolve, reject) {
                    script_doc = document.getElementById(script_filename);
                    if (script_doc) {
                        return;
                    }
                    var script = document.createElement("script");
                    script.setAttribute("id", script_filename);
                    script.setAttribute("type", "text/javascript");
                    script.setAttribute("src", vk_config.root + vk_config.path[script_filename]);
                    document.getElementsByTagName("body")[0].appendChild(script);
                    console.log("loading:" + script_filename);
                    script.onload = script.onreadystatechange = function() {
                        console.log("loaded:" + script_filename);
                        resolve("loaded:" + script_filename);
                    };
                    script.onerror = function() {
                        reject(new Error("fail to load"));
                    };
                });
            }

            var promise = Promise.resolve();
            for (let i = 0; i < ids.length; i++) {
                promise.then(load(ids[i]));
            }
        }
    };

    window.vk = vk;
})();
