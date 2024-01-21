module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("images");
    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};