import React from 'react';

class ChildComponent extends React.Component {

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
                <form>

                    <label htmlFor="fname">First Name</label><br />
                    <input type="text" id="fname" value={this.state.first_name}
                        onChange={(event) => this.handleChangeFirstName(event)}
                        placeholder="Your name.." />
                    <br />

                    <label htmlFor="lname">Last Name</label><br />
                    <input type="text" id="lname" value={this.state.last_name}
                        onChange={(event) => this.handleChangeLastName(event)}
                        placeholder="Your last name.." />
                    <br />

                    <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)} />

                </form>
            </>
        )
    }
}

export default ChildComponent;