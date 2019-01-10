import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
import Nav from './nav';
import ImageUpload from './image_upload';

const App = () => (
    <div>
        <Nav/>
        <div className="container">
            <Route path="/" exact component={Home}/>
            <Route path="/image-upload" component={ImageUpload}/>
        </div>
    </div>
);

export default App;
