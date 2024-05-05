import classNames from "classnames";
import React, { useState ,DragEvent} from "react";

export interface DraggerProps {
  onFile: (files: FileList) => void;
  children?: React.ReactNode;
}
const Dragger: React.FC<DraggerProps> = (props) => {
    const {onFile,children}=props;
    const [dragOver,setDragOver]=useState(false)
    const classes=classNames('mg-uploader-dragger',{
        'is-dragover':dragOver
    })
    const handleDrag=(e:DragEvent<HTMLElement>,over:boolean)=>{
        e.preventDefault();
        setDragOver(over)
    }
    const handleDrop=(e:DragEvent<HTMLElement>)=>{
        e.preventDefault();
        setDragOver(false)
        onFile(e.dataTransfer.files)
        // console.log(e.dataTransfer.files);
        
    }
  return (
    <div
      className={classes}
      onDragOver={(e) => {
        handleDrag(e, true);
      }}
      onDragLeave={(e) => {
        handleDrag(e, false);
      }}
      onDrop={(e)=>{handleDrop(e)}}
    >
      {children}
    </div>
  );
};
export default Dragger;
