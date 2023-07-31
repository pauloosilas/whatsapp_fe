import { useRef } from "react"
import { PhotoIcon } from "../../../../../svg"
import { useDispatch } from "react-redux"
import { addFiles } from "../../../../../features/chatSlice"
import { getFileType } from "../../../../../utils/file"

export const PhotoAttachments = () => {
    const dispatch = useDispatch()
    const inputRef = useRef(null)
    const imageHandler = (e) => {
        let files = Array.from(e.target.files)
        files.forEach((file) => {
            if(
                file.type !== "image/png" &&
                file.type !== "image/jpeg" &&
                file.type !== "image/gif" &&
                file.type !== "image/webp" &&
                file.type !== "video/mp4" &&
                file.type !== "video/mpeg" &&
                file.type !== "image/webm" &&
                file.type !== "image/webp"
                ){
                    files = files.filter((item) => item.name !== file.name)
                    return;
                }else if(file.size > 1021* 2024 * 5){
                    files = files.filter((item) => item.name !== file.name)
                    return;
                }else{
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = (e) => {
                        dispatch(
                            addFiles({file:file, fileData: e.target.result, type: getFileType(file.type) })
                        )
                    };
                }
        });
    }
  return (
    <li>
        <button type="button" className="bg-[#BF59CF] rounded-full"
                onClick={() => inputRef.current.click()}>
            <PhotoIcon />
            <input 
                    type="file" 
                     
                    multiple
                    hidden 
                    ref={inputRef}
                    accept="image/png, image/jpg, image/gif, image/webp, video/mp4, video/mpeg"
                    onChange={imageHandler}
                    />
        </button>
    </li>
  )
}
