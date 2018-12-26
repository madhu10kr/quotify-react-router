import React, { Component } from "react";
import axios from "axios";
import ProjectDetails from './projectDetails'



class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array:[],
            text1:"",
            text2:"",
            showProductDetails:false,
            passingValue:""
        }
    }

    componentWillMount() {
        this.getData();
    }
    getData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            console.log(response.data)
            this.setState({
                array:response.data
            })
        }).catch(err => console.log(err))
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleClick = (e) => {
        let obj = {title:this.state.text1,body:this.state.text2};
        let array1 = this.state.array;
        this.setState({
            array:[obj,...array1]
        })
    }

    handleView = (e) => {
        this.setState({
            passingValue:e.target.value,
        });
        this.updateData();
    }

    updateData = () => {
        this.setState({
            showProductDetails:true,
        })
    }

  render() {
    return (
        <div>
            {this.state.showProductDetails ? <ProjectDetails project={this.state.passingValue}/> : 
            <div>
            <div className="container">
            <div className="row">
            <div className="col-md-6">
            <h2>Project List</h2>
        <ol>
        {this.state.array.map((project,index) => {
            return <div><li key={index}>{project.title}</li><button value={project} onClick={this.handleView}>view</button></div>
        })}
        </ol>
            </div>
            <div className="col-md-6">
            <h2>Add Project</h2>
            <label>Name</label><br/>
            <input type="text" onChange={this.handleChange} id="text1"></input><br/>
            <label>Details</label><br/>
            <textarea onChange={this.handleChange} id="text2"></textarea><br/>
            <button onClick={this.handleClick}>Add To Top</button>
            </div>
            </div>
            </div>
        </div>}
        </div>
    );
  }
}

export default Project;