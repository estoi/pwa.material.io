import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';

import { Container, Button } from '@material-ui/core';

export default class App extends Component {
    render() {
        return (
            <div className="root-app">
                <Container fixed>
                    <Button variant="contained" color="primary">Material Button</Button>
                </Container>
            </div>
        );
    }
}