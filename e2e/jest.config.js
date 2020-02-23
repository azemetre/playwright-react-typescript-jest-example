const path = require("path");

module.exports = {
  testEnvironment: "node",
  rootDir: path.join(__dirname, ".."),
  moduleDirectories: [
    path.join(__dirname, "../src"),
    path.join(__dirname, "../e2e"),
    path.join(__dirname)
  ],
  testMatch: ["**/e2e/**.spec.ts"],
  transform: {
    "^.+\\.ts(x)?$": "ts-jest"
  },
  transformIgnore: ["<rootDir>/node_modules"],
  globals: {
    baseURL: "http://localhost:8080"
  },
  testTimeout: 10000,
  verbose: true
};
