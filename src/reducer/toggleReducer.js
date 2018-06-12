import { fromJS } from 'immutable';
const initialState = {
    now:0,
    imgs:[
        {
            src:"http://img.cnu.cc/uploads/images/920/1805/24/4c96bba2f37e3ad581601926060ca17a.jpg",
            tit:'1'
        },
        {
            src:"http://img.cnu.cc/uploads/images/920/1708/17/5f63e9b3ec473115ba1bf964859c5309.jpg",
            tit:'2'
        },
        {
            src:"http://img.cnu.cc/uploads/images/920/1805/24/0aa239da9ef63dc69757bd6945262593.jpg",
            tit:'7'
        },
        {
            src:"http://img.cnu.cc/uploads/images/920/1805/24/55a66d61c8e534638efd8e5e2ad6bde7.jpg",
            tit:'3'
        },
        {
            src:"http://img.cnu.cc/uploads/images/920/1805/24/7f070abd56a338f4993f988b07f22959.jpg",
            tit:'4'
        },
        {
            src:"http://img.cnu.cc/uploads/images/920/1805/24/0154881beddc3745aafad89215720e9f.jpg",
            tit:'5'
        },
        {
            src:"http://img.cnu.cc/uploads/images/920/1805/24/97b535345df2328ca9874908a7778008.jpg",
            tit:'6'
        },
        {
            src:"http://img.cnu.cc/uploads/images/920/1805/24/07e0fd4e27b93a78a0ed003850cda559.jpg",
            tit:'8'
        },
        {
            src:"http://img.cnu.cc/uploads/images/920/1805/24/08294f69724739f585655ca2abc1f102.jpg",
            tit:'9'
        },
        {
            src:"../images/yy/yy (1).jpg",
            tit:"yy"
        },
        {
            src:"../images/yy/yy (2).jpg",
            tit:"yy"
        },
        {
            src:"../images/yy/yy (3).jpg",
            tit:"yy"
        },
        {
            src:"../images/yy/yy (4).jpg",
            tit:"yy"
        },
        {
            src:"../images/yy/yy (5).jpg",
            tit:"yy"
        },
        {
            src:"../images/yy/yy (6).jpg",
            tit:"yy"
        },
        {
            src:"../images/yy/yy (7).jpg",
            tit:"yy"
        },
        {
            src:"../images/yy/yy (8).jpg",
            tit:"yy"
        },
        {
            src:"../images/yy/yy (9).jpg",
            tit:"yy"
        },
        {
            src:"../images/yy/yy (10).jpg",
            tit:"yy"
        },
        {
            src:"../images/yy/yy (11).jpg",
            tit:"yy"
        },
        {
            src:"../images/yy/yy (12).jpg",
            tit:"yy"
        },
        {
            src:"../images/yy/yy (13).jpg",
            tit:"yy"
        },
        {
            src:"../images/yy/yy (14).jpg",
            tit:"yy"
        },
        {
            src:"../images/yy/IMG_2342.jpg",
            tit:"yy"
        },
        {
            src:"../images/yy/IMG_2347.jpg",
            tit:"yy"
        },
        {
            src:"../images/zz/zz (1).jpg",
            tit:"yy"
        },
        {
            src:"../images/zz/zz (2).jpg",
            tit:"yy"
        },
        {
            src:"../images/zz/zz (3).jpg",
            tit:"yy"
        },
        {
            src:"../images/zz/zz (4).jpg",
            tit:"yy"
        },
        {
            src:"../images/zz/zz (5).jpg",
            tit:"yy"
        },
        {
            src:"../images/zz/zz (6).jpg",
            tit:"yy"
        },
        {
            src:"../images/zz/zz (7).jpg",
            tit:"yy"
        },
        {
            src:"../images/zz/zz (8).jpg",
            tit:"yy"
        },
        {
            src:"../images/zz/zz (9).jpg",
            tit:"yy"
        },
        {
            src:"../images/zz/zz (10).jpg",
            tit:"yy"
        },
        {
            src:"../images/zz/zz (11).jpg",
            tit:"yy"
        },
        {
            src:"../images/zz/zz (12).jpg",
            tit:"yy"
        },
        {
            src:"../images/zz/zz (13).jpg",
            tit:"yy"
        },
        {
            src:"../images/zz/zz (14).jpg",
            tit:"yy"
        },
        {
            src:"../images/zz/zz (15).jpg",
            tit:"yy"
        },
        {
            src:"../images/zz/zz (16).jpg",
            tit:"yy"
        },
        {
            src:"../images/zz/zz (17).jpg",
            tit:"yy"
        },
        {
            src:"../images/zz/zz (18).jpg",
            tit:"yy"
        },
        {
            src:"../images/zz/zz (19).jpg",
            tit:"yy"
        },
        {
            src:"../images/zz/zz (20).jpg",
            tit:"yy"
        },
        {
            src:"../images/zz/zz (21).jpg",
            tit:"yy"
        },
        {
            src:"../images/zz/zz (22).jpg",
            tit:"yy"
        },
        {
            src:"../images/zz/zz (23).jpg",
            tit:"yy"
        },
        {
            src:"../images/zz/zz (24).jpg",
            tit:"yy"
        },
        {
            src:"../images/zz/zz (25).jpg",
            tit:"yy"
        },
        {
            src:"../images/zz/zz (26).jpg",
            tit:"yy"
        }
    ],

    logogif:true
    
}
export default (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_IMG":
            // 0 - 8  的随机数
            return fromJS(state).set('now', Math.floor(Math.random() * (50-0+1) + 0)).toJS();
        default:
            return state;
    }
}