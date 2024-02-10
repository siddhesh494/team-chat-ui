import React from 'react'
import Heading from './Heading'
import './Chat.css'
import f6 from '../../icons/Image/f6.jpg'
import f9 from '../../icons/Image/f9.jpg'
import f8 from '../../icons/Image/f8.jpg'
import f4 from '../../icons/Image/f4.jpg'
import f1 from '../../icons/Image/myImage.jpg'
import typingIcon from '../../icons/PNG/typing.png'
import micIcon from '../../icons/PNG/mic.png'
import pictureIcon from '../../icons/PNG/sendPicture.png'
import attachmentIcon from '../../icons/PNG/attachment.png'
import arrowIcon from '../../icons/PNG/arrow.png'


const Chat = () => {
  return (
    <div className=''>
      <Heading />

      {/* chats */}
      <div className='py-3 px-6 chat-scroll'>
        {/* time */}
        <div className='flex justify-center my-3'>
          <div className=''>
            <span className='date-style'>Yesterday</span>
          </div>
        </div>

        {/* chat 1 */}
        <div className='flex flex-row my-5'>
          <div>
            <img
              src={f6}
              alt={"f6"}
            />
          </div>

          <div className='flex flex-col ml-5'>
            <div>
              <span className='chat-name-head'>Mojixa Tan</span>
              <span className='chat-date ml-2'>09:03 pm</span>
            </div>
            <div className=''>
              <div className='bg-[#F7F5F4] max-w-[90%] py-2 px-4 rounded-2xl my-2 inline-block'>
                <p>Hi, how are you all?</p>
              </div>
              <br />
              <div className='bg-[#F7F5F4] max-w-[90%] py-2 px-4 rounded-2xl my-2 inline-block'>
                <p>How many of you prepared the presentation?</p>
              </div>
            </div>
          </div>
        </div>

        {/* chat 2 */}
        <div className='flex flex-row my-5'>
          <div>
            <img
              src={f8}
              alt={"f8"}
            />
          </div>

          <div className='flex flex-col ml-5'>
            <div>
              <span className='chat-name-head'>Rockstar Benj</span>
              <span className='chat-date ml-2'>09:31 pm</span>
            </div>
            <div className=''>
              <div className='bg-[#F7F5F4] max-w-[90%] py-2 px-4 rounded-2xl my-2 inline-block'>
                <p>Hello Mojixa! I am just about to start the prepration.</p>
              </div>
            </div>
          </div>
        </div>

        {/* time */}
        <div className='flex justify-center my-3'>
          <div className=''>
            <span className='date-style'>Today</span>
          </div>
        </div>

        {/* chat 3 */}
        <div className='flex flex-row my-5'>
          <div>
            <img
              src={f4}
              alt={"f4"}
              className='w-24'
            />
          </div>

          <div className='flex flex-col ml-5'>
            <div>
              <span className='chat-name-head'>Lorel morph</span>
              <span className='chat-date ml-2'>09:20 am</span>
            </div>
            <div className=''>
              <div className='bg-[#F7F5F4] max-w-[90%] py-2 px-4 rounded-2xl my-2 inline-block'>
                <p>
                Appologise guys i will not be able to contribute in
                presentation as i am having fever since 2 days.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* chat 4 */}
        <div className='flex flex-row my-5'>
          <div>
            <img
              src={f6}
              alt={"f6"}
            />
          </div>

          <div className='flex flex-col ml-5'>
            <div>
              <span className='chat-name-head'>Mojixa Tan</span>
              <span className='chat-date ml-2'>10:45 am</span>
            </div>
            <div className=''>
              <div className='bg-[#F7F5F4] max-w-[90%] py-2 px-4 rounded-2xl my-2 inline-block'>
                <p>No issue, take some rest.</p>
              </div>
              <br />
              <div className='bg-[#F7F5F4] max-w-[90%] py-2 px-4 rounded-2xl my-2 inline-block'>
                <p>What about others?</p>
              </div>
            </div>
          </div>
        </div>

        {/* chat 5 */}
        <div className='flex flex-row-reverse my-5'>
          <div>
            <img
              src={f1}
              alt={"f1"}
            />
          </div>

          <div className='flex flex-col mr-5'>
            <div className='flex flex-row-reverse'>
              <span className='chat-date ml-2'>10:45 am</span>
              <span className='chat-name-head'>You</span>
            </div>
            <div className=''>
              <div className='bg-[#FF731D] max-w-[100%] py-2 px-4 rounded-2xl my-2 inline-block'>
                <p className='text-white'>I just completed it last night.</p>
              </div>
            </div>
          </div>
        </div>

        {/* chat typing 1 */}
        <div className='flex flex-row items-center my-5'>
          <div>
            <img
              src={f9}
              alt={"f9"}
              className='w-8'
            />
          </div>
          <div className='ml-3'>
            <span className='chat-name-head'>Max Hob</span>
            <span className='chat-date ml-2'>is typing...</span>
          </div>
          
        </div>
      </div>
      
      <div className='flex mx-20 py-5'>
        
        <div className='flex flex-row justify-between items-center'>
          <div className='flex flex-row items-center w-72'>
            <div>
              <img
                src={typingIcon}
                alt={"typingIcon"}
              />
            </div>
            <div className='ml-2'>
              <span className='chat-date'>
                Your message...
              </span>
            </div>
          </div>

          <div className='flex flex-row'>
            <div className='mr-3'>
              <img
                src={micIcon}
                alt={"micIcon"}
              />
            </div>
            <div className='mr-3'>
              <img
                src={pictureIcon}
                alt={"pictureIcon"}
              />
            </div>
            <div className='mr-5'>
              <img
                src={attachmentIcon}
                alt={"attachmentIcon"}
              />
            </div>
            <div>
              <img
                src={arrowIcon}
                alt={"arrowIcon"}
              />
            </div>
          </div>
          
        </div>
      
      </div>


    </div>
  )
}

export default Chat