import React from 'react';
import {toast} from "react-toastify";

function AddPost(props) {
    function addPost(e) {
        e.preventDefault();
        const post = {
            title: e.target.title.value,
            body: e.target.body.value,
        };
        if (post.title.trim().length > 0 && post.body.trim().length > 0) {
            toast.success('Muvaffaqqiyatli yuborildi !!!');
            e.target.reset()
        }

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
                                <textarea name="body"
                                          placeholder="add body"
                                          className='form-control my-3'
                                          rows="10"/>

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