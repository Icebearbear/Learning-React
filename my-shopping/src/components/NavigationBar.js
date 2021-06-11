import{ React, useState, useEffect} from 'react';
import {
    Route,
    NavLink,
    HashRouter,
    Link
} from "react-router-dom"
import Input from './Input';
import ViewTodo from './ViewTodo';
import Home from './Home'
const NavigationBar = () => {
        return(    
            <HashRouter>
            <nav class="navbar-is-transparent">
                <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div id="navbarExampleTransparentExample" class="navbar-menu">
                    <div class="navbar-start">
                        <NavLink to="./viewTodo">
                            <a class="navbar-item">
                                All Tasks
                            </a>
                        </NavLink>
                    </div>
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="field is-grouped">
                            <p class="control">
                                <div class="navbar-end">
                                    <div class="navbar-item">
                                        <NavLink to="/addTodo">
                                            <a class="button is-link is-outlined">+</a>
                                        </NavLink>
                                    </div>
                                </div>
                            </p>
                            <p class="control">    
                                <div class="navbar-end">
                                    <div class="navbar-item">
                                        {/* <NavLink to="/"> */}
                                            <a class="button is-primary is-outlined">Search</a>
                                        {/* </NavLink> */}
                                    </div>
                                </div>
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>    
            <div class="content">
                <Route exact path="/" component={Home}/>
                <Route path="/addTodo" component={Input}/>
                <Route path="/viewTodo"  component={ViewTodo}/>
            </div>
            </HashRouter>   
        )
    }

export default NavigationBar