const { defaults: tsjPreset } = require('ts-jest/presets');

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.spec.json',
      },
    ],
    '.+\\.svg$': 'jest-transform-stub',
  },
  transformIgnorePatterns: ['node_modules/(?!react-native-responsive-screen)/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^navigation(.*)$': '<rootDir>/src/navigation$1',
    '^screens(.*)$': '<rootDir>/src/screens$1',
    '^components(.*)$': '<rootDir>/src/components$1',
    '^styles(.*)$': '<rootDir>/src/styles$1',
    '^storybook(.*)$': '<rootDir>/storybook$1',
    '^assets(.*)$': '<rootDir>/src/assets$1',
    '^hooks(.*)$': '<rootDir>/src/hooks$1',
    '^containers(.*)$': '<rootDir>/src/containers$1',
    '^context(.*)$': '<rootDir>/src/context$1',
    '^layouts(.*)$': '<rootDir>/src/layouts$1',
    '^api(.*)$': '<rootDir>/src/api$1',
    '^locales(.*)$': '<rootDir>/src/locales$1',
    '^store(.*)$': '<rootDir>/src/store$1',
    '^utils(.*)$': '<rootDir>/src/utils$1',
    '^types(.*)$': '<rootDir>/src/types$1',
    '^constants/(.*)$': '<rootDir>/src/constants/$1',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.svg$': 'jest-svg-transformer',
  },
  testEnvironment: 'node',
  setupFiles: ['./jest.setup.ts'],
};
