import React, { Component } from 'react';
import { Button } from '@material-ui/core';

import { Content, NavBar } from '../../components';

export default class Mine extends Component {

    render() {

        return (
            <div className="home-warp">
                <Content hasNavBar>
                    <Button color="primary" variant="contained">Pay</Button>
                </Content>
                <NavBar {...this.props} />
            </div>
        );
    }
}