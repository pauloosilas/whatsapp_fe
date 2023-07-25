import React from 'react'
import {useSelector} from 'react-redux';
import { Conversation } from './Conversation';

export const Conversations = () => {
  const { conversations } = useSelector (state => state.chat)
  return (
    <div className='convos scrollbar'>
     <ul>
     {
        conversations && conversations.map((convo, i) => (
          <Conversation convo={convo} key={convo._id} />
        ))
      }
     </ul>
    </div>
  )
}