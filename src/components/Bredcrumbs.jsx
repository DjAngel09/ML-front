import React from 'react'

export const Bredcrumbs = ({ categories }) => {

    return (
        <nav className='nav pt-16 pb-16 ' aria-label="breadcrumb">
            <ol className="breadcrumb">

                {
                    categories.map(categorie => 
                        <li key={categorie.id} className="breadcrumb-item">{categorie.name}</li>
                    )
                }
            
            </ol>
        </nav>
    )
}
