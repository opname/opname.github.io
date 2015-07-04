// Used in Single Page Application (SPA) demo app

define([], function () {

    var Patterns = {
        namespace: function (name) {
            var parts = name.split(".");
            var ns = this;

            for (var i = 0, len = parts.length; i < len; i++) {
                ns[parts[i]] = ns[parts[i]] || {};
                ns = ns[parts[i]];
            }

            return ns;
        }
    };
    return Patterns;
});



