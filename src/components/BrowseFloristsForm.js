import React from 'react'

class BrowseFloristsForm extends React.Component {
    state = {
        zipcode: ''
    }

    // handleSubmit = event => {
    //     event.preventDefault()
    //     this.props.fetchSchools(this.state)  
    // }
   
    // onChange = (event) => {
    //     this.setState({
    //       [event.target.name]: event.target.value
    //     })
    // }
    render () {
        return (     
            <>  
            <form onSubmit={ this.handleSubmit }>
                <h3>Enter zipcode to browse florists:</h3>
                <div>
                    <input placeholder="zipcode" type="text" name="zipcode"/>
                    <input type="submit" value="Browse"/>
                </div>
            </form>
            {/* <ListSchools /> */}
            </>
        )   
    }   
}

export default BrowseFloristsForm