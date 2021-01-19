import React from 'react';
import './index.scss';
import axios from 'axios';
import MySwiper from '../../components/main/myswiper';

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            swiperList: []
        }
    }

    componentDidMount() {
        axios.get("aladdin/get_batch_data?codes=[%22sylunbo%22,%22pingou_B%22,%22Home_TopicCase_170505_7%22,%22Home_CategaryNavs_170505_7%22]&province_code=&city_code=&version=&app_channel=wap&plat=wap&access_token=&device_id=57220320-3dd4-11eb-bd0c-292cd92067c2")
            .then(r => {
                this.setState({swiperList: r.data.data.sylunbo.datas})
            })
    }

    render() {
        let {swiperList} = this.state;
        return <div>
            <MySwiper swiperList={swiperList}/>
        </div>
    }
}

export default Main;