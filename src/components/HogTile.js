import React, { Component } from 'react'
import HogDetails from './HogDetails'



class HogTile extends Component {
    state = {
      hideAndSeek: false
    }
    
  

    handleHide = () => {
      this.setState({
        hideAndSeek: !this.state.hideAndSeek
      })
    }
    render() {

    // console.log(this.state.hideAndSeek)
    //  console.log(this.props.hog)
    // console.log(this.props.hog.name)
    // console.log(url)

  return(
   <div className="ui eight wide column" >
     {!this.state.hideAndSeek ? <HogDetails handleHide={this.handleHide}hog={this.props.hog} /> :  <button className="hide-button" onClick={this.handleHide}>Bring the Hog</button>  }
    </div>
    )
   }
 }






export default HogTile


