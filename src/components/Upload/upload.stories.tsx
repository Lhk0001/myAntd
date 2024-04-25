import Upload, { UploadFile } from "./Upload";
import {ComponentMeta, ComponentStory} from '@storybook/react'
const uploadMeta:ComponentMeta<typeof Upload>={
    title:'Upload',
    id:'upload',
    component:Upload,
    tags: ['autodocs'],
}
export default uploadMeta
const Template:ComponentStory<typeof Upload>=(args)=>(
    <Upload {...args}></Upload>
)
export const defaultUpload=Template.bind({})
defaultUpload.storyName='defalutUpload'
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
defaultUpload.args={
    //https://jsonplaceholder.typicode.com/posts
    action:'https://jsonplaceholder.typicode.com/posts',
    onSuccess:function(data, file) {
        console.log('data',data);
        console.log('file',file);
    },
    onError(){
        console.log('error');
        
    },
    defaultFileList:defaultUploadList,
    // beforeUpload:(file)=>checkFileSize(file),
    onChange(file){
        console.log('change',file);
    },
    header:{
        'kkk':"dadw"
    },
    accept:'.jpg',
    multiple:true,
    onRemove:(item)=>{
        console.log(item);
        
    }
}