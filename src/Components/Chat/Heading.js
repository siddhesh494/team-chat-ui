import React from 'react'
import videoCallIcon from '../../icons/PNG/videoCall.png'
import callIcon from '../../icons/PNG/call.png'
import GroupImage from '../../icons/Image/group.png'
import F1 from '../../icons/Image/f1.jpg'
import F2 from '../../icons/Image/f2.jpg'
import F3 from '../../icons/Image/f3.jpg'


const Heading = () => {
  return (
    <>
    <div className='py-3 px-6 flex justify-between items-center'>
      {/*  */}
      <div className='flex items-center'>
        <div className='mr-3 p-1 border-4 border-[#82CF9C] rounded-full'>
          <img 
            src={GroupImage}
            alt='groupImage'
            className='w-14 h-14 bg-clip-content rounded-full'
          />
        </div>
        <div>
          <div className='mb-2'>
            <span className='group-name'>College group</span>
          </div>
          <div className='flex'>
            <img
              src={F1}
              alt={"F1"}
              className='w-7 h-7 rounded-full border-2 border-white'
            />
            <img
              src={F2}
              alt={"F2"}
              className='w-7 h-7 relative right-2 rounded-full border-2 border-white'
            />
            <img
              src={F3}
              alt={"F3"}
              className='w-7 h-7 relative right-4 rounded-full border-2 border-white'
            />
            <div className='bg-orange-400 p-2 w-7 h-7 flex items-center relative right-7 rounded-full border-2 border-white'>
              <span className='text-white text-[10px]'>7+</span>
            </div>
          </div>
        </div>
      </div>

      {/* calls and video call */}
      <div>
        <div className='flex'>
          <div className='p-4 mr-3 bg-[#F7F5F4] rounded-full'>
            <img
              src={videoCallIcon}
              alt="videoCallIcon"
            />
          </div>
          <div className='p-4 mr-3 bg-[#F7F5F4] rounded-full'>
            <img
              src={callIcon}
              alt="callIcon"
            />
          </div>
        </div>
      </div>

    </div>
    <hr />
    </>
  )
}

export default Heading