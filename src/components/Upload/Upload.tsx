import React, { ChangeEvent,  useRef, useState } from "react";
import axios from "axios";
import UploadList from "./UploadList";
import Dragger from "./Dragger";

export type UploadFileStatus = "success" | "error" | "ready" | "uploading";
export interface UploadFile {
  uid: string;
  size: number;
  name: string;
  status?: UploadFileStatus;
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
}

export interface UploadProps {
  /**必选参数，上传的地址 */
  action: string;
  /**默认上传列表 */
  defaultFileList?: UploadFile[];
  /**列表项移除时调用的钩子函数 */
  onRemove?: (file: UploadFile) => void;
  //生命周期
  /**在上传之前触发的钩子函数，若返回值为false则停止上传，为Promise则上传.then返回的文件 */
  beforeUpload?: (file: File) => boolean | Promise<File>;
  /**文件状态改变时的钩子，上传成功或者失败时都会被调用	 */
  onChange?: (file: UploadFile) => void;
  /**文件上传时的钩子 */
  onProgress?: (percentage: number, file: UploadFile) => void;
  /**文件上传成功时的钩子 */
  onSuccess?: (data: any, file: UploadFile) => void;
  /**文件上传失败时的钩子 */
  onError?: (err: any, file: UploadFile) => void;
  /**设置请求头 */
  header?: { [key: string]: any };
  /**上传文件的字段名 */
  name?: string;
  /**上传时附带的额外参数 */
  data?: { [key: string]: any };
  /**支持发送 cookie 凭证信息 */
  withCredentials?: boolean;
  /**可选参数, 接受上传的文件类型 */
  accept?: string;
  /**是否支持多选文件 */
  multiple?: boolean;
  /**是否支持拖拽上传 */
  drag?: boolean;
  /** */
  children?: React.ReactNode;
}
const Upload: React.FC<UploadProps> = (props) => {
  const {
    action,
    defaultFileList,
    onRemove,
    onProgress,
    onSuccess,
    onError,
    beforeUpload,
    onChange,
    header = {},
    name,
    data,
    withCredentials,
    accept,
    multiple,
    drag,
    children,
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploadList, setUploadList] = useState<UploadFile[]>(
    defaultFileList || []
  );

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      return;
    }
    uploadFiles(files);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };
  const uploadFiles = (files: FileList) => {
    let postFiles = Array.from(files);

    postFiles.forEach((file) => {
      if (!beforeUpload) post(file);
      else {
        const result = beforeUpload(file);
        if (result && result instanceof Promise) {
          result.then((res) => {
            post(res);
          });
        } else if (result) {
          post(file);
        }
      }
    });
  };
  const updateFileList = (
    updateFile: UploadFile,
    updateObj: Partial<UploadFile>
  ) => {
    setUploadList((preFileList) => {
      return preFileList.map((file) => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj };
        } else return file;
      });
    });
  };
  const post = (file: File) => {
    let _file: UploadFile = {
      uid: Date.now() + "upload-file",
      status: "ready",
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file,
    };
    setUploadList((prevList) => {
      return [_file, ...prevList];
    });
    // setUploadList([_file, ...uploadList]);
    const formData = new FormData();
    formData.append(name || file.name, file);
    data &&
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });
    axios
      .post(action, formData, {
        headers: {
          ...header,
          "Content-Type": "multipart/Form-data",
        },
        withCredentials,
        onUploadProgress: (e) => {
          e.total = e.total ? e.total : 1;
          let percentage = Math.round((e.loaded * 100) / e.total) || 0;
          if (percentage < 100) {
            updateFileList(_file, { percent: percentage, status: "uploading" });

            if (onProgress) {
              onProgress(percentage, _file);
            }
          }
        },
      })
      .then((res) => {
        updateFileList(_file, { status: "success", response: res });
        if (onChange) {
          onChange(_file);
        }
        if (onSuccess) {
          onSuccess(res.data, _file);
        }
      })
      .catch((err) => {
        updateFileList(_file, { status: "error", error: err });
        if (onChange) {
          onChange(_file);
        }
        if (onError) {
          onError(err, _file);
        }
      });
  };
  const handleRemove = (file: UploadFile) => {
    setUploadList((prevList) => {
      return prevList.filter((item) => item.uid !== file.uid);
    });
    onRemove && onRemove(file);
  };
  return (
    <div className="mg-upload-component">
      {/* <Button btnType="primary" >
        上传文件
      </Button> */}
      <div
        className="mg-upload-input"
        style={{ display: "inline-block" }}
        onClick={() => handleClick()}
      >
        {drag ? <Dragger onFile={(files) => {
          uploadFiles(files)
        }}>{children}</Dragger> : children}
        <input
          ref={inputRef}
          className="mg-file-input"
          style={{ display: "none" }}
          type="file"
          onChange={(e) => handleFileChange(e)}
          accept={accept}
          multiple={multiple}
        />
      </div>

      <UploadList fileList={uploadList} onRemove={handleRemove}></UploadList>
    </div>
  );
};
export default Upload;
