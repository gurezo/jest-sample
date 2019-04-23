module.exports = {
  preset: 'jest-preset-angular',
  roots: ['src'],
  globals: {
    'ts-jest': {
      tsConfigFile: '<rootDir>/tsconfig.test.json'
    },
    __TRANSFORM_HTML__: true
  },
  testMatch: ['<rootDir>/src/**/+(*.)+(test).+(ts)?(x)'],
  setupTestFrameworkScriptFile: '<rootDir>/jest/setupJest.ts',
  transformIgnorePatterns: ['node_modules/(?!@ngrx)']
};
