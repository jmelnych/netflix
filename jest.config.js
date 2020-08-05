module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|mp4|wav|mp3|svg)$': '<rootDir>/src/fileMock.js',
    },
    verbose: true,
    modulePaths: [
        '<rootDir>',
    ],
    setupFilesAfterEnv: [
        "<rootDir>/src/setupTests.js"
    ],
};