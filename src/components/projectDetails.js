import React, { Component } from "react";

class ProjectDetails extends Component {
    constructor(props) {
        super(props);
        console.log((props))
        this.state = {
            project1:props.project,
            name:"",
            number:"",
            details:"",
            store:[],
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value,
        });
    }

    handleClick = async (e) => {
        console.log(this.state.details)
        let object1 = {name:this.state.name,number:this.state.number,details:this.state.details};
        console.log(object1)
        await this.setState({
            store:[...this.state.store,object1],
        });

    }

  render() {
    return (
      <div>
          <div className="container">
          <div className="row">
          <div className="col-md-6">
          <h2>{this.state.project1}</h2>
          <h4>--person details</h4>

          {this.state.store.map((person,index) => {
              return <p key={index}>{person.name}-{person.number}-{person.details}</p>
          })}
          </div>
          <div className="col-md-6">
          <h2>Add Contact</h2>
       <label>name</label><br/>
       <input type="text" id="name" onChange={this.handleChange}></input><br/>
       <label>number</label><br/>
       <input type="text" id="number" onChange={this.handleChange}></input><br/>
       <label>details</label><br/>
       <input type="text" id="details" onChange={this.handleChange}></input><br/>
       <button onClick={this.handleClick}>submit</button>
          </div>
          </div>
          </div>
      </div>

    );
  }
}

export default ProjectDetails;