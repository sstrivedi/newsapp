(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(8),s=a.n(i),c=(a(15),a(17),a(2)),r=a(3),o=a(5),m=a(4),u=a(6),d=(a(19),a(1)),h=["business","entertainment","general","health","science","sports","technology"];var f=function(e){var t=h.map(function(t,a){var n=e.selected.toLowerCase()===t?"active":null;return l.a.createElement("li",{onClick:e.onClick,key:a,className:n},t)});return l.a.createElement("div",{className:"category ".concat(e.isMenuOpen?"open":"close")},l.a.createElement("ul",null,t))},p=function(e){var t={backgroundImage:"url("+e.item.urlToImage+")",width:"100%",paddingTop:"56.25%",height:"auto",backgroundSize:"cover"};return l.a.createElement("li",{className:"item"},l.a.createElement("div",{className:"item-image-wrapper"},l.a.createElement("div",{className:"item-image",style:t})),l.a.createElement("div",{className:"item-info"},l.a.createElement("a",{href:e.item.url,className:"item-link"},l.a.createElement("h2",null,e.item.title?e.item.title:null)),l.a.createElement("p",{className:"date"},new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.item.publishedAt)))),l.a.createElement("p",null,e.item.description)))},g=function(){return l.a.createElement("ul",{className:"footer-links"},l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-copyright"}),l.a.createElement("span",null," S Trivedi 2018")),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-twitter"})),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-youtube"})),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-linkedin"})),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-google-plus"})),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-pinterest"})),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-github"})))},E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={error:null,isLoading:!1,items:[],selectedCategory:"general",page:0,active:null,isMenuOpen:!1},a.toggleMenu=a.toggleMenu.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.setState({isLoading:!0}),this.request(),console.log("component did mount",this.state.selectedCategory)}},{key:"request",value:function(){var e=this,t="&category="+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"general").toLocaleLowerCase();fetch("https://newsapi.org/v2/top-headlines?country=us&apikey=25e64f4712064585b7baa3b0fc3cd9e5&page=1"+t).then(function(e){return e.json()}).then(function(t){return e.setState({items:t.articles})})}},{key:"onCategorySelected",value:function(e){e.target.outerText!==this.state.selectedCategory&&this.setState({selectedCategory:e.target.outerText},this.updateItems)}},{key:"updateItems",value:function(){this.request(this.state.selectedCategory)}},{key:"toggleMenu",value:function(){this.setState({isMenuOpen:!this.state.isMenuOpen})}},{key:"render",value:function(){if(this.state.items){var e=this.state.items.map(function(e,t){return l.a.createElement(p,{item:e,key:t})});return l.a.createElement("div",{className:"maincontainer"},l.a.createElement("div",{className:"navigation"},l.a.createElement("div",{className:this.state.isMenuOpen?"menu open":"menu close",onClick:this.toggleMenu},l.a.createElement("i",{className:"fa fa-bars"})," Newsapp",this.state.isMenuOpen?l.a.createElement("i",{className:"fa fa-times-circle"}):""),l.a.createElement(f,{onClick:this.onCategorySelected.bind(this),selected:this.state.selectedCategory,isMenuOpen:this.state.isMenuOpen})),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"articles"},l.a.createElement("ul",{className:"items"},e)))),l.a.createElement("div",{className:"footer"},l.a.createElement(g,null)))}return l.a.createElement("div",{className:"container no-news"},"No News")}}]),t}(n.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(21)}},[[9,2,1]]]);
//# sourceMappingURL=main.1609f9d6.chunk.js.map