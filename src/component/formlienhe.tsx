'use client'
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import axios from "axios";
import React, { useState } from "react";
import { Stack } from "react-bootstrap";
function Formlienhe() {
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("");

    async function onSubmitdata(event: any) {
        event.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", "content");
        setLoading(true);
        try {
            const response = await axios.post("api/lienhe", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            if (response.data.status === 1) {
                //  setStatus("Gửi thành công");
                setStatus(response.data.title);
            } else {
                setStatus("Gửi thất bại");
            }
        } catch (error) {
            setStatus("Gửi thất bại");
        }
        setLoading(false); // Đặt loading thành false sau khi request hoàn thành
    }
    return (
        <>

            <form onSubmit={onSubmitdata}>
                <Stack gap={3}>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Tiêu đề</label>
                        <input
                            type="text"
                            onChange={(event) => {
                                setTitle(event.target.value);
                            }}
                            value={title}
                            className="form-control"
                            id="formGroupExampleInput"
                            placeholder="Title"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Nội dung</label>
                        <CKEditor
                            editor={ClassicEditor}
                            data="<p>Hello from CKEditor&nbsp;5!</p>"
                            onReady={editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log('Editor is ready to use!', editor);
                            }}
                            onChange={(event) => {
                                console.log(event);
                            }}
                            onBlur={(event, editor) => {
                                console.log('Blur.', editor);
                            }}
                            onFocus={(event, editor) => {
                                console.log('Focus.', editor);
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </Stack>
            </form>
        </>
    );
};

export default Formlienhe;
