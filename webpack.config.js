var path = require("path");
module.exports = {
    context : path.resolve("src"),
    entry : {
        "scrolla-demo" : "js/scrolla-demo.js",
        "scrolla-test-suite" : "js/scrolla-test-suite.js",
        "Scrolla" : "js/scrolla/scrolla.js"
    },
    resolve: {
        root: path.resolve(__dirname + "/src"),
        extensions: ["", ".js"]
    },
    output : {
        path: path.resolve(__dirname + "/build/"),
        publicPath : "/build/",
        filename: "js/[name].js",
        libraryTarget: "umd"
    },
    module: {
        loaders: [
            { test: /\.js$|\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    watch : true
};