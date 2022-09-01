import React, { memo } from 'react';
import { HeaderWrapper } from './style';
import PropTypes from "prop-types";

const YQThemeHeaderRecommend  = memo((props) => {

  const { title, keywords } = props;

  return (
    <HeaderWrapper className='sprite_02'>
      <div className='left'>
        <h3 className='title'>{title}</h3>
        <div className='keyword'>
          {
            keywords.map((item, index) => {
              if (index === keywords.length - 1 ) {
                return (
                  <div className='item' key={item}>
                    <a href='todo'>{item}</a>
                  </div>
                )
              } else {
                return (
                  <div className='item' key={item}>
                    <a href='todo'>{item}</a>
                    <span className='divider'>|</span>
                  </div>
                )
              } 
            })
          }
        </div>
      </div>
      <div className='right'>
        <a href='todo'>更多</a>
        <i className='icon sprite_02'></i>
      </div>
    </HeaderWrapper>
  )
})

YQThemeHeaderRecommend.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array
}

YQThemeHeaderRecommend.defaultProps = {
  keywords: []
}

export default YQThemeHeaderRecommend;
