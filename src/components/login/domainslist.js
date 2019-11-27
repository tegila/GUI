import React, { Component } from "react";
import './login.css';
import {Switch,Route} from 'react-router-dom';

class List extends Component {
    render() {
        return (
            <div>
                <ul class="list-group">
                    <li class="list-group-item list-group-item-primary">Domínio</li>
                </ul>
            </div>
        );
    }
}

export default List;