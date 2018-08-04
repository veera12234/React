import React from 'react';
import Link from './Footer.js';
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters, setVisibilityFilter } from '../actions'
import { Provider } from 'react-redux'
//import Enzyme  from 'enzyme';
//import {shallow}  from 'enzyme';


//React Render Jest
import renderer from 'react-test-renderer';
//import Adapter from 'enzyme-adapter-react-16';
//Redux test store
import configureStore from 'redux-mock-store'
import Footer from './Footer.js';

const initialState = { VisibilityFilters: VisibilityFilters.SHOW_ALL };
const mockStore = configureStore()

let store, container

store = mockStore(initialState)
//Enzyme.configure({ adapter: new Adapter() })

test('renders correctly', () => {

    //const footer = shallow(<Provider store={store}><Footer /></Provider>)
    //let footerView = footer.toJSON();
    //expect(footer).toMatchSnapshot();

    //footer.first('a').simulate('click');
    //expect(footer).toMatchSnapshot();

    const footer = renderer
        .create(<Provider store={store}><Footer /></Provider>);

    let footerView = footer.toJSON();
    expect(footerView).toMatchSnapshot();

});

test('filter link', () => {

    const filterLink = renderer.create(<Provider store={store}><FilterLink filter={VisibilityFilters.SHOW_ALL} onClick={Function}>Active</FilterLink></Provider>);
    let filterLinkView = filterLink.toJSON();
    filterLinkView.props.onClick({
        preventDefault: () => {
        }
    });
    filterLinkView = filterLink.toJSON();
    expect(filterLinkView).toMatchSnapshot();
});





