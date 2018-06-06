import { fromJS } from 'immutable';
const initialState = {
    menusDates:["野","蛮","生","长"],
    now:0,
    imgs:[
        {
            src:"https://wx4.sinaimg.cn/mw690/68d79b82gy1fqi187eg2sj21dw1fvnpd.jpg",
            tit:'九口'
        },
        {
            src:"https://wx3.sinaimg.cn/mw690/68d79b82gy1fqi18624yvj21w61w6npd.jpg",
            tit:'九口33'
        }
    ]
}
export default (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_IMG":
            // return fromJS(state).set('now', state.now++).toJS();
            return Object.assign({}, state, {now: 1});
            break;
    
        default:
            return state;
    }
}