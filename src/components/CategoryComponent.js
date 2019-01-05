import React from 'react';

const categories = ['business', 'entertainment', 'general' ,'health', 'science', 'sports' ,'technology'];

function Categories(props) {
    const categoryItems = categories.map((category, index) => {
        let activeClass = (props.selected.toLowerCase() === category) ? 'active': null;
        return( 
            <li onClick={props.onClick} key={index} className={activeClass}>{category}</li>
        );
    });
    return (
        <div className={`category ${props.isMenuOpen? 'open': 'close'}`} >
            <ul>
                {categoryItems}
            </ul>
        </div>
    )
};

export default Categories;