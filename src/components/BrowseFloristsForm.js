import React from 'react'
import Geolocate from './Geolocate'

class BrowseFloristsForm extends React.Component {
    state = {
        zipcode: '',
        latitude: '',
        longitude: ''
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

    handleClick = (event) => {
        event.preventDefault()
        this.props.fetchYelpApi(this.state.latitude, this.state.longitude)
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
            <button onSubmit={ this.handleClick }>Browse based on my location</button>
            </>
        )   
    }   
}

export default BrowseFloristsForm