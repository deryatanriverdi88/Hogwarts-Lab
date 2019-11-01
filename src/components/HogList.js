import React, { Component } from 'react'
import HogTile from './HogTile'

class HogList extends Component {



 render() {
  //  console.log(this.props.hogs)
  return(
   <div className="ui three stackable cards">
     {this.props.hogs.map(hog => {
       return <HogTile hog={ hog } key={hog.id}/>
      })
     }
   </div>
    )
   }
 }



export default HogList

