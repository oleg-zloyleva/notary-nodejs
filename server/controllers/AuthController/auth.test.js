
const { login, register, activate, logout } = require('./auth');
const User = require('../../models/users');
const httpMocks = require('node-mocks-http');

let req,res;
const mockRegister = {
    name: 'Test User',
    password: '0000',
    phone: '0991234567',
};
const mockLogin = {
    password: '123456789',
    phone: '0991234567',
};

const mockPassword = {
    password: '123456789',
    passwordHash: '$2b$10$/VR7W0PHQqKprMTUYx3Y4etvlGoVrmRhXYPrsC5mE68DRtCHhLqJC',
};

beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
});

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

describe('AuthController. Call login method & User.findOne', () => {
    test('Should call login. Success login, and return token', async () => {
        User.loginUserReturnToken = await jest.fn().mockResolvedValue({
            password: mockPassword.passwordHash,
            phone: mockLogin.phone,
        });

        req.body = mockLogin;

        await login(req,res);
        expect(User.loginUserReturnToken).toBeCalledWith(mockLogin);
        expect(res.statusCode).toBe(200);
        expect(res._isEndCalled()).toBeTruthy();
    })
});

describe('AuthController. Call register method & User.create', () => {
    test('Should call register', async () => {
        req.body = mockRegister;

        User.init = await jest.fn().mockResolvedValue({});
        User.create = await jest.fn().mockResolvedValue(mockRegister);

        await register(req,res);
        expect(User.create).toBeCalled();
        expect(res.statusCode).toBe(200);
        expect(res._isEndCalled()).toBeTruthy();
        expect(res._getJSONData()).toStrictEqual({data: mockRegister})
    })
});