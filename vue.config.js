// vue.config.js debe estar en la raíz de tu proyecto

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/web-retro/' : '/'
}