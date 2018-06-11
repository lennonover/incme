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
        }
    ],

    logogif:true
    
}
export default (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_IMG":
            return fromJS(state).set('now', 1).toJS();
        default:
            return state;
    }
}