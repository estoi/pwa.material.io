import React, { Component } from 'react';
import { Button } from '@material-ui/core';

import { Content, NavBar, Header } from '../../components';

export default class Mine extends Component {

    render() {

        return (
            <div className="mine-warp">
                <Header></Header>
                <Content hasHeader hasNavBar>
                    <Button color="primary" variant="contained">Mine</Button>
                </Content>
                <NavBar {...this.props} />
            </div>
        );
    }
}