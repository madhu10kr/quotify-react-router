import React from "react";
import axios from "axios"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

let i = 0;

function Heading(props){
    return <h1 className="alert alert-light" role="alert">{props.title}</h1>
}

class Quotes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quotes : {},
            local : [],
            btndisalbe : false,
            saveTo : 'save to local'
        }
        this.getData = this.getData.bind(this)
        this.getQuote = this.getQuote.bind(this)
        this.saveToLocal = this.saveToLocal.bind(this)
    }
    

componentDidMount() {
    this.getData();
}
getData(){
    axios.get('https://talaikis.com/api/quotes/random/').then((response) => {
            console.log(response.data.quote);
            this.setState({
                quotes : response.data
            })
        });   
}

getQuote(){
    this.getData();
    this.setState({
        btndisalbe : false,
        saveTo : 'save to local'
    })

}

saveToLocal() {
    this.setState(prevState => {
        prevState.local.push(prevState.quotes);
        console.log(prevState.local)
        localStorage.setItem("key",JSON.stringify(prevState.local))
    })
    this.setState({
        btndisalbe : true,
        saveTo : 'saved'
    })
}

render(){
    return (
        <div>
            <h2 className="alert alert-success" role="alert" >{this.state.quotes.quote}</h2>
            <h4 className="alert alert-warning" role="alert">--{this.state.quotes.author}</h4>
            <button type="button" className="btn btn-warning" onClick={this.getQuote}>new quote</button>
            <button type="button" className="btn btn-success" onClick={this.saveToLocal} disabled={this.state.btndisalbe}>{this.state.saveTo}</button>
        </div>
    )
}
}

function App1(){
    return (
        <div>
            <Heading title="Quotify" />
            <Quotes />
        </div>
    )
}

export default App1;