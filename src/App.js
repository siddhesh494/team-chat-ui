import './App.css';
import Chat from './Components/Chat/Chat';
import GroupDetails from './Components/GroupDetails/GroupDetails';
import Home from './Components/Home/Home';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="main">
      
      <div className='flex'>
        
        <div className='  w-[6%]'>
          <Sidebar />
        </div>

        <div className=' bg-[#F7F5F4] w-[28%]'>
          <Home />
        </div>

        <div className='border boder-black p-4 w-[38%]'>
          <Chat />
        </div>

        <div className='border boder-black w-[28%]'>
          <GroupDetails />
        </div>
        
      </div>
    </div>
  );
}

export default App;
