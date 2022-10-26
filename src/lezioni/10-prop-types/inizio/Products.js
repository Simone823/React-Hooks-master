import React from 'react'

function Products ({image, name, price, defaultImage}) {
    // img
    const img = image && image.url 

    return (
        <div>
            <div className="item shadow">
                <div className='card-body'>
                    <img className='card-img-top' src={img || defaultImage} alt={name}/>
                    <h4>{name}</h4>
                    <p>{price}</p>
                </div>
            </div>
        </div>
    )
}

export default Products;