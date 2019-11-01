import React, { Component } from 'react'




class HogTile extends Component {
    state = {
      clicked: false,
      hideAndSeek: false
    }
    
    handleClick =()=>{
      this.setState({
        clicked: !this.state.clicked
      })
    }

    handleHide = () => {
      this.setState({
        hideAndSeek: !this.state.hideAndSeek
      })
    }
    render() {
      console.log(this.state.hideAndSeek)
    //  console.log(this.props.hog)
    const url = this.props.hog.name.replace(/\s/g, "_").toLowerCase()
    const fileName = `/hog-imgs/${url}.jpg`
    // console.log(this.props.hog.name)
    // console.log(url)

  return(
   <div className="ui eight wide column" >

      <ul onClick={this.handleClick}>
        <div className='card ' >
        <li> <img src={fileName} alt={this.props.hog.name} /></li>
        <li> <h2>{this.props.hog.name}</h2> </li>
        </div>
     </ul> 
        {this.state.clicked ? 
     <ul>
       <div className="card">
        <li><b>Specialty :</b> {this.props.hog.specialty}</li>
        <li><b>Weight : </b>{this.props.hog.weight} </li>
        <li><b>Highest medal achieved : </b>{this.props.hog['highest medal achieved']}</li>
        <li><b>Greased : </b>{`${this.props.hog.greased}`} </li> 
        </div>
    </ul>
       : null
       }

    <button className="hide-button" onClick={this.handleHide}>Hide the Hog!</button> 
       
    </div>
    )
   }
 }






export default HogTile


