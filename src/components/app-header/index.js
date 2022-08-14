import React, { memo } from 'react';

import { NavLink } from 'react-router-dom';
import {Input} from "antd";
import {SearchOutlined} from "@ant-design/icons"

import {
  HeaderWrapped,
  HeaderLeft,
  HeaderRight
} from './style';
import { headerLinks } from '@/commons/local-data';


export default memo(function YQAppHeader() {

  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link} exact>
          {item.title}
          <i className="sprite_01 icon" ></i>
        </NavLink>
      )
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
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined/>}/>
          <div className="center">创作者中心</div>
          <div className='login'>登陆</div>

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