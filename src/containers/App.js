import React, { Component } from 'react';
import { userActions } from '../actions';
import { connect } from 'react-redux'
import '../App.css'
import Pagination from '../components/Pagination'
import UserInfoCard from '../components/UserInfoCard';
class App extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.firstTimeAPICall();
  }
  
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1 className="App-title">Pearson User Management</h1>
          <Pagination />
        </div>
      <div className="Container">
      <UserInfoCard data={this.props.data}/>
      </div>
      </div>
    
    );
  }
}
const mapStatsToProps= (state,ownProps)=>{
  
  return {
    data : state.UserDetails===undefined?undefined:state.UserDetails.data
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  var callapi= function(){
    dispatch(userActions.search(1,10))
  }
  return {
    firstTimeAPICall: callapi
  }
}
App = connect(mapStatsToProps,mapDispatchToProps)(App)
export default App
