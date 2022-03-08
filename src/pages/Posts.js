import React, {useEffect, useReducer} from 'react';
import {Link, useParams} from 'react-router-dom'
import axios from "axios";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const initialState = {
    posts: [],
    isLoading: false,
    error: null
};

function reducer(state, {type, payload}) {
    switch (type) {
        case 'FETCHING':
            return {
                ...state,
                posts: payload
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
        default:
            return state
    }
}

function Posts(props) {

    const params = useParams();
    const [postsData, dispatch] = useReducer(reducer, initialState);
    let userId = params.userId;

    const fetchPosts = async () => {
        try {
            dispatch({
                type: "LOADINGSTART",
            });
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + userId);
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
        fetchPosts()
    }, []);
    return (
        <div className="container">
            {postsData.isLoading &&
            <span className="spinner-border text-dark"/>}

            {!postsData.isLoading &&
            <div className="row my-3">
                {postsData.posts.length > 0 && postsData.posts.map(item => (
                    <div className="col-xl-4 my-3" key={item.id}>
                        <div className="p-3 bg-white border h-100">
                            <h5>{item.id}.{item.title}</h5>

                            <ReactMarkdown children={item.body} remarkPlugins={[remarkGfm]} />

                            <Link to={'/users/' + userId + '/' + item.id}>
                                ...comments
                            </Link>
                        </div>
                    </div>
                ))}
                {postsData.posts.length <= 0 && <div>No data</div>}
            </div>
            }
        </div>
    );
}

export default Posts;