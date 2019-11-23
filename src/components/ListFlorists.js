import React from 'react'
import FloristCard from './FloristCard';

const ListFlorists = (props) => {
    const renderFloristsList = () => {
        const floristCards = props.floristsList.length > 0 ? props.floristsList.map(f => <FloristCard florist={f} key={f.id}/>) : null
        return (floristCards)
    }
    
    return (  
        <div>  
            <ul>
                {renderFloristsList()}
            </ul>
        </div> 
    )
}

export default ListFlorists