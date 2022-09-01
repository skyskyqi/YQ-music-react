// import React from "react";
// import { fromJS, Map} from "immutable";
import * as recommend from "./constants";

const defaultState = {
  topBanners: [],
  hotRecommends: []
};


function reducer(state = defaultState, action) {
  // console.log("reducer", state);
  switch (action.type) {
    case recommend.CHANGE_BANNAR:
      return {...state, topBanners: action.topBanners};
    case recommend.CHANGE_RECOMMEND:
      return {...state, hotRecommends: action.hotRecommends}
    default:
      return { ...state };
  }
}

export default reducer;