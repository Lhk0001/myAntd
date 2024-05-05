import React from "react";
import { UploadFile } from "./Upload";
import Icon from "../Icon";
import Progress from "../Progress";

export interface UploadListProps {
  fileList: UploadFile[];
  onRemove: (_file: UploadFile) => void;
}

const UploadList: React.FC<UploadListProps> = (props) => {
  const { fileList, onRemove } = props;
  
  const renderList = () => {
    return (
      <>
        {fileList.map((item) => (
          <li className="mg-upload-list-item" key={item.uid}>
            <span className={`file-name file-name-${item.status}`}>
              <Icon icon="file-alt" theme="secondary" />
              {item.name}
            </span>
            <span className="file-status">
              {(item.status === "uploading" || item.status === "ready") && (
                <Icon icon="spinner" spin theme="primary" />
              )}
              {item.status === "success" && (
                <Icon icon="check-circle" theme="success" />
              )}
              {item.status === "error" && (
                <Icon icon="times-circle" theme="danger" />
              )}
            </span>
            <span className="file-actions">
              <Icon icon="times" onClick={() => { onRemove(item)}}/>
            </span>
            {item.status==='uploading'?<Progress percent={item.percent?item.percent:0}/>:null}
          </li>
        ))}
      </>
    );
  };
  return <ul className="mg-upload-list">{renderList()}</ul>;
};
export default UploadList;
