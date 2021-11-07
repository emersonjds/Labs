
import { NativeModules } from 'react-native';

NativeModules.RNCGeolocation = {
    addListener: jest.fn(),
    getCurrentPosition: jest.fn(),
    removeListeners: jest.fn(),
    requestAuthorization: jest.fn(),
    setConfiguration: jest.fn(),
    startObserving: jest.fn(),
    stopObserving: jest.fn(),
};

// Reset the mocks before each test
global.beforeEach(() => {
    jest.resetAllMocks();
})