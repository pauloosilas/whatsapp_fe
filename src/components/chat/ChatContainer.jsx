import ChatHeader from './header/ChatHeader'
export const ChatContainer = () => {

  return (
    <div className="relative w-full h-full border-l 
                    dark:border-l-dark_border_2 select-none 
                    overflow-hidden">
      {/*Container*/}
      <div>
        {/*Chat header*/}
        <ChatHeader />
      </div>
    </div>
  )
}
