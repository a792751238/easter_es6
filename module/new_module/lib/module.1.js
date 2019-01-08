+(function(win, docuemnt) {
    var baseUrl;
    var paths;
    var script_cache = {};

    var setConfig = function(options) {
        if (!options) {
            options = {
                baseUrl: "/",
                paths: {}
            };
        }
        if (options.baseUrl) baseUrl = options.baseUrl;
        if (options.paths) paths = options.paths;
    };

    // 用来创建script标签并且添加到body上
    var _createScript = function(script_name) {
        var scrpit_element = document.createElement("script");
        var fs = document.getElementsByTagName("script")[0];

        scrpit_element.setAttribute("id", script_name);
        scrpit_element.setAttribute("type", "text/javascript");
        scrpit_element.setAttribute("src", baseUrl + paths[script_name]);
        scrpit_element.setAttribute("async", true);
        scrpit_element.setAttribute("defer", true);

        fs.parentNode.insertBefore(scrpit_element, fs);

        return scrpit_element;
    };

    var _saveScript = function(script_name, callback) {
        script_cache[script_name] = {
            name: script_name,
            status: "loaded"
        };

        setTimeout(callback && callback(), 0);
    };

    var depend = function(script_name, callback) {
        if (!script_name) return "script is indispensable";
        var script = docuemnt.getElementById(script_name);

        var scrpit_element;

        if (script) {
            return setTimeout(callback && callback(), 0);
        } else {
            scrpit_element = _createScript(script_name);
        }

        if (scrpit_element) {
            scrpit_element.onload = function() {
                console.log("script is loaded =>", script_name);

                script_cache[script_name] = {
                    name: script_name,
                    status: "loaded"
                };

                setTimeout(callback && callback(), 0);
            };
        }
    };

    var depends = function(script_names, callback) {
        if (Object.prototype.toString.call(script_names) !== "[object Array]") {
            script_names = [];
        }
        var i = script_names.length - 1;
        while (i >= 0) {
            var script = document.getElementById(script_names[i]);

            if (script) {
                return i--;
            } else {
                scrpit_element = _createScript(script_names[i]);
            }

            if (scrpit_element) {
                scrpit_element.onload = (function(index) {
                    _saveScript(script_names[index], callback);
                })(i);

                i--;
            }
        }
    };

    var getCache = function() {
        return script_cache;
    };

    win.ki = {
        getCache,
        setConfig,
        depend,
        depends
    };
})(window, document);
