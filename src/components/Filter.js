import React, { Component } from 'react'

class Filter extends Component {

 render() {
  return(
   <div className="filter">
     <label htmlFor="filterBox"> Greased ? </label>
     <input type="checkbox" id="filterBox" onClick={this.props.handleFilter}/>
   </div>
    )
   }
 }

export default Filter