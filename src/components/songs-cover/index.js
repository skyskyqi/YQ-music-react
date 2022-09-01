import React, { memo } from 'react';
import { getSizeImage, getCount} from '@/utils/format_utils';

import { SongsCoverWrapper } from './style'

const YQSongsCover = memo((props) => {

  const { info } = props;

  return (
    <SongsCoverWrapper >
      <div className='cover-top'>
        <img src={getSizeImage(info.picUrl, 140)} alt={info.name}/>
        <div className='cover sprite_cover'>
          <div className='info sprite_cover'>
            <span>
              <i className='sprite_icon erji'></i>
              {getCount(info.playCount)}
            </span>
            <i className='sprite_icon play'></i>
          </div>
        </div>
      </div>
      <div className='cover-bottom'>
        {info.name}
      </div>
    </SongsCoverWrapper>
  )
})

export default YQSongsCover;