import React, { Component } from 'react';
import BrowseFloristsForm from '../components/BrowseFloristsForm'
import ListFlorists from '../components/ListFlorists'
import NavBar from '../components/NavBar'

class FloristListContainer extends Component {
    state = {
        floristsList : []
    }

    //Make fetching function available as props
    componentDidMount() {
        this.fetchYelpApi()
    }

    //Async funct to fetch data from Yelp Fusion by zipcode
    fetchYelpApi = (zipcode) => {
        const  url = `https://api.yelp.com/v3/businesses/search?term=florist&location=${zipcode}&limit=20`
        const proxyurl = "https://cors-anywhere.herokuapp.com/"
        fetch(proxyurl + url, {
                method: 'GET',
                headers: {
                  'Accept': 'application/json',
                  'Authorization': process.env.REACT_APP_YELP_API_KEY,
                  'Content-Type': 'application/json'
                  }
                }
            )
        .then(resp => resp.json())
        .then((data) => {
            let florists = []
            data.businesses.map((florist) => (
                florists.push(florist)
            ))
            this.setState({
                floristsList : florists
            })
        })
    }

    //Async funct to fetch data from Yelp Fusion by location
    fetchGeoYelpApi = (latitude, longitude) => {
        const url = `https://api.yelp.com/v3/businesses/search?term=florist&latitude=${latitude}&longitude=${longitude}`
        const proxyurl = "https://cors-anywhere.herokuapp.com/"
        fetch(proxyurl + url, {
                method: 'GET',
                headers: {
                  'Accept': 'application/json',
                  'Authorization': process.env.REACT_APP_YELP_API_KEY,
                  'Content-Type': 'application/json'
                  }
                }
            )
        .then(resp => resp.json())
        .then((data) => {
            let florists = []
            data.businesses.map((florist) => (
                florists.push(florist)
            ))
            this.setState({
                floristsList : florists
            })
        })
    }

    render() {
        return ( 
            <div>
                <NavBar/>
                <BrowseFloristsForm fetchYelpApi={this.fetchYelpApi} fetchGeoYelpApi={this.fetchGeoYelpApi}/>
                <ListFlorists floristsList={this.state.floristsList}/>
            </div>
        )
    }
}

export default FloristListContainer;