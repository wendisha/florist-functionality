import React, { Component } from 'react';
import BrowseFloristsForm from '../components/BrowseFloristsForm'
import ListFlorists from '../components/ListFlorists'
import Geolocate from '../components/Geolocate';

class FloristListContainer extends Component {
    state = {
        floristsList : []
    }

    componentDidMount() {
        this.fetchYelpApi()
    }

    fetchYelpApi = (...args) => {
        let zipcode, latitude, longitude, url;
        if (args.length > 2) {
          [latitude, longitude] = args;
          url = `https://api.yelp.com/v3/businesses/search?term=florist&latitude=${latitude}&longitude=${longitude}`
        } else {
          [zipcode] = args;
          url = `https://api.yelp.com/v3/businesses/search?term=florist&location=${zipcode}&limit=20`
        }
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
                <Geolocate fetchYelpApi={this.fetchYelpApi}/>
                <BrowseFloristsForm fetchYelpApi={this.fetchYelpApi}/>
                <ListFlorists floristsList={this.state.floristsList}/>
            </div>
        )
    }
}

export default FloristListContainer;