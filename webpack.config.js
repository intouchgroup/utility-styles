const { createWebpackConfig } = require('@intouchgroup/es2020-boilerplate');

module.exports = (env, argv) => createWebpackConfig({
    argv,
    entries: {
        styles: './styles.scss',
    },
});