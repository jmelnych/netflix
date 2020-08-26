module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|mp4|wav|mp3|svg)$': '<rootDir>/src/test-mock.ts',
    },
    verbose: true,
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    modulePaths: [
        '<rootDir>',
    ],
    setupFilesAfterEnv: [
        "<rootDir>/src/setupTests.ts"
    ],
};