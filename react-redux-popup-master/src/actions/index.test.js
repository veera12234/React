import * as actions from './index'
describe('todo actions', () => {
    test('addTodo should create ADD_TODO action', () => {
        expect(actions.addTodo(0,'Use AddTodo')).toEqual({
            type: 'ADD_TODO',
            id: 0,
            text: 'Use AddTodo'
        })
    })

    /*test('increment should create INCREMENT action', () => {
        expect(actions.increment(0,'Use Icrement')).toEqual({
            type: 'INCREMENT'
        })
    })*/

    /*test('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
        expect(actions.setVisibilityFilter('active')).toEqual({
            type: 'SET_VISIBILITY_FILTER',
            filter: 'active'
        })
    })*/

    test('toggleTodo should create TOGGLE_TODO action', () => {
        expect(actions.toggleTodo(1)).toEqual({
            type: 'TOGGLE_TODO',
            id: 1
        })
    })
});

