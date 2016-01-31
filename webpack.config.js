var path = require("path");
module.exports = {
    context : path.resolve("src"),
    entry : {
        "scrolla-build" : "js/scrolla-src.js",
        "scrolla-test-build" : "js/scrolla-test.js"
    },
    resolve: {
        root: path.resolve(__dirname + "/src"),
        extensions: ["", ".js"]
    },
    output : {
        path: path.resolve(__dirname + "/build/"),
        publicPath : "/build/",
        filename: "js/[name].js"
    },
    module: {
        loaders: [
            { test: /\.js$|\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    watch : true
};