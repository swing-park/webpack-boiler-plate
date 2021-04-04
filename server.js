const webpack = require("webpack");
const middleware = require("webpack-dev-middleware");
const webpackConfig = require("./webpack.config.js");
const compiler = webpack(webpackConfig);
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res, next) => {
	next();
});

app.use(
	middleware(compiler, {
		publicPath: webpackConfig.output.publicPath,
		stats: { colors: true },
	})
);

app.use(express.static(__dirname));

app.listen(port, () => {
	console.log(`Server is listening at http://localhost:${port}`);
});
