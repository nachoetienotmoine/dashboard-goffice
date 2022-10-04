import React from 'react';
import PropTypes from 'prop-types';

function smallCard(props){
    return(
        <div className="smallcards">
            <div>
                <div className="Product">
                    <div className="Product">
                        <div className="Product">
                            <div className="" ></div>
                            <div>

                            </div>
                        </div>
                        <div className="Titulo">
                            <p>Total Users</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

/* DEFINICIÓN DE PROPIEDADES POR DEFAULT */

smallCard.defaultProps = {
    title: 'No Title',
    color: 'success',
    cuantity: 'No cuatity',
    icon: 'fa-clipboard-list'
}

/* PROPTYPES */

smallCard.propTypes = {
    atritutes: PropTypes.shape({
        title: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        cuantity: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        icon: PropTypes.string.isRequired
    })
}



export default smallCard;