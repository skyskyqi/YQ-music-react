import React, { memo, useEffect } from 'react';
// import { connect, useDispatch, useSelector } from "react-redux";

import YqTopBanner from "./c-cpns/top-banner";
import YQHotRecommend from "./c-cpns/hot-recommend";
import YQAlbum from './c-cpns/new-album';
import YQRCMRanking from './c-cpns/recommend-ranking';
import {
  RecommendWrapper,
  RecommendLeft,
  RecommendRight,
  Content
} from "./style"


function YQRecommend(props) {

  return (
    <RecommendWrapper>
      <YqTopBanner></YqTopBanner>
      <Content className='wrap-v2'>
        <RecommendLeft>
          <YQHotRecommend></YQHotRecommend>
          <YQAlbum></YQAlbum>
          <YQRCMRanking></YQRCMRanking>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}
export default memo(YQRecommend);


// function YQRecommend(props) {
//   const {getBanners, topBanners} = props;
//   // console.log(props);
//   useEffect(() => {
//     getBanners();
//   }, [getBanners]);
//   console.log(topBanners);
//   return (
//     <div>
//       <h2>YQRecommend: {topBanners.length}</h2>
//     </div>
//   )
// }

// const mapStateToProps = (state) => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = (dispatch) => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(YQRecommend));
