import React from 'react'
import NewMessageIcon from '../../icons/PNG/new-message.png'
import FavIcon from '../../icons/PNG/fav.png'
import SearchIcon from '../../icons/PNG/search.png'
import MyImage from '../../icons/Image/myImage.jpg'
import EachMessage from './EachMessage'



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
          profileImage={MyImage}
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
          profileImage={MyImage}
          name={"College group"}
          recievedText={"Marina is typing..."}
          recievedMsgType={"You: "}
        />
        
        {/* each message */}
        <EachMessage 
          online={true}
          messageSeen={true}
          numberOfMessage={2}
          profileImage={MyImage}
          name={"Jackson Roy"}
          recievedText={"Sent a picture"}
          recievedMsgType={'picture'}
        />

        {/* each message */}
        <EachMessage 
          online={true}
          messageSeen={false}
          numberOfMessage={3}
          profileImage={MyImage}
          name={"Hafsa shaikh"}
          recievedText={"Meet me before presentation....."}
          recievedMsgType={null}
        />

        {/* each message */}
        <EachMessage 
          online={false}
          messageSeen={true}
          numberOfMessage={2}
          profileImage={MyImage}
          name={"Alix joseph"}
          recievedText={"How did you prepared......"}
          recievedMsgType={null}
        />

        

        {/* each message */}
        <EachMessage 
          online={false}
          messageSeen={true}
          numberOfMessage={2}
          profileImage={MyImage}
          name={"Rockstar Benj"}
          recievedText={"Sent an attachment"}
          recievedMsgType={'attachment'}
        />


      </div>
    </div>
  )
}

export default Message