exports.config = {
  tests: './e2eTests/tests/**/*.test.js',
  output: './output',
  helpers: {
    WebDriver: {
      host: process.profile || 'localhost',
      url: process.env.CODECEPT_URL || 'http://localhost:3000',
      browser: 'chrome',
      coloredLogs: true,
      restart: false,
      waitForTimeout: 10000,
      /**
       * replace below with 'maximize' if your browser window size or position
       * is causing tests to fail
       * */
      windowSize: '1920x1080',
    },
  },
  plugins: {
    retryFailedStep: {
      enabled: true,
      retries: 10,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
  multiple: {
    parallel: {
      browsers: ['chrome', 'firefox'],
    },
  },
  bootstrap: null,
  mocha: {},
  name: 'central-threat-intel-app',
};
