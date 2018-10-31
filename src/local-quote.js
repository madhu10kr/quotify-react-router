import React from "react";
import axios from "axios";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Heading(props){
    return <h1 className="alert alert-light" role="alert">{props.title}</h1>
}

class Quotes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quotes : {}
        }
        this.getData = this.getData.bind(this)
        this.getQuote = this.getQuote.bind(this)
    }
    

componentDidMount() {
    this.getData();
}
getData(){
    //console.log(JSON.parse(localStorage.getItem("key")));
    let data = JSON.parse(localStorage.getItem("key"))
    this.setState({
        quotes : data[Math.floor(Math.random()*data.length)]
    })
}

getQuote(){
    this.getData();
}

render(){
    return (
        <div>
            <h2 className="alert alert-success" role="alert">{this.state.quotes.quote}</h2>
            <h4 className="alert alert-warning" role="alert">--{this.state.quotes.author}</h4>
            <button type="button" className="btn btn-success" onClick={this.getQuote}>Generate new quote</button>
        </div>
    )
}
}

function LocalQuote(){
    return (
        <div>
            <Heading title="Quotify" />
            <Quotes />
        </div>
    )
}

export default LocalQuote;