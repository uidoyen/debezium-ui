module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  "moduleNameMapper": {
    "\\.(css|less|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "identity-obj-proxy"
  },
  "moduleDirectories": ["node_modules", "src"],
  setupFilesAfterEnv: [
    "<rootDir>/setupEnzyme.ts"
  ],
};