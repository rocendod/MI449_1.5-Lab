module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("./src/moon.md");
    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};