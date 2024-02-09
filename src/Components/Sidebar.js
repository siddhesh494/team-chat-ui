import React from 'react'
import FireIcon from '../icons/PNG/fire.png'

import CategoryIcon from '../icons/PNG/category.png'
import ChatIcon from '../icons/PNG/chat.png'
import FriendIcon from '../icons/PNG/friend.png'
import CallIcon from '../icons/PNG/call.png'
import SaveIcon from '../icons/PNG/save.png'
import InfoIcon from '../icons/PNG/info.png'

import LogoutIcon from '../icons/PNG/logout.png'



const Sidebar = () => {
  return (
    <div className='flex flex-col	items-center p-4 justify-between'>
      <div className='mb-16'>
        <img 
          src={FireIcon}
          alt={'fireIcon'}
          className='w-8'
        />
      </div>

      <div className='flex flex-col items-center'>
        <img 
          src={CategoryIcon}
          alt={'CategoryIcon'}
          className='my-3'

        />

        <div className='my-3 w-8 p-2 bg-orange-500 rounded-full'>
          <img 
            src={ChatIcon}
            alt={'chat'}
            className='w-4 '
          />
        </div>
        
        <img 
          src={FriendIcon}
          alt={'friend'}
          className='my-3'
        />
        <img 
          src={CallIcon}
          alt={'call'}
          className='my-3'
        />
        <img 
          src={SaveIcon}
          alt={'save'}
          className='my-3'
        />
        <img 
          src={InfoIcon}
          alt={'InfoIcon'}
          className='my-3'
        />

      </div>

      <div className='mt-48'>
        <img 
          src={LogoutIcon}
          alt={'LogoutIcon'}
          className='w-5'
        />
      </div>
    </div>
  )
}

export default Sidebar