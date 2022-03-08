import React, {useEffect, useReducer} from 'react';
import axios from "axios";
import {useParams} from 'react-router-dom'
import {toast} from "react-toastify";

const initialState = {
    comments: [],
    isLoading: false,
    error: null,
    addComments: false
};

function reducer(state, {type, payload}) {
    switch (type) {
        case 'FETCHING':
            return {
                ...state,
                comments: payload
            };
        case 'LOADINGSTART':
            return {
                ...state,
                isLoading: true
            };
        case 'LOADINGFINISH':
            return {
                ...state,
                isLoading: false
            };
        case 'ERROR':
            return {
                ...state,
                error: payload
            };
        case 'OPENCOMMENT':
            return {
                ...state,
                addComments: !state.addComments
            };
        default:
            return state
    }
}

function PostDetails(props) {

    const params = useParams();

    const [commentsData, dispatch] = useReducer(reducer, initialState);
    let postId = params.postId;

    const fetchComents = async () => {
        try {
            dispatch({
                type: "LOADINGSTART",
            });
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + postId);
            dispatch({
                type: "FETCHING",
                payload: response.data
            });

        } catch (e) {
            dispatch({
                type: "ERROR",
                payload: e.message
            });
        }
        dispatch({
            type: "LOADINGFINISH",
        });

    };
    useEffect(() => {
        fetchComents()
    }, []);

    function openComment() {
        dispatch({
            type: 'OPENCOMMENT'
        })
    }
    function addComments(e) {
        e.preventDefault();
        const comment=e.target.comments.value;
        if (comment.trim().length>0){
            toast.success(comment);
            openComment()
        }

    }
    return (
        <div className="container">
            <button className="btn btn-dark my-3" onClick={openComment}>add comments</button>
            {
                commentsData.addComments &&
                <div className="row my-3">
                    <div className="col-xl-4">
                        <div className="card">
                            <form onSubmit={addComments}>
                            <textarea
                                placeholder="add comments"
                                className='form-control'
                                name="comments"
                                rows="10"/>
                                <button className="btn btn-outline-dark d-block w-100">
                                    add comments
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            }

            {commentsData.isLoading &&
            <span className="spinner-border text-dark"/>}

            {!commentsData.isLoading &&
            <div className="row my-3">

                {commentsData.comments.map(item => (
                    <div className="col-xl-4 my-3" key={item.id}>
                        <div className="p-3 bg-white border h-100">
                            <h5>{item.id}.{item.name}</h5>
                            <h6>Email: {item.email}</h6>
                            <p>{item.body}</p>

                        </div>
                    </div>
                ))}
            </div>
            }
        </div>
    );
}

export default PostDetails;