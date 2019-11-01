import React, { Component } from 'react'

class Sort extends Component {

 render() {
  return(
   <div className="sort">
     <select onChange={this.props.handleSort}>
       <option value="all">All</option>
       <option value="name">Sort by Name</option>
       <option value="weight">Sort by Weight</option>
     </select>
   </div>
    )
   }
 }

export default Sort