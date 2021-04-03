import { fromJS } from "immutable";
const imgs =[]
Array.from(new Array(90).keys()).forEach((v,i)=>{
  imgs.push({
    src:`./images/xx/xx (${++i}).jpg`,
    tit: "照片",
  })
})
const initialState = {
  now: 0,
  imgs:imgs,
  logogif: true,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_IMG":
      return fromJS(state)
        .set(
          "now",
          Math.floor(Math.random() * (initialState.imgs.length - 0 + 1) + 0)
        )
        .toJS();
    default:
      return state;
  }
};
