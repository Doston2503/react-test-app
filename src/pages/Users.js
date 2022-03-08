import React, {useEffect, useReducer} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import {getUserImg} from "../helper/getUserImg";

const initialState = {
    users: [],
    isLoading: false,
    error: null
};

function reducer(state, {type, payload}) {
    switch (type) {
        case 'FETCHING':
            return {
                ...state,
                users: payload
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

const Users = () => {

    const [userData, dispatch] = useReducer(reducer, initialState);

    const fetchUsers = async () => {
        try {
            dispatch({
                type: "LOADINGSTART",
            });
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
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
        fetchUsers()
    }, []);

    return (
        <div className="dashboard-page container">
            <h1>Post page</h1>
            <div className="row my-5">
                {
                    userData.isLoading &&
                    <span className="spinner-border text-dark"/>

                }
                {!userData.isLoading && userData.users.map(item => (
                    <div className="col-xl-4 my-3" key={item.id}>

                        <div className="border p-4 bg-white h-100 text-center">
                            <img className="user-image mb-3" src={getUserImg(item.id)} alt={item.id}/>
                            <h4>{item.id}.{item.name}</h4>
                            <h6>{item.email}</h6>
                            <h5>
                                <Link
                                    className="nav-link"
                                    to={'/users/' + item.id}>
                                    ...posts
                                </Link>
                            </h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Users;