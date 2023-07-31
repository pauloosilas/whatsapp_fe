import React from 'react'
import {useSelector} from 'react-redux';
import { checkOnlineStatus, getConversationId } from '../../../utils/chat';
import  Conversation  from './Conversation';

export const Conversations = ({ onlineUsers, typing }) => {
  const { conversations, activeConversations } = useSelector (state => state.chat)
  const { user } = useSelector((state) => state.user)

  return (
    <div className='convos scrollbar'>
     <ul>
     {
        conversations && conversations
        .filter((c) => c.latestMessage || c._id===activeConversations)
        .map((convo, i) => {
           let check= checkOnlineStatus(onlineUsers, user, convo.users); 
         return <Conversation 
                    convo={convo} 
                    key={convo._id} 
                    online={check ? true : false }
                    typing={typing} />
        })
      }
     </ul>
    </div>
  )
}
