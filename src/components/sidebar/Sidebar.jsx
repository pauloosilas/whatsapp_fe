import { useState } from "react"
import { Conversations } from "./conversations"
import { SidebarHeader } from "./header/SidebarHeader"
import { Notifications } from "./notifications"
import { Search, SearchResults } from "./search"

export const Sidebar = () => {
    const [searchResults, setSearchResults] = useState([])
    console.log(searchResults)
  return (
   <div className="flex0030 max-w-[40%] h-full select-none">
        <SidebarHeader />
        <Notifications />
        <Search 
            searchLength={searchResults.length}
            setSearchResults = {setSearchResults}/>
        {
          searchResults.length > 0 ? (
          <>
            <SearchResults searchResults={searchResults} setSearchResults={setSearchResults}/>
          </>
          ):(
            <Conversations />
          )
        }
   </div>
  )
}
