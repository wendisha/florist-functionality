import React from "react";
import { geolocated } from "react-geolocated";
import Button from 'react-bootstrap/Button';
 
class Geolocate extends React.Component {
    handleClick = (event) => {
        event.preventDefault()
        this.props.fetchYelpApi(this.props.coords.latitude, this.props.coords.longitude)
    }

    render() {
        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? ( 
            <Button variant="light"><img src='https://i.imgur.com/c86tlDi.jpg' onClick={ this.handleClick } /></Button> 
        ) : (
            <div>Getting the location data&hellip; </div>
        );
    }
}
 
export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Geolocate);