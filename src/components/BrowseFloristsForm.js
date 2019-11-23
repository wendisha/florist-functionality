import React from 'react'
// import ListFlorists from './ListFlorists';
// import FloristListContainer from '../container/FloristListContainer'

class BrowseFloristsForm extends React.Component {
    // state = {
    //     zipcode: ''
    // }


    constructor(props) {
        super(props)
        this.state = {
          zipcode: ""
        }
      }
    
    //   handleSubmit = (e) => {
    //     e.preventDefault()
    //     this.props.fetch(this.state.query)
    //   }


    handleSubmit = event => {
        // console.log(this.state.zipcode);
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
            <>  
            <form onSubmit={ this.handleSubmit }>
                <h3>Enter zipcode to browse florists:</h3>
                <div>
                    <input placeholder="zipcode" type="text" name="zipcode" onChange={this.onChange}/>
                    <input type="submit" value="Browse"/>
                </div>
            </form>
            {/* <ListFlorists/> */}
            </>
        )   
    }   
}

export default BrowseFloristsForm