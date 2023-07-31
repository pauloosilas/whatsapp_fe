import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getConversationMessages } from '../../features/chatSlice'
import { checkOnlineStatus, getConversationId } from '../../utils/chat'
import ChatActions from './actions/ChatActions'
import ChatHeader from './header/ChatHeader'
import ChatMessages from './messages/ChatMessages'
import { FilesPreview } from './preview/files/FilesPreview'

export const ChatContainer = ({ onlineUsers, typing }) => {

  const dispatch = useDispatch();
  const { activeConversation, files } = useSelector((state) => state.chat)
  const { user } = useSelector((state) => state.user)
  const { token } = user;

  const values = {
    token,
    convo_id: activeConversation?._id
  }

  useEffect(() => {
    if(activeConversation?._id){
      dispatch(getConversationMessages(values))
    }
  }, [activeConversation])
 
  return (
    <div className="relative w-full h-full border-l 
                    dark:border-l-dark_border_2 select-none 
                    overflow-hidden">
      {/*Container*/}
      <div>
        {/*Chat header*/}
        <ChatHeader online={ checkOnlineStatus(onlineUsers, user, activeConversation.users)}/>
      {
        files.length > 0 
        ?  ( <FilesPreview />)
        :(
          <>
            {/*Chat messages*/}
            <ChatMessages  typing={typing}/>
            {/* Chat actions */}
            <ChatActions />
        </>
        ) 
      }
      </div>
    </div>
  )
}
