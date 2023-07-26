import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Sidebar } from '../components/sidebar/'
import { getConversations } from '../features/chatSlice';

export default function Home() {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.user);

  //Get Conversations
  useEffect(() => {
    if(user?.token){
      dispatch(getConversations(user.token));
    }
  }, [user]);

  
  return (
   <div className="h-screen dark:bg-dark_bg_1 flex items-center justify-center py-[19px] overflow-hidden">
      <div className="container h-screen flex">
        <Sidebar />
      </div>
   </div> 
  )
}
