import React, {useState} from 'react';
import {toast} from "react-toastify";
import md from './md';

import TextareaMarkdownEditor from "react-textarea-markdown-editor";
import axios from "axios";

function AddPost(props) {
    const [postBody, setPostBody] = useState('');

    const handleBody = (event) => {
        setPostBody(event);
    };

    function addPost(e) {
        e.preventDefault();
        const post = {
            title: e.target.title.value,
            body: postBody
        };

        if (post.title.trim().length > 0 && postBody.trim().length > 0) {
            toast.success('Muvaffaqqiyatli yuborildi !!!');
            addNewPost(post);
            e.target.reset();
            setPostBody('');
        }

    }

    async function addNewPost(newPost) {
        const res = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            post: newPost
        })
        console.log(res)
    }

    return (
        <div className='container'>
            <div className="row my-3">
                <div className="col-xl-4">
                    <div className="card">
                        <div className="card-header text-center">
                            <h4>add post</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={addPost}>
                                <input type="text"
                                       placeholder="add title"
                                       name='title'
                                       className='form-control my-3'
                                />


                                <TextareaMarkdownEditor
                                    value={postBody}
                                    onChange={handleBody}
                                    doParse={text => md.render(text)}/>
                                <button className="btn btn-dark d-block w-100 mt-4">
                                    add post
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddPost;