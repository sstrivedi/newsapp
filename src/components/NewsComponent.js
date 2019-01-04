import React, {Component} from 'react';
import Category from './CategoryComponent';
import Newsitem from './NewsitemComponent';
import Footer from './FooterComponent';

const URL = 'https://newsapi.org/v2/top-headlines?';
const APIKEY = '25e64f4712064585b7baa3b0fc3cd9e5';
const COUNTRY = 'us';

class News extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoading: false,
            items: [],
            selectedCategory: 'general',
            page: 0,
            active: null
        }
        //this.onCategorySelected = this.onCategorySelected.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});
        this.request();
        console.log('component did mount', this.state.selectedCategory);
    }

    request(selectedCategory='general') {
        let category = '&category=' + selectedCategory.toLocaleLowerCase();
        fetch(URL+'country=' + COUNTRY + '&apikey=' + APIKEY+ '&page=1'+ category)
        .then(response => response.json())
        .then(data => this.setState({ 
            items: data.articles
        }))
    }

    onCategorySelected(e) {
        if(e.target.outerText !== this.state.selectedCategory) {
            this.setState({
                selectedCategory: e.target.outerText
            }, this.updateItems);
        }
    }

    updateItems() {
        this.request(this.state.selectedCategory);
    }

    render() {
        if(this.state.items){
            const items = this.state.items.map((item,index) =>{
                return(
                   <Newsitem item={item} key={index}/>
                );
            });
            return(
                <div className="maincontainer">
                    <Category onClick={this.onCategorySelected.bind(this)} selected={this.state.selectedCategory}/>
                    <div className="container">
                        <div className="content">
                            <div className="articles">
                                <ul className="items">
                                    {items}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <Footer />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container no-news">No News</div>
            );
        }
    }
}

export default News;