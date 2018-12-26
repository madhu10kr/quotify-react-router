import React, { Component } from "react";



class ProjectDetails extends Component {
    constructor(props) {
        super(props);
        console.log((this.props.project))
        this.state = {
            project1:props.project
        }
    }

  render() {
    return (
      <div>
       <h2>{this.state.project1.title}</h2>
      </div>
    );
  }
}

export default ProjectDetails;