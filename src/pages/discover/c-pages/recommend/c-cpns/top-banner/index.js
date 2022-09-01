import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Carousel } from "antd"

import { getTopBannerAction } from "../../store/actionCreator";

import {
  BannerControl,
  BannerLeft,
  BannerRight,
  BannerWrapper
} from "./style";

function YQTopBanner(props) {

  const [currentIndex, setCurrentIndex]= useState(0);

  const { topBanners } = useSelector((state) => ({
    topBanners: state.recommend.topBanners
  }), shallowEqual);

  // 发送网络请求
  const dispatch = useDispatch();

  // 其他hooks
  const bannerRef = useRef()
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);
  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to)
  }, []);

  // 其他业务逻辑
  const bgImg = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20");

  return (
    <BannerWrapper bgImage={bgImg}>
      <div className='banner wrap-v2'>
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
            {
              topBanners.map((item, index) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img className="image" src={item.imageUrl} alt={item.typeTitle}/>
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}


export default memo(YQTopBanner);
