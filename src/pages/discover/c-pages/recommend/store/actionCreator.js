import * as recommendConstant from './constants';
import { getTopbanners, getHotRecommend } from "@/services/recommend";



function changeTopBannerAction(res) {
  // console.log(res);
  return {
    type: recommendConstant.CHANGE_BANNAR,
    topBanners: res.banners
  }
}

function changeHotRecommendAction(res) {
  return {
    type: recommendConstant.CHANGE_RECOMMEND,
    hotRecommends: res.result
  }

}

export function getTopBannerAction() {
  return (dispatch) => {
    getTopbanners().then(res => {
      dispatch(changeTopBannerAction(res));
    })
  }
}

export function getHotRecommendAction(limit) {
  return (dispatch) => {
    getHotRecommend(limit).then(res => {
      dispatch(changeHotRecommendAction(res));
    })
  }
}