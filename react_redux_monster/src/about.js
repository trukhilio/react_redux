import React, { Component } from 'react';
import Menus from './menu';

class About extends Component {
    render(){
        return (
            <div>
                <Menus />
                <p>
                    This is the best music app
                </p>
            </div>
        )
    }
}

export default About;