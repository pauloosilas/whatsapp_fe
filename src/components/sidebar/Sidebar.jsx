import { useState } from "react"
import { Conversations } from "./conversations"
import { SidebarHeader } from "./header/SidebarHeader"
import { Notifications } from "./notifications"
import { Search } from "./search"

export const Sidebar = () => {
    const [searchResults, setSearchResults] = useState([])
  return (
   <div className="w-[40%] h-full select-none">
        <SidebarHeader />
        <Notifications />
        <Search searchLength={searchResults.length}/>
        <Conversations />
   </div>
  )
}
