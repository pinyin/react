module.exports = {
    'roots': [
        './src',
    ],
    'transform': {
        '^.+\\.tsx?$': 'ts-jest'
    },
    'testRegex': '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    'moduleFileExtensions': [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'node'
    ],
    'verbose': true,
    'globals': {
        'ts-jest': {
            'useBabelrc': true
        }
    }
}
