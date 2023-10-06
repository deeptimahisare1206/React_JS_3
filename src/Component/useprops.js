import React, { Component } from 'react'

export default class Useprops extends Component {
    constructor(props){
        super(props);
        this.props= props;

    }
  render() {
    return (
      <div>
            <h3>Use Of Props</h3>
            <h3>YES!!!! my name is {this.props.myname} {this.props.mysurname}</h3>
      </div>
    )
  }
}
