'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

var MyComponent = React.createClass({
    render: function(){
        return (
            <h1>Hi {this.props.name} </h1>
        );
    }
});

ReactDOM.render(<MyComponent name="jason"/>, document.getEementById('app'));