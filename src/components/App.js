import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import FilterBar from './FilterBar'
import HogList from './HogList'
import hogs from '../porkers_data';



class App extends Component {

  state ={
    filterClick: false,
    sortValue: ''
  }

   handleFilter = () => {
    //  console.log('Filter')
     this.setState({
       filterClick: !this.state.filterClick
     })
   }

   
  handleSort = (e) => {
    console.log(e.target.value)
    this.setState({
      sortValue: e.target.value
    })
  }

  sortHogs = (hogs) =>{
    if (this.state.sortValue === 'name') {
      return [...hogs].sort((a,b) => {
        if(a.name > b.name){
          return 1
        } else if (a.name < b.name ){
          return -1
        } else {
          return 0
        }
      })
    } else if (this.state.sortValue === 'weight') {
      return [...hogs].sort((a,b) => {
        if(a.weight < b.weight){
          return 1
        } else if (a.weight > b.weight ){
          return -1
        } else {
          return 0
        }
      })
    } else {
      return [...hogs]
    }
  }

    
  render() {
    const filteredHogs = this.state.filterClick ? hogs.filter(hog => hog.greased) : hogs
    
    // console.log(this.state.filterClick)
    return (
      <div className="App">
          <Nav/>
          <FilterBar handleFilter={this.handleFilter}
                     handleSort={this.handleSort}/>
          <HogList hogs={this.sortHogs(filteredHogs)}/>
      </div>
    )
  }
}

export default App;
