module.exports = {
  setupFiles: [
    '<rootDir>/client/test/setupTest.js',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': require.resolve('./client/test/style-mock'),
    '\\.(css|less)$': require.resolve('./client/test/style-mock'),
  },
};
