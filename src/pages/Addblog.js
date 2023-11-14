import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Stepper } from 'react-form-stepper';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';



const { Dragger } = Upload;
const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

const Addblog = () => {
    const [desc, setDesc] = useState("");

    const handleDesc = (e) => {
        setDesc(e);
    };

    return (
        <div>
            <h3 className="mb-4">Add Blog</h3>
            <Stepper
                steps={[{ label: 'Add Blog Details' }, { label: 'Upload Images' }, { label: 'Finish' }]}
                activeStep={2}
            />
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                    banned files.
                </p>
            </Dragger>

            <div className="">
                <form action="">
                    <div className="mt-4">
                        <CustomInput
                            type="text"
                            label="Enter Blog Title"
                            name="title"
                        />
                    </div>
                    <select
                        name="category"
                        className="form-control py-3 mt-3"
                        id=""
                    >
                        <option value="">Select Blog Category 1</option>
                        <option value="">Select Blog Category 2</option>
                        <option value="">Select Blog Category 3</option>
                        <option value="">Select Blog Category 4</option>
                        <option value="">Select Blog Category 5</option>
                    </select>
                    <ReactQuill
                        theme="snow"
                        className="mt-3"
                        name="description"
                        onChange={handleDesc}
                        value={desc}
                    />
                    <button
                        className="btn btn-success border-0 rounded-3 my-5"
                        type="submit"
                    >
                        Add Blog
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Addblog;
