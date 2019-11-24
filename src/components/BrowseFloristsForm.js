import React from 'react'

class BrowseFloristsForm extends React.Component {
    state = {
        zipcode: ''
    }
    // initialState = {
    //     zipcode: ''
    // };

    // constructor() {
    //     super()
    //     this.state = {zipcode: ''};
    // }

    // reset() {
    //     this.setState({
    //     zipcode: ''
    // });
    // }
    
    handleSubmit = event => {
        event.preventDefault()
        this.props.fetchYelpApi(this.state.zipcode)  
        this.setState({
            zipcode: ''
        })
    }

    //Update state as user enters zipcode in the form:
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input placeholder="Browse florists by zipcode" type="text" name="zipcode" onChange={this.onChange}/>
                    <input type="submit" value="Browse"/>
                </div>
            </form>
        )   
    }   
}

export default BrowseFloristsForm