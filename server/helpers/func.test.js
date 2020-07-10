const {
  isDevelopmentMode, isProductionMode, isTestMode, getNewPassword, getSMSCode,
} = require('./func');

describe('Testing helpers function. Check env functions:', () => {
  test('Should be development mode', () => {
    process.env.NODE_ENV = 'development';
    expect(isDevelopmentMode()).toBe(true);
  });
  test('Should be production mode', () => {
    process.env.NODE_ENV = 'production';
    expect(isProductionMode()).toBe(true);
  });
  test('Should be test mode', () => {
    process.env.NODE_ENV = 'test';
    expect(isTestMode()).toBe(true);
  });
});

describe('Testing helpers function. Get new password', () => {
  test('Should be string', () => {
    expect(getNewPassword('123456789')).toMatch(/\w+/);
  });
});

describe('Testing helpers function. Get SMS code', () => {
  test('Should be string of numbers', () => {
    expect(getSMSCode()).toMatch(/\d+/);
  });
});
