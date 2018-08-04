import React from 'react'
import PropTypes from 'prop-types'
//React Render Jest
import renderer from 'react-test-renderer';
import Link from './Link.js'

describe('Link Component', () => {

    test('Active Page - No Link', () => {
        const LinkViewComponent = renderer
            .create(<Link active={false} onClick={Function}>Test</Link>);

        let LinkView = LinkViewComponent.toJSON();
        expect(LinkView).toMatchSnapshot();

        LinkView.props.onClick({
            preventDefault: () => {
            }
        });

        LinkView = LinkViewComponent.toJSON();
        expect(LinkView).toMatchSnapshot();

    });

    test('InActive Page - Show Link', () => {
        const LinkViewComponent = renderer
            .create(<Link active={true} onClick={Function}>Test</Link>);

        let LinkView = LinkViewComponent.toJSON();
        expect(LinkView).toMatchSnapshot();
    });

});
