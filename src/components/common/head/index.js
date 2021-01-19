import React from 'react'
import {NavLink} from "react-router-dom"
import {Row, Col, Input} from 'antd';
import './head.scss';
import {UserOutlined, ShoppingCartOutlined, SearchOutlined} from '@ant-design/icons';

class Head extends React.Component {
    render() {
        return <div>
            <div className="nav-search">
                <Row>
                    <Col span={4}><UserOutlined/></Col>
                    <Col span={16}>
                        <Input placeholder="保湿面膜 0.1元" prefix={<SearchOutlined/>}/>
                    </Col>
                    <Col span={4}><ShoppingCartOutlined/></Col>
                </Row>
            </div>
            <div className="nav-text">
                <NavLink to="/" exact={true}>今日推荐</NavLink>
                <NavLink to="/mask">面膜中心</NavLink>
            </div>
        </div>
    }
}

export default Head