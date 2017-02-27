import React, { Component } from 'react';
import {Link} from 'react-router';


class Home extends Component {
    render(){
        return (<Link to={rootLocale + 'about'}>Go to About</Link>);
    }
}

export default Home