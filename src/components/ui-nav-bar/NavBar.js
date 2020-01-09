import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';


export default class NavBar extends Component {
    static propTypes = {
        options: PropTypes.array
    }

    static defaultProps = {
        hasHeader: false,
        hasNavBar: false,
        options: []
    };

    state = {
        value: 0
    }

    render() {
        const { value } = this.state;
        const { options } = this.props;
        return (
            <div className="ui-nav-bar-wrap">
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        this.setState({value: newValue})
                    }}
                    showLabels
                >
                    {
                        options?
                        options.map((i, k) => {
                            return (
                                <BottomNavigationAction key={k} showLabel={value === k} label={i.label} value={k} icon={i.icon? i.icon: null} />
                            );
                        })
                        :
                        null
                    }
                </BottomNavigation>
            </div>
        );
    }
}