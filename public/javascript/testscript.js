var Hello = React.createClass({
    render: function(){
        //The second parameter is where you put in properties of the first parameter
        return React.createElement('h1', null, 'Hello ' + this.props.name);
    }
});

var elt = React.createElement(Hello, {
    name: 'IDM!!',
    link: '//nyu.edu'
});

//Render the class and the elements
ReactDOM.render(elt, document.getElementById('app'));