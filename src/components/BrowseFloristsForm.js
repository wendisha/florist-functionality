import React from 'react'

const initialState = {
    zipcode: ''
};

class BrowseFloristsForm extends React.Component {
    // state = {
    //     zipcode: ''
    // }

    constructor() {
        super()
        this.state = initialState;
    }
    reset() {
        this.setState(initialState);
    }
 
    handleSubmit = event => {
        event.preventDefault()
        this.props.fetchYelpApi(this.state.zipcode)  
    }

    //Update state as user enters zipcode in the form:
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render () {
        return (
            <form onSubmit={ this.handleSubmit }>
                <div>
                    <input placeholder="Browse florists by zipcode" type="text" name="zipcode" onChange={this.onChange}/>
                    <input type="submit" value="Browse"/>
                </div>
            </form>
        )   
    }   
}

export default BrowseFloristsForm