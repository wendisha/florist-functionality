import React from 'react'
import ListFlorists from './ListFlorists';

class BrowseFloristsForm extends React.Component {
    state = {
        zipcode: ''
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.ListFlorists(this.state)  
    }

    //Update state as user enters zipcode in the form:
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
   
    render () {
        return (     
            <>  
            <form onSubmit={ this.handleSubmit }>
                <h3>Enter zipcode to browse florists:</h3>
                <div>
                    <input placeholder="zipcode" type="text" name="zipcode" onChange={this.onChange}/>
                    <input type="submit" value="Browse"/>
                </div>
            </form>
            <ListFlorists/>
            </>
        )   
    }   
}

export default BrowseFloristsForm