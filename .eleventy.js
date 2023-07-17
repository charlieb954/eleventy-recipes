module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("src/css")
    eleventyConfig.addPassthroughCopy("src/css");

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: "src",
            output: "_site"
        }
    }
}
