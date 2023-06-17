import React from 'react'
import './PostCard.css'

function Post() {
  return (
    <div className='postcard-box-container'>
        <div className='postcard-heading'>
          <div className='post-user-info-container'>
            <div className='pf-pic-disp-container header-element'><span className='pfp-main-container'></span></div>
            <span className='pf-name header-element'>
              <p className='username-container-main header-text-main'> Username Here</p>
              <p className='rift-id-container-main header-text-main'> Rift ID Here</p>
            </span>
          </div>
          <div className='pf-interactive header-element'></div>
        </div>
        <div className='postcard-content'>
          <span className='content-text-container'>
            <p className='content-text-main'>
              The deep sea, with its vast and uncharted depths
            </p> 
          </span> 
          {/* <span className='content-imgvid-container'></span> */}
        </div>
        <div className='postcard-engage'>
          <span className='like-button engage-button'></span>
          <span className='comment-button engage-button'></span>
          <span className='share-button engage-button'></span>
        </div>
    </div>
  )
}

export default Post