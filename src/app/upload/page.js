"use client"
import React, { useState } from 'react';
import { Uploader, Button, Whisper, Tooltip } from 'rsuite';

function Page() {
    const tooltip_delete = <Tooltip>Deletes files in queue. Files that have already been saved are safe.</Tooltip>;
    const [fileList, setFileList] = React.useState([]);
    const uploader = React.useRef();





    return (
        <div>
            <h2>Upload</h2>
            <Whisper placement='right' trigger={'click'} speaker={<Tooltip>To get started, upload a file using the uploader below. You can upload as many files at a time as you want. when you are done uploading check the queue to make sure you are only uploading files you want to save. Then press "start upload". To view previously uploaded files, check out the view page! Pro Tips: You can delete items from the queue using the x buttons on the right side of each upload. Using the "clear" button will clear the queue. </Tooltip>}>
                <Button>Help!</Button>
            </Whisper>
            <Uploader
                draggable
                multiple={true}
                fileList={fileList}
                autoUpload={false}
                action="//localhost:5000/upload"
                onChange={setFileList}
                ref={uploader}
            >
                <div style={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span>Click Here or Drag files to this area to upload</span>
                </div>
            </Uploader>
            <hr />
            <Button
                disabled={!fileList.length}
                onClick={() => {
                    uploader.current.start();
                }}
            >
                Start Upload
            </Button>
            <Whisper placement="top" controlId="control-id-hover" trigger="hover" speaker={tooltip_delete}>
                <Button href='/upload'>Clear</Button>
            </Whisper>
        </div>
    );
}

export default Page;