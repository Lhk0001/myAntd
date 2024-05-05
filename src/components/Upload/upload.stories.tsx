import Button from "../Button/index";
import Upload, { UploadFile } from "./Upload";
import {ComponentMeta, ComponentStory} from '@storybook/react'
const uploadMeta:ComponentMeta<typeof Upload>={
    title:'Upload',
    id:'upload',
    component:Upload,
    tags: ['autodocs'],
}
const BASEURL='https://jsonplaceholder.typicode.com/posts';
export default uploadMeta
const Template:ComponentStory<typeof Upload>=(args)=>{
    return (
        <Upload {...args}></Upload>
    )
}
export const DefaultUpload=Template.bind({})
DefaultUpload.storyName='defalutUpload'
const defaultUploadList:UploadFile[]=[
    {uid:'123',size:1234,name:'hello.md',status:'uploading',percent:66},
    {uid:'124',size:1234,name:'aaaa.md',status:'error',percent:66},
    {uid:'125',size:1234,name:'bbbbb.md',status:'success',percent:66}
]

const checkFileSize=(file:File)=>{
    if(Math.round(file.size/1024)>50){
        alert('file too big')
        return false;
    }
    return true
}
DefaultUpload.args={
    action:BASEURL,
    children:(<Button btnType="primary">上传文件</Button>),
}
DefaultUpload.storyName='默认点击上传';

export const DragUpload=Template.bind({})
DragUpload.storyName='拖拽上传'
DragUpload.args={
    action:BASEURL,
    drag:true,
    children:(<div>拖拽至框内上传</div>)
}
export const DefaultListUpload=Template.bind({})
DefaultListUpload.storyName='默认上传列表'
DefaultListUpload.args={
    action:BASEURL,
    defaultFileList:defaultUploadList,
    children:(<Button btnType="primary">上传文件</Button>)
}
export const BeforUpload=Template.bind({})
BeforUpload.storyName='上传文件前校验文件大小'
BeforUpload.args={
    action:BASEURL,
    children:(<Button btnType="primary">上传文件</Button>),
    beforeUpload:(file)=>checkFileSize(file),
}
// defaultUpload.args={
//     //https://jsonplaceholder.typicode.com/posts
//     action:'https://jsonplaceholder.typicode.com/posts',
//     onSuccess:function(data, file) {
//         console.log('data',data);
//         console.log('file',file);
//     },
//     onError(){
//         console.log('error');
        
//     },
//     defaultFileList:defaultUploadList,
//     // beforeUpload:(file)=>checkFileSize(file),
//     onChange(file){
//         console.log('change',file);
//     },
//     header:{
//         'kkk':"dadw"
//     },
//     // accept:'.jpg',
//     multiple:true,
//     onRemove:(item)=>{
//         console.log(item);
        
//     },
//     drag:true,
//     children:(<Button btnType="primary">上传文件</Button>)
// }