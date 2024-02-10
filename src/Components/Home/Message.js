import React from 'react'
import NewMessageIcon from '../../icons/PNG/new-message.png'
import FavIcon from '../../icons/PNG/fav.png'
import SearchIcon from '../../icons/PNG/search.png'
import EachMessage from './EachMessage'
import GroupImage from '../../icons/Image/grp.jpg'
import f1 from '../../icons/Image/f1.jpg'
import f2 from '../../icons/Image/f2.jpg'
import f3 from '../../icons/Image/f3.jpg'
import f9 from '../../icons/Image/f9.jpg'
import f7 from '../../icons/Image/f7.jpg'
import f8 from '../../icons/Image/f8.jpg'



const Message = () => {
  return (
    <div className='py-5 px-6 items-center'>
      
      {/* msg head */}
      <div>

        {/* msg icons */}
        <div className='flex justify-between mb-5'>
          <div>
            <span className='message-text'>Messages</span>
          </div>
          <div className='flex gap-3'>
            <img 
              src={NewMessageIcon}
              alt='newMessage'
              className='w-6'
            />
            <img 
              src={FavIcon}
              alt='FavIcon'
              className='w-6'
            />
          </div>
        </div>
        
        {/* serach bar */}
        <div className='bg-white p-4 rounded-2xl'>
          <div className='flex items-center'>
            <img 
              src={SearchIcon}
              alt="SearchIcon"
              className='mr-5 w-4'
            />
            <span className='search-text'>Search</span>
          </div>
        </div>
      </div>

      <div className=''>

        {/* each message */}
        <EachMessage 
          online={true}
          messageSeen={false}
          numberOfMessage={2}
          profileImage={f7}
          name={"Marina Jolly"}
          recievedText={"Marina is typing..."}
          recievedMsgType={'typing'}
        />

        {/* each message */}
        <EachMessage 
          isActive={true}
          online={true}
          messageSeen={true}
          numberOfMessage={"2"}
          profileImage={GroupImage}
          name={"College group"}
          recievedText={"Marina is typing..."}
          recievedMsgType={"You: "}
        />
        
        {/* each message */}
        <EachMessage 
          online={true}
          messageSeen={true}
          numberOfMessage={2}
          profileImage={f1}
          name={"Jackson Roy"}
          recievedText={"Sent a picture"}
          recievedMsgType={'picture'}
        />

        {/* each message */}
        <EachMessage 
          online={true}
          messageSeen={false}
          numberOfMessage={3}
          profileImage={f2}
          name={"Hafsa shaikh"}
          recievedText={"Meet me before presentation....."}
          recievedMsgType={null}
        />

        {/* each message */}
        <EachMessage 
          online={false}
          messageSeen={true}
          numberOfMessage={2}
          profileImage={f3}
          name={"Alix joseph"}
          recievedText={"How did you prepared......"}
          recievedMsgType={null}
        />

        

        {/* each message */}
        <EachMessage 
          online={false}
          messageSeen={true}
          numberOfMessage={2}
          profileImage={f8}
          name={"Rockstar Benj"}
          recievedText={"Sent an attachment"}
          recievedMsgType={'attachment'}
        />

        {/* each message */}
        <EachMessage 
          online={false}
          messageSeen={true}
          numberOfMessage={2}
          profileImage={f9}
          name={"Max Hob"}
          recievedText={"Next presentation will be......"}
          recievedMsgType={null}
        />


      </div>
    </div>
  )
}

export default Message