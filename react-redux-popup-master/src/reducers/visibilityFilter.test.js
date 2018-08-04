import visibilityFilter from './visibilityFilter'
//import { VisibilityFilters } from '../actions';

describe('visibilityFilter reducer', () => {
    test('should handle initial state', () => {
        expect(
            visibilityFilter(undefined, {})
        ).toEqual('SHOW_ALL')
    })

    test('should handle ADD_TODO', () => {
        expect(
            visibilityFilter([], {
                type: 'SET_VISIBILITY_FILTER',
                filter: 'Active'
            })
        ).toEqual(
            'Active'
        )
    })


})

