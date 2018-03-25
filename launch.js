const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

function getDirectories(srcpath) {
    return fs.readdirSync(srcpath).filter(function (file) {
        return fs.statSync(path.join(srcpath, file)).isDirectory();
    });
}

const examples = getDirectories('./').filter(d => d[0] != '.' && d != 'node_modules');

examples.forEach(e => {
    try {
        var configPath = `./${e}/webpack.config.js`;

        var index = e.substring(0, e.indexOf('-'));

        if(index.match(/^\d+$/g)) {  // only for numeric prefixes, do not attempt on utils for instance
            var config = require(configPath);
            config.devServer.contentBase = e;
            config.devServer.publicPath = '/built/';

            var compiler = webpack(config);
            var server = new WebpackDevServer(compiler, config.devServer);

            var port = parseInt(`80${index}`);

            server.listen(port, "localhost", () => console.log(`Example "${e}" is running on http://localhost:${port}`));
        } else {
            var config = require(configPath);
            webpack(config);
        }
    } catch (err) {
        console.log(`${err} ${e} is not an example`);
    }

});