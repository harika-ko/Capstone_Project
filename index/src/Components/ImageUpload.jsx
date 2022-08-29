import React, { useState } from "react";
import { storage } from '../fire';

export default function ImageUpload() {
    const [file, setFile] = useState(null);
    const [url, setURL] = useState("");

    const FormHandler = (e) => {
        e.preventDefault();
        const file = e.target[0].files[0];
        uploadFiles(file);
    }

    const uploadFiles = (file) => {
        const uploadTask = storage.ref(`files/${file.name}`).put(file);
        uploadTask.on('state_changed', snapshot => {

        },
            (error) => console.log(error),
            () => {
                storage.ref("files")
                    .child(file.name)
                    .getDownloadURL()
                    .then((url) => {
                        console.log(url);
                    })
            }

        )
    }

    return (
        <div>
            <form onSubmit={FormHandler}>
                <input type="file" className="input" />
                <button type="submit">upload</button>
            </form>
        </div>
    );
}