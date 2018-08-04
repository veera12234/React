import indexReference from './indexReference'

describe('Index Referece reducer', () => {
    test('should handle initial state', () => {
        expect(indexReference(undefined, {})).toEqual(0)
    })

    test('should handle INCREMENT', () => {
        expect(indexReference(0, {type: 'INCREMENT'})).toEqual(1)
    });
});
