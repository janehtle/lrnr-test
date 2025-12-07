module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.js'],
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest'
    },
    moduleFileExtensions: ['js', 'jsx'],
    moduleNameMapper: {
        '\\.(css|scss|sass)$': '<rootDir>/test/styleMock.js',
        '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/test/styleMock.js'
    }
};

// module.exports = {
//     testEnvironment: 'jest-environment-jsdom',
//     setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
//     transform: {
//         '^.+\.(js|jsx)$': 'babel-jest',
//     },
//     moduleFileExtensions: ['js', 'jsx'],
//     moduleNameMapper: {
//         '\.(css|scss|sass)$': '<rootDir>/test/styleMock.js',
//     },
// };