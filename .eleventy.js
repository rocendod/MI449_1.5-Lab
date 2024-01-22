module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("./src/mood.md");
    eleventyConfig.addCollection("allMyContent", function(collectionApi) {
        return collectionApi.getAll();
      });

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};