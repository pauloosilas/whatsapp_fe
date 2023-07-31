import { FileViewer } from "./FileViewer"
import { HandleAndSend } from "./HandleAndSend"
import { Header } from "./Header"
import { Input } from "./Input"

export const FilesPreview = () => {
  return (
    <div className="relative py-2 w-full flex items-cente justify-center">
        {/* Container */}
        <div className="w-full flex flex-col items-center">
            {/* Header */}
            <Header />
            {/*Viewing selected file*/}
            <FileViewer />
            <div className="w-full flex flex-col items-center">
                {/*Message input*/}
                <Input />
                {/*Send and manipulate files*/}
                <HandleAndSend />
            </div>
        </div>
    </div>
  )
}
