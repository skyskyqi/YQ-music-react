import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual} from 'react-redux';

import YQThemeHeaderRCM from "@/components/theme-header-rcm";
import {
  HotRecommendWrapper
} from './style.js'
import { getHotRecommendAction } from '../../store/actionCreator.js';
import { HOTRECOMMEND_LIMIT } from '@/commons/constant.js';
import YQSongsCover from '@/components/songs-cover/index.js';

function YQHotRecommend() {
  // state

  // redux hook
  const { hotRecommends } = useSelector((state) => ({
    hotRecommends: state.recommend.hotRecommends
  }), shallowEqual)
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(HOTRECOMMEND_LIMIT))
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <YQThemeHeaderRCM title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子"]}>
      </YQThemeHeaderRCM>
      <div className='recommend-list'>
        {
          hotRecommends.map((item, index) => {
            return (
              <YQSongsCover info={item} key={item.id}>{item.name}</YQSongsCover>
            )
          })
        }
      </div>
      
    </HotRecommendWrapper>
  )
}
export default memo(YQHotRecommend);
