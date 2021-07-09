/*const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");*/
/*

// Generate pages object
const pagesObj = {};

const chromeName = ["popup", "options"];

chromeName.forEach(name => {
    pagesObj[name] = {
        entry: `src/${name}/index.js`,
        template: "public/index.html",
        filename: `${name}.html`
    };
});

// 生成manifest文件
const manifest =
    process.env.NODE_ENV === "production" ? {
        from: path.resolve("src/manifest.production.json"),
        to: `${path.resolve("dist")}/manifest.json`
    } : {
        from: path.resolve("src/manifest.development.json"),
        to: `${path.resolve("dist")}/manifest.json`
    };

const plugins = [
    CopyWebpackPlugin([
        manifest
    ])
]
*/

module.exports = {
    // // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,

    configureWebpack: {
        output: {
            filename: 'js/index.js',
            chunkFilename:'js/chunk.js'
        },
    },
    css: {
        extract: {
            filename: 'css/index.css',
            chunkFilename: 'css/chunk.css',
        }
    },
    chainWebpack: config => {
        // 处理字体文件名，去除hash值
        const fontsRule = config.module.rule('fonts')

        // 清除已有的所有 loader。
        // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
        fontsRule.uses.clear()
        fontsRule.test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/i)
        .use('url')
        .loader('url-loader')
        .options({
            limit: 1000,
            name: 'fonts/[name].[ext]'
        })
    }
};

