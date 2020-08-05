import React from 'react';

class Greeting extends React.PureComponent {
    render() {
        return <p>Welcome to {this.props.name} Program</p>;
    }
}

export default Greeting;
