// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },

    // https://www.npmjs.com/package/eslint-config-crockford
    extends: 'crockford',

    // Required to lint *.vue files
    plugins: [
        'html'
    ],

    "globals": {
        "require": true
    },

    // Add your custom rules here
    'rules': {

        // Allow paren-less arrow functions (they mess up Vue)
        'arrow-parens': 0,

        // Allow async-await
        'generator-star-spacing': 0,

        // Allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

        // Relax rules a little
        'one-var': 'off',
        'vars-on-top': 'off',
        'no-plusplus': 'off',
        'no-continue': 'off',

        // No space before functions rule doesn't really matter
        'space-before-function-paren': ['off', 'never']
    }
}
