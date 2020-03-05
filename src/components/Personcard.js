import React, { Component } from 'react';
class SomeClassComponent extends Component {
    render() {
    const {firstName, lastName, Age, hair} = this.props;
        return   (<div>
                <h1>  {lastName}, {firstName}</h1>
                <p>Age: {Age}</p>
                <p>Hair Color: {hair}</p>
            </div>
        );;
    }
}
export default SomeClassComponent;