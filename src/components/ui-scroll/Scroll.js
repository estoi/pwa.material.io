import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BScroll from 'better-scroll';

export default class Scroll extends Component {

    static propTypes = {
        direction: PropTypes.string,
        children: PropTypes.any
    }

    static defaultProps = {
        direction: 'vertical', // 滚动方向 默认竖向滚动
    };

    componentDidMount() {
        this.initScroll();
    }

    initScroll = () => {
        const { direction } = this.props;
        const wrapper = document.querySelector('.wrapper');
        const scroll = new BScroll(wrapper, {
            scrollX: direction !== 'vertical',  //横向滚动
            click: true,  // better-scroll 默认会阻止浏览器的原生 click 事件
            scrollY: direction === 'vertical', //竖向滚动
          })
    }

    render() {
        const { children } = this.props
        return (
            <div className="wrapper">
                <div>
                    {children}
                </div>
            </div>
        );
    }
}