import React, { memo } from 'react';

import { advertisingLinks, footerImg } from '@/commons/local-data';

import {
  FooterStyle,
  FooterLeft,
  FooterRight
} from './style';
import policeImg from "@/assets/images/police.png";


function advList(item, index) {
  if(index <= 6) {
    return (
      <span className='span-contain' key={item.link}>
        <a href={item.link}>{item.title}</a>
        <span>|</span>
      </span>
    )
  } else {
    return (
      <span className='span-contain' key={item.link}>
        <a href={item.link}>{item.title}</a>
      </span>
    )
  }
}

export default memo(function YQAppFooter() {
  return (
    <FooterStyle>
      <div className="wrap-v1 footer">
        <div className="footer-content">
          <FooterLeft>
            <div className='footer_0'>
              {
                advertisingLinks.map((item, index) => {
                  return advList(item, index);
                })
              }
            </div>

            <div className="footer_1">
              <div>网易公司版权所有©1997-2022</div>
              <div>杭州乐读科技有限公司运营：浙网文[2021] 1186-054号</div>
            </div>

            <div className="footer_2">
              <div>粤B2-20090191-18  工业和信息化部备案管理系统网站 </div>
              <div>
                <img src={policeImg} alt="police"></img>
                <span>浙公网安备 33010902002564号</span>
              </div>
            </div>
            <div>互联网宗教信息服务许可证：浙（2022）0000120</div>
          </FooterLeft>
        </div>
        <div className='footer-img'>
          <FooterRight>
            {
              footerImg.map((item, index) => {
                return (
                  <li className="item" key={item.link}>
                    <a className="link" href={item.link} rel="noopener noreferrer" target="_blank"> </a>
                    <span className='title'>{item.title}</span>
                  </li>
                )
              })
            }
          </FooterRight>
        </div>
      </div>
    </FooterStyle>
  )
})
