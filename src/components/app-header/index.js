import React, { memo } from 'react';

import {
  HeaderWrapped,
  HeaderLeft,
  HeaderRight
} from './style';
import { headerLinks } from '@/commons/local-data';

import { NavLink } from 'react-router-dom'

export default memo(function YQAppHeader() {

  const showSelectItem = (item, index) => {
    if (index < 3) {
      return <NavLink to={item.link} exact>{item.title}</NavLink>
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }

  return (
    <HeaderWrapped>
      <div className='context wrap-v1'>
        <HeaderLeft>
          <a href='#/' className='logo sprite_01'>网易云音乐</a>
          <div className='select-list'>
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className="select-item">
                    {showSelectItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          right
        </HeaderRight>
      </div>
      <div className='divider'></div>
    </HeaderWrapped>
  )
})

// <NavLink to="/">发现音乐</NavLink>
//       <NavLink to="/mine">我的音乐</NavLink>
//       <NavLink to="/friend">关注</NavLink>
//       <NavLink to="/player">音乐人</NavLink>