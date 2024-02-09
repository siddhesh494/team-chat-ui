import React from 'react'
import GroupImage from '../../icons/Image/group.png'
import './GroupDetails.css'
import dotIcon from '../../icons/PNG/2-dot.png'
import linkIcon from '../../icons/PNG/link.png'
import sharedMediaIcon from '../../icons/PNG/sharedMedia.png'
import sharedFileIcon from '../../icons/PNG/sharedFile.png'
import Building1 from '../../icons/Image/building1.jpg'
import Building2 from '../../icons/Image/building2.jpg'
import Building3 from '../../icons/Image/building3.jpg'
import Building4 from '../../icons/Image/building4.jpg'




const GroupDetails = () => {
  return (
    <div className='scrollable'>
      
      {/* group name */}
      <div className='p-4 text-center flex flex-col items-center justify-center'>
        <div className='mb-2'>
          <img 
            src={GroupImage}
            alt='groupImage'
            className='w-20 h-20 bg-clip-content rounded-full'
          />
        </div>
          
        <span className='group-name'>College Group</span>  
        <span className='group-des'>@collegefriends</span>      
      </div>

      {/*  */}
      <div className='border border-[#DADADA] flex justify-around'>
        <div className='p-4 '>
          <span className='participants'>Participants</span>
        </div>
        <div className='p-4 buttom-border'>
          <span className='shared-files'>Shared files</span>
        </div>
      </div>

      {/* shared Media */}
      <div className='py-8 px-10'>

        {/* part 1 */}
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row items-center'>
            <div>
              <img
                src={sharedMediaIcon}
                alt="sharedMediaIcon"
              />
            </div>
            <div className='ml-5'>
              <span className='shared-media'>Shared Media</span>
            </div>
          </div>
          <div>
            <img
              src={dotIcon}
              alt="3-dot"
            />
          </div>
        </div>

        {/* part 2 - images */}
        <div className='mt-5 flex flex-row flex-wrap justify-between'>
          <div>
            <img 
              src={Building1}
              alt='Building1'
              className='w-40'
            />
          </div>
          <div>
            <img 
              src={Building2}
              alt='Building1'
              className='w-40'
            />
          </div>
          <div className='mt-8'>
            <img 
              src={Building3}
              alt='Building1'
              className='w-40'
            />
          </div>
          <div className='mt-8'>
            <img 
              src={Building4}
              alt='Building1'
              className='w-40'
            />
          </div>
        </div>

      </div>

      {/* shared files */}
      <div className='pt-8 px-10'>
        
        {/* part 1 */}
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row items-center'>
            <div>
              <img
                src={sharedFileIcon}
                alt="sharedFileIcon"
              />
            </div>
            <div className='ml-5'>
              <span className='shared-media'>Shared Files</span>
            </div>
          </div>
          
        </div>

        <div className='px-2'>
          
          {/* 1 file */}
          <div className='flex flex-row items-center justify-between my-5'>
            <div className='flex flex-row items-center'>
              <div className='p-2 mr-3 bg-[#F7F5F4] rounded-full'>
                <img
                  src={sharedFileIcon}
                  alt="sharedFileIcon"
                />
              </div>
              <div>
                <span className='file-name'>Architechture21.doc</span>
                <br/>
                <span className='file-date'>04/09/2023 at 09:34am</span>
              </div>
            </div>
            
            <div className=''>
              <img
                src={dotIcon}
                alt="3-dot"
              />
            </div>
          </div>
          
          <div className='flex flex-row items-center justify-between my-5'>
            <div className='flex flex-row items-center'>
              <div className='p-2 mr-3 bg-[#F7F5F4] rounded-full'>
                <img
                  src={sharedFileIcon}
                  alt="sharedFileIcon"
                />
              </div>
              <div>
                <span className='file-name'>Architechture28.doc</span>
                <br/>
                <span className='file-date'>02/09/2023 at 10:43am</span>
              </div>
            </div>
            
            <div className=''>
              <img
                src={dotIcon}
                alt="3-dot"
              />
            </div>
          </div>

          <div className='flex flex-row items-center justify-between my-5'>
            <div className='flex flex-row items-center'>
              <div className='p-2 mr-3 bg-[#F7F5F4] rounded-full'>
                <img
                  src={sharedFileIcon}
                  alt="sharedFileIcon"
                />
              </div>
              <div>
                <span className='file-name'>Architechture16.doc</span>
                <br/>
                <span className='file-date'>01/09/2023 at 08:21am</span>
              </div>
            </div>
            
            <div className=''>
              <img
                src={dotIcon}
                alt="3-dot"
              />
            </div>
          </div>
        
        </div>
      </div>

      <div className='py-8 px-10'>

        <div className='flex flex-row items-center'>
          <div>
            <img
              src={linkIcon}
              alt="linkIcon"
            />
          </div>
          <div className='ml-5'>
            <span className='shared-media'>Shared Links</span>
          </div>
        </div>

        <div className='px-2'>
          
          {/* 1 file */}
          <div className='flex flex-row items-center justify-between my-5'>
            <div className='flex flex-row items-center'>
              <div className='p-2 mr-3 bg-[#F7F5F4] rounded-full'>
                <img
                  src={linkIcon}
                  alt="linkIcon"
                />
              </div>
              <div>
                <span className='link'>https://dribbble/hafsadeartisto........</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>


    </div>
  )
}

export default GroupDetails