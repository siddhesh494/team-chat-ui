import React from 'react'
import MyImage from '../../icons/Image/myImage.jpg'
import Message from './Message'
import './Home.css'

const Home = () => {
  return (
    <div  className='scrollable'>
      
      {/* account heading */}
      <div className=' flex flex-row py-6 px-8 items-center '>
        <div className='mr-8'>
          <img
            src={MyImage}
            alt={"myImage"}
            className='rounded-full'
          />
        </div>
        <div>
          <span className='my-name'>
            John Doe
          </span>
          <br />
          <span className='sub-text'>My Account</span>
        </div>
      </div>

      <hr />

      {/* Online now section */}
      <div className='py-2 px-6 items-center '>
        <div className='mb-4'>
          <span className='online-heading'>Online Now</span>
        </div>
        
        <div className='flex gap-4'>
          <div>
            <img
              src={MyImage}
              alt={"myImage"}
              className='rounded-full'
            />
          </div>
          <div>
            <img
              src={MyImage}
              alt={"myImage"}
              className='rounded-full'
            />
          </div>
          <div>
            <img
              src={MyImage}
              alt={"myImage"}
              className='rounded-full'
            />
          </div>
          <div>
            <img
              src={MyImage}
              alt={"myImage"}
              className='rounded-full'
            />
          </div>
          <div className='bg-[#FBE5D9] p-4 rounded-full'>
            <span style={{
              color: '#FF731D'
            }}>
              18+
            </span>
          </div>
          
        </div>
      </div>

      {/* messages section */}
      <div >
        <Message />
      </div>

    </div>
  )
}

export default Home