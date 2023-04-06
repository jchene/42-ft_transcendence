// Importation de la bibliothèque path pour travailler avec les chemins de fichiers
const path = require('path');

// Importation du plugin HtmlWebpackPlugin pour générer le fichier HTML
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Exportation de la configuration Webpack
module.exports = {
	// Entrée de l'application
	entry: "./srcs/index.tsx",

	// Configuration des loaders pour traiter différents types de fichiers
	module: {
		rules: [
			// Règle pour traiter les fichiers TS et TSX
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			// Règle pour traiter les fichiers CSS
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},

	// Configuration des extensions de fichiers à résoudre
	resolve: {
		extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"],
		alias: {
			'html-entities': path.resolve(__dirname, 'node_modules/html-entities')
		},
	},

	// Configuration du plugin HtmlWebpackPlugin
	plugins: [
		new HtmlWebpackPlugin({
			template: "./srcs/index.html",
			filename: "index.html",
			inject: "body",
		}),
	],

	// Configuration du serveur de développement de Webpack
	devServer: {
		// Configuration du répertoire contenant les fichiers statiques
		static: {
			directory: path.join(__dirname, './srcs/resources/'),
		},
		// Activation de la fonctionnalité de rechargement en direct
		hot: true,
		historyApiFallback: true,
	},
};