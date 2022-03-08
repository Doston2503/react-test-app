import React from 'react';
import {Link, Redirect, Route, Switch} from "react-router-dom";
import Users from "../../pages/Users";
import Posts from "../../pages/Posts";
import PostDetails from "../../pages/PostDetails";
import AddPost from "../../pages/addPost/AddPost";

const Layout = (props) => {
    return (
        <div className="dashboard-layout d-flex">
            <div className="dashboard-layout-left">
                <div>
                    <img src="/assets/icons/dashboard-logo.png" alt="dashboard-logo.svg"/>
                    <ul className="nav flex-column">
                        <li className="nav-item"><Link to="/users"
                                                       className={`nav-link ${props.history.location.pathname.includes('/users') ? 'active' : ''}`}><span
                            className="icon icon-dashboard"/></Link></li>
                        <li className="nav-item"><Link to="/addPost"
                                                       className={`nav-link ${props.history.location.pathname.includes('/addPost') ? 'active' : ''}`}><span
                            className="icon icon-users"/></Link></li>
                    </ul>
                </div>
                <div className="user-image flex-shrink-0 mt-3">
                    <img src="/assets/images/user.png" alt="user.png"/>
                </div>
            </div>
            <div className="dashboard-layout-right">
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/users"/>
                    </Route>
                    <Route exact path="/users" component={Users}/>
                    <Route exact path="/users/:userId" component={Posts}/>
                    <Route exact path="/users/:userId/:postId" component={PostDetails}/>
                    <Route exact path="/addPost" component={AddPost}/>
                    <Route exact path="*">
                        <Redirect to="/users"/>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Layout;