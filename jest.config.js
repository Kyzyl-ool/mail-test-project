// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  moduleDirectories: [
    "node_modules",
    "lib"
  ],
  moduleFileExtensions: [
    "tsx",
    "ts",
    "jsx",
    "js",
    "scss"
  ],
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  transformIgnorePatterns: [
    "node_modules",
    "^.+\\.module\\.(css|sass|scss)$"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/(build|docs|node_modules)/"
  ],
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform"
  },
  verbose: false,
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  prettierPath: '<rootDir>/node_modules/prettier',
  globals: {
    "ts-jest": {
      "tsConfig": '<rootDir>/tsconfig.json',
    }
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    // "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
  }
};
