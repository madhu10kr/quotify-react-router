import React, { Component } from "react";

class ProjectDetails extends Component {
    constructor(props) {
        super(props);
        console.log((this.props.project))
        this.state = {
            project1:props.project,
            store=[]
        }
    }

    handleClick = (e) => {
        console.log(e.target)
    }

  render() {
    return (
      <div>
       <h2>Add Contact</h2>
       <label>name</label><br/>
       <input type="text"></input><br/>
       <label>number</label><br/>
       <input type="text"></input><br/>
       <label>details</label><br/>
       <input type="text"></input><br/>
       <button onClick={this.handleClick}>submit</button>

      </div>
    );
  }
}

export default ProjectDetails;