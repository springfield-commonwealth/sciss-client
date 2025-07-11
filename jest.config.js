module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};
