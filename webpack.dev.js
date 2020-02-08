const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		historyApiFallback: true,
		compress: true,
		hot: true,
		open: true,
	},
	module: {
		rules: [
			{
				test: /\.scss|css$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.jpg|png|gif|woff|eot|ttf|otf|mp4|webm$/,
				use: {
					loader: "file-loader",
					options: {
						outputPath: "assets/",
					},
				},
			},
			{
				test: /\.svg$/,
				use: ["@svgr/webpack", "url-loader"],
			},
		],
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
});
