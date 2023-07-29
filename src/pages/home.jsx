import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SocketContext from '../context/SocketContext';
import { ChatContainer, WhatsappHome } from '../components/chat';
import { Sidebar } from '../components/sidebar/'
import { getConversations } from '../features/chatSlice';

function Home({socket}) {
 
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.user);
  const { activeConversation } = useSelector((state) => state.chat);

  //join user into the socket io
  useEffect(() => {
    socket.emit("join", user._id)
  }, [user])

  //Get Conversations
  useEffect(() => {
    if(user?.token){
      dispatch(getConversations(user.token));
    }
  }, [user]);

  
  return (
   <div className="h-screen dark:bg-dark_bg_1 flex items-center justify-center overflow-hidden">
      <div className="container h-screen flex">
        <Sidebar />
        {
          activeConversation._id ? <ChatContainer /> :
          <WhatsappHome />
        }
      </div>
   </div> 
  )
}

const HomeWithSocket=(props) => (
  <SocketContext.Consumer>
    {(socket) => <Home {...props} socket={socket} />}
  </SocketContext.Consumer>
);

export default HomeWithSocket;