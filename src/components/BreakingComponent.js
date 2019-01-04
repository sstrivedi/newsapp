import React, { Component } from 'react';
import Newsitem from './NewsitemComponent';

const Breaking = (props) => {
    return (
        <div className="breaking-news">
            <h1>Breaking News</h1>
            <div className="breaking-news-content">
                <Newsitem item={[]} />
            </div>
        </div>
    );  
};

export default Breaking;