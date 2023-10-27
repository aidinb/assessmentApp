module.exports = {
  root: true,
  extends: ["universe/native"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  globals: {
    __dirname: true,
  },
};
