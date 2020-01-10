import React, { Component } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import HomeSharp from '@material-ui/icons/HomeSharp';
import AddCircle from '@material-ui/icons/AddCircle';
import PersonSharp from '@material-ui/icons/PersonSharp';

export default class NavBar extends Component {
    static propTypes = {
    }

    static defaultProps = {
    };

    state = {
        value: ''
    }

    componentDidMount() {
        const { match: { url } } = this.props;
        this.setState({
            value: url
        })
    }

    // 导航点击事件
    barClick(path) {
        const { history } = this.props;
        history.push(path)
    }

    render() {
        const { value } = this.state;

        const options = [
            {
                label: '首页',
                icon: <HomeSharp />,
                path: '/home'
            },
            {
                label: '购买',
                icon: <AddCircle />,
                path: '/pay'
            },
            {
                label: '个人中心',
                icon: <PersonSharp />,
                path: '/mine'
            }
        ];
        return (
            <div className="ui-nav-bar-wrap">
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        this.setState({value: newValue})
                    }}
                >
                    {
                        options?
                        options.map((i, k) => {
                            return (
                                <BottomNavigationAction onClick={() => this.barClick(i.path)} key={k} showLabel={value === i.path} label={i.label} value={i.path} icon={i.icon? i.icon: null}>
                                    
                                </BottomNavigationAction>
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