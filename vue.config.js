// stop eslint from running due to spaces no-mixed-spaces-and-tabs error
module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
}
