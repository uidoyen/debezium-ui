module.exports = {
    roots: [
        "<rootDir>/src",
        "<rootDir>/__tests__"
    ],
    transform: {
        "^.+\\.ts$": "ts-jest"
    },
    testRegex: "(/__tests__/.*.(test|spec)).(jsx?|tsx?|js)$",
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    collectCoverage: true,
    coveragePathIgnorePatterns: [
        "(__tests__/.*.mock).(jsx?|tsx?)$"
    ],
    verbose: true
};