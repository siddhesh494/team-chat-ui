import React from 'react'
import MyImage from '../../icons/Image/myImage.jpg'
import TypingIcon from '../../icons/PNG/typing.png'
import sendPictureIcon from '../../icons/PNG/sendPicture.png'
import attachmentIcon from '../../icons/PNG/attachment.png'

const ICON = {
  typing: TypingIcon,
  picture: sendPictureIcon,
  attachment: attachmentIcon
}

const EachMessage = ({
  isActive=false,
  online,
  messageSeen,
  numberOfMessage=3,
  profileImage,
  name,
  recievedText,
  recievedMsgType,
}) => {
  return (
    <div className={`flex justify-between items-center my-2 p-3 ${isActive ? 'bg-white rounded-2xl' : ''} `}>
      <div className='flex'>
        <div className='mr-6'>
          <img
            src={profileImage}
            alt={"profileImage"}
            className='rounded-full'
          />
          {online && <div className='w-3 h-3 bg-green-500 float-end rounded-full border border-white relative bottom-3'>

          </div>}
        </div>
        <div className=''>
          <span className='message-name'>
            {name}
          </span>
          <div className='flex mt-1'>
            {recievedMsgType && ICON[recievedMsgType] ? <img
              src={ICON[recievedMsgType]}
              alt={"TypingIcon"}
              className='mr-1'
            /> : <span className='name-message mr-1'
              style={{
                color: 'black'
              }}
            >{recievedMsgType}</span> }
            <span className='name-message'>
              {recievedText}
            </span>
          </div>
          
        </div>
      </div>

      {/* unread msg */}
      {!messageSeen && <div>
        <div className='flex items-center p-3 rounded-[100%] bg-orange-400 w-8 h-8 '>
          <span className='text-white '>{numberOfMessage}</span>
        </div>
      </div>}
      
    </div>
  )
}

export default EachMessage