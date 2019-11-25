import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Geolocate from '../components/Geolocate'

class BrowseFloristsForm extends React.Component {
    //Set initialState
    state = {
        zipcode: ''
    }

    //Handle form submision by fetching from extenal API
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
            <>
            <Container style={{ paddingTop: '30px'}}><h1>Find a florist near you.</h1></Container>
            <Container style={{ display: "flex", justifyContent: "left", alignItems: "center" }}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>                       
                        <input type="text" className="border border-dark" placeholder="Browse by zipcode" name="zipcode" onChange={this.onChange} required />        
                        <Geolocate fetchYelpApi={this.props.fetchYelpApi}/>
                    </Form.Group>  
                    <Button variant="warning" className='btn-md round browse' type="submit" value="Browse">Browse</Button>             
                </Form>
            </Container>
            </>
        )   
    }   
}

export default BrowseFloristsForm