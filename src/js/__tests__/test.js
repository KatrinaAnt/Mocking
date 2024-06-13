import { getLevel } from '../app';
import fetchData from '../http';
jest.mock('../http');

beforeEach(() => {
    jest.resetAllMocks();
});

test('should call fetchData once', () => {
    fetchData.mockReturnValue(JSON.stringify({}));
    getLevel(1);
    expect(fetchData).toHaveBeenCalledWith('https://server/user/1');
});

test('call getLevel return current level', () => {
    fetchData.mockReturnValue({
        status: 'ok', level: 10
    });
    expect(getLevel(1)).toBe('Ваш текущий уровень: 10');
});

test('call getLevel return error', () => {
    fetchData.mockReturnValue({});
    expect(getLevel(1)).toBe('Информация об уровне временно недоступна');
});