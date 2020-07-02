const { login, register, activate, logout } = require('./auth');

describe('AuthController. exist methods', () => {
    test('Should have method login', () => {
        expect(typeof login).toBe('function');
    });
    test('Should have method register', () => {
        expect(typeof register).toBe('function');
    });
    test('Should have method activate', () => {
        expect(typeof activate).toBe('function');
    });
    test('Should have method logout', () => {
        expect(typeof logout).toBe('function');
    });
});
