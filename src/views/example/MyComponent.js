import React from 'react';
import ChildComponent from './ChildComponent';

class MyComponent extends React.Component {

    state = {
        first_name: '',
        last_name: ''
    }

    handleSubmit = (event) => {
        alert("abc")
        event.preventDefault()
    }

    handleChangeFirstName = (event) => {
        this.setState({
            first_name: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            last_name: event.target.value
        })
    }

    render() {
        return (
            <>
                <ChildComponent />
            </>
        )
    }
}

export default MyComponent;