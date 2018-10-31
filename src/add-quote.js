import React from "react";
// import axios from "axios"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function Heading(props){
    return <h1 className="alert alert-light" role="alert">{props.title}</h1>
}

class Quotes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quoteValue :'',
            authorValue : ''
        }
        this.saveToDB = this.saveToDB.bind(this)
        this.changeQuote = this.changeQuote.bind(this)
        this.changeAuthor = this.changeAuthor.bind(this)
    }

    changeQuote(e){
        this.setState({
            quoteValue : e.target.value
        })
    }

    changeAuthor(e){
        this.setState({
            authorValue : e.target.value
        })
    }

    saveToDB(){
        let data = {
            author: this.state.authorValue,
            quote: this.state.quoteValue
        }
        let localData = JSON.parse(localStorage.getItem('key'));
        localData.push(data);
        localStorage.setItem('key',JSON.stringify(localData));
    }
    

    render() {
        return (
            <div>
                
                <form onSubmit={this.saveToDB}>
                    <div className="form-group">
                        <div className="form-group col-md-4">
                            <label><h4> Add Quote: </h4></label>
                            <textarea className="form-control" onChange={this.changeQuote} value={this.state.quoteValue}></textarea>
                        </div> 
                        <div className="form-group col-md-4">
                            <label><h4> Add Author: </h4></label>
                            <input className="form-control" type="text" onChange={this.changeAuthor} value={this.state.authorValue} />
                        </div>
                        <div className="form-group col-md-4">
                            <input className="form-control btn btn-success" type="submit" value="Save To Local DB" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

function AddQuote(){
    return (
        <div>
            <Heading title="Quotify" />
            <Quotes />
        </div>
    )
}

export default AddQuote;
