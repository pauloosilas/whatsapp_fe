import React from 'react'
import {useSelector} from 'react-redux';
import  Conversation  from './Conversation';

export const Conversations = () => {
  const { conversations, activeConversations } = useSelector (state => state.chat)
  return (
    <div className='convos scrollbar'>
     <ul>
     {
        conversations && conversations
        .filter((c) => c.latestMessage || c._id===activeConversations)
        .map((convo, i) => (
          <Conversation convo={convo} key={convo._id} />
        ))
      }
     </ul>
    </div>
  )
}
