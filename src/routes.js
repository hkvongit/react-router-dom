import React from"react"
import {Route, IndexRoute} from "react-router"
import App from  "./App"
import Hompage from "./components/home/HomePage"
import AboutPage from "./components/about/AboutPage"

export default (
    <Route path="/" component ={App}>
        <IndexRoute component ={Homepage}/>
        <Route path ="about" component={AboutPage}/>
    </Route>
)