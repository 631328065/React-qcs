# 安装依赖
	react-router-dom					路由
	axios								发请求
	http-proxy-middleware@0.20.0		跨域
	react-flexible						px转rem
	reset-css							重置样式
	swiper@3.4.2						轮播图的
	sass-loader							scss			
	node-sass							scss
	antd								蚂蚁组件
		
cnpm i --save react-router-dom axios http-proxy-middleware@0.20.0 react-flexible reset-css swiper@3.4.2 sass-loader node-sass@4.0.0 antd

# 创建了面膜中心和今日推荐两个页面
	pages
		mask
			index.js
		recommend
			index.js
			
# 配置路由
	src
		router
			index.js
			
```
import React from 'react'
import {NavLink,Route,BrowserRouter} from 'react-router-dom'
import Recommend from '../pages/recommend/'
import Mask from '../pages/mask/'
import Head from '../components/common/head/index.js'
class Routes extends React.Component{
	render(){
		return <BrowserRouter>
			<div>
				<Head />
			</div>
			<div>
				<Route path="/" exact={true} component = {Recommend}/>
				<Route path="/mask" component = {Mask}/>
			</div>
		</BrowserRouter>
	}
}
export default Routes	
```
	
# 封装头部组件
	src
		components
			common
				head
					index.js
					head.scss
```
import React from 'react'
import {NavLink} from "react-router-dom"
import { Row, Col,Input  } from 'antd';
import './head.scss'
import { UserOutlined ,ShoppingCartOutlined,SearchOutlined} from '@ant-design/icons';

class Head extends React.Component{
	render(){
		return <div>
			<div className="nav-search">
				<Row>
					<Col span={4}><UserOutlined /></Col>
					<Col span={16}>
						<Input placeholder="保湿面膜 0.1元" prefix={<SearchOutlined />}/>
					</Col>
					<Col span={4}><ShoppingCartOutlined /></Col>
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
```
# 轮播图	
	引入swiper
```
	import Swiper from 'swiper/dist/js/swiper.min.js'
	import 'swiper/dist/css/swiper.min.css'
```
	
	创建swiper对象-在挂载函数里面
```
	setTimeout(()=>{
		var swiper = new Swiper('.swiper-container', {
		       pagination: '.swiper-pagination',
		       paginationClickable: true,
						observer:true,
						observeParents:true,
						autoplay:1000,
						loop:true
		   })
	}
	,1000)
```
	引入具体的代码
```
	<div className="swiper-container">
		<div className="swiper-wrapper">
		{
		swiperList.map(item=>
			<div key={item.id} className="swiper-slide">
				<img src={item.image_url} />
			</div>
		)
		}
		</div>
		<div className="swiper-pagination"></div>
	</div>
```	

# 封装轮播图组件
	如果我们多个地方使用轮播图，那么我们就要多次引入，在实际项目开发中，我们会将这种重复劳动，使用组件封装来提高开发效率
	components
		main
			index.scss
			myswiper.js
		
```
	index.scss
	
	.swiper-container{
		.swiper-wrapper{
			.swiper-slide{
				img{
					width:100%;
				}
			}
		}
	}
```

```
import React from 'react'
import './index.scss'
import Swiper from 'swiper/dist/js/swiper.min.js'  
import 'swiper/dist/css/swiper.min.css'

class MySwiper extends React.Component{
	componentDidMount(){
		setTimeout(()=>{
			var swiper = new Swiper('.swiper-container', {
			        pagination: '.swiper-pagination',
			        paginationClickable: true,
					observer:true,
					observeParents:true,
					autoplay:1000,
					loop:true
			   })
		}
		,1000)
	}
	
	render(){
		let {swiperList} = this.props;
		return <div>
		 <div className="swiper-container">
			<div className="swiper-wrapper">
			{
			swiperList.map((item,index)=>
				<div key={index} className="swiper-slide">
					<img src={item.image_url} />
				</div>
			)
			}
			</div>
			<div className="swiper-pagination"></div>
		</div>
		</div>
	}
}

export default MySwiper;
```