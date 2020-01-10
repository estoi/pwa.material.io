import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button } from '@material-ui/core';
import { Content, NavBar } from '../../components';

import { HttpService } from '../../common/httpService';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});
@connect(
    mapStateToProps,
    mapDispatchToProps,
)
class Home extends Component {

    componentDidMount() {
        HttpService('/top/list?idx=6').then(res => {
            console.log(res)
        })
    }

    render() {

        return (
            <div className="home-warp">
                <Content hasNavBar>
                    <Button color="primary" variant="contained">Home</Button>
                </Content>
                <NavBar {...this.props} />
            </div>
        );
    }
}

export default Home;