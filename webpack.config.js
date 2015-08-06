module.exports = {
    entry : __dirname + '/index.js',
    output : {
        path : __dirname + '/dist',
        filename : 'index.js',
        libraryTarget : 'umd'
    },
    module : {
        loaders : [ {
            test : /\.jsx?$/,
//            exclude : [ /node_modules/ ],
            include : [ /node_modules\/mosaic\-/, __dirname + '/index.js', __dirname + '/lib' ],
            loader : 'babel'
        }, {
            test : /\.less|\.css/,
            loader : "style-loader!css-loader!less-loader"
        }, {
            test : /\.html$/,
            loader : "html-loader"
        }, {
            test : /\.(png|jpg|svg|woff2?|eot|ttf)$/,
            loader : 'url-loader?limit=8000'
        } ]
    },
    externals : [ 'react', 'promise', 'mosaic-ui' ]
};
