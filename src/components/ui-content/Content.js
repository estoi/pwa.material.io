import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Scroll from '../ui-scroll/Scroll';

export default class Header extends Component {

    static propTypes = {
        hasHeader: PropTypes.bool,
        hasNavBar: PropTypes.bool,
        children: PropTypes.any
    }

    static defaultProps = {
        hasHeader: false,
        hasNavBar: false
    }; 

    render() {
        const { hasHeader, hasNavBar, children } = this.props;
        const cls = classnames('ui-content-wrap',{'has-header': hasHeader, 'has-nav-bar': hasNavBar, 'has-all': hasHeader && hasNavBar});
        return (
            <div className={cls}>
                <Scroll direction="vertical">
                    {children}
                </Scroll>
            </div>
        );
    }
}