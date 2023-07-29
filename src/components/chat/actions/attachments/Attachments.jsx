import { AttachmentIcon } from "../../../../svg"
import { Menu } from "./Menu"

export const Attachments = ({ showAttachments, setShowAttachments, setShowPicker }) => {
 
  return (
   <li className="relative">
      <button 
        className="btn"
        type="button"
        onClick={() => {
           setShowAttachments((prev) => !prev);
           setShowPicker(false);
          }}
        >
      <AttachmentIcon className={"dark:fill-dark_svg_1"} />
    </button>
    
    {/* Menu */}
    {
      showAttachments ? <Menu /> : null
    }


   </li>
   
  )
}
