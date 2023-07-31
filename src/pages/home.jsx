import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SocketContext from '../context/SocketContext';
import { ChatContainer, WhatsappHome } from '../components/chat';
import { Sidebar } from '../components/sidebar/'
import { getConversations, updateMessagesAndConversation } from '../features/chatSlice';

function Home({socket}) {
 
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.user);
  const { activeConversation } = useSelector((state) => state.chat);
  const [onlineUsers, setOnlineUsers] = useState([])
  const [typing, setTyping]=useState(false)
  
  //join user into the socket io
  useEffect(() => {
    socket.emit("join", user._id)
    //get online users
    socket.on("get-online-users", (users) => {
      console.log("Online Users ", users)
      setOnlineUsers(users)
    })
  }, [user])

  //Get Conversations
  useEffect(() => {
    if(user?.token){
      dispatch(getConversations(user.token));
    }
  }, [user]);

  //listening to received messages
  useEffect(() => {
    socket.on("receive message", (message) => {
          dispatch(updateMessagesAndConversation(message))    
    });

    socket.on("typing", (conversation) => setTyping(conversation));
    socket.on("stop typing", (conversation) => setTyping(false));
  }, [])
  //listening when a user is typing
  return (
   <div className="h-screen dark:bg-dark_bg_1 flex items-center justify-center overflow-hidden">
      <div className="container h-screen flex">
        <Sidebar onlineUsers= {onlineUsers} typing={typing}/>
        {
          activeConversation._id ? <ChatContainer onlineUsers={onlineUsers} typing={typing}/> :
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