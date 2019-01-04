import React from 'react';

const Newsitem = (props) => {
    let style = {
        backgroundImage: 'url(' + props.item.urlToImage + ')',
        width: '100%',
        paddingTop: '56.25%',
        height: 'auto',
        backgroundSize: 'cover'
    };
    return (
        <li className="item">                      
            <div className="item-image-wrapper">
                <div className="item-image" style={style}/>
            </div>
            <div className="item-info">
                <a href={props.item.url} className="item-link"><h2>{props.item.title? props.item.title: null}</h2></a>
                <p className="date">{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(props.item.publishedAt)))}</p>
                <p>{props.item.description}</p>
            </div>
        </li>
    );

}

export default Newsitem;