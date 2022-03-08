import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Layout from "./component/layout/Layout";
import { ToastContainer } from 'react-toastify';
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>

                    <Route path="/" render={(props) => <Layout {...props} />}/>

                </Switch>
                <ToastContainer />
            </BrowserRouter>
        );
    }
}

export default App;