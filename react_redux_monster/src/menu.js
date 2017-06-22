import React, { Component } from 'react';
import { Link } from 'react-router';

class Menus extends Component {
    render(){
        return (
            <div>
                <Link to="/">Tracks</Link>
                <Link to="/about">About</Link>
            </div>
        )
    }
}

export default Menus;