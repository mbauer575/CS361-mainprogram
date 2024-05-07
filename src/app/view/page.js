'use client'
import React, { useState, useEffect } from 'react';
import { Button, Tooltip, Whisper } from 'rsuite';
import './style.css';
import axios from 'axios';

function Page() {
    const [files, setFiles] = useState([]);
    const tooltip_delete = <Tooltip>WARNING DELETES FROM SERVER. NO UNDO.</Tooltip>;
    useEffect(() => {
        axios.get('http://localhost:5000/listfiles')
            .then(response => {
                setFiles(response.data.files);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);
    return (
        <div>
            <h2>Viewer</h2>
            <table>
                <thead>
                    <tr>
                        <th>File Name</th>
                        <th>Download</th>
                    </tr>
                </thead>
                <tbody>
                    {files.map((file, index) => (
                        <tr key={index}>
                            <td>{file}</td>
                            <td>
                                <Button
                                    href={`http://localhost:5000/download/${file}`}
                                    download
                                >
                                    Download
                                </Button>
                            </td>
                            <td>
                                <Whisper placement="top" controlId="control-id-hover" trigger="hover" speaker={tooltip_delete}>
                                    <Button
                                        href={`http://localhost:5000/delete/${file}`}
                                    >
                                        Delete
                                    </Button>
                                </Whisper>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Page;