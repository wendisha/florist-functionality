import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Geolocate from '../components/Geolocate'

class BrowseFloristsForm extends React.Component {
    state = {
        zipcode: ''
    }

    handleSubmit = event => {
        console.log(this.state.zipcode)
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
            <Container style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>                       
                        <input type="text" className="border border-dark" placeholder="Browse by zipcode" name="zipcode" onChange={this.onChange} />        
                        <Geolocate fetchYelpApi={this.props.fetchYelpApi}/>
                    </Form.Group>  
                    <Button variant="warning" className='btn-md round' type="submit" value="Browse">Browse</Button>             
                </Form>
            </Container>
        )   
    }   
}

export default BrowseFloristsForm