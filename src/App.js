import React, { Component } from 'react';
import Home from '@material-ui/icons/Home';
import AddCircle from '@material-ui/icons/AddCircle';
import FavoriteSharp from '@material-ui/icons/FavoriteSharp';
import PersonSharp from '@material-ui/icons/PersonSharp';

import { Header, Content, NavBar } from './components';

export default class App extends Component {

    render() {
        const { children } = this.props;

        const options = [
            {
                label: '首页',
                icon: <Home />
            },
            {
                label: '购买',
                icon: <AddCircle />
            },
            {
                label: '服务',
                icon: <FavoriteSharp />
            },
            {
                label: '个人中心',
                icon: <PersonSharp />
            }
        ];

        return (
            <div className="root-app">
                {/* <Header></Header> */}
                <Content hasNavBar>
                    {children}
                </Content>
                <NavBar options={options}></NavBar>
            </div>
        );
    }
}