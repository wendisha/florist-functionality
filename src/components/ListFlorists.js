import React from 'react'
import FloristCard from './FloristCard';

const ListFlorists = (props) => {
    //Map through florist objects 
    const renderFloristsList = () => {
        const floristCards = props.floristsList.length > 0 ? props.floristsList.map(f => <FloristCard florist={f} key={f.id}/>) : null
        return (floristCards)
    }
    
    return ( 
        <div className="florist-container">
            <div className='row'>  
                {renderFloristsList()}
            </div> 
        </div> 
    )
}

export default ListFlorists