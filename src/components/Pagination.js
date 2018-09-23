import React,{Component} from 'react';
import {connect} from 'react-redux';
import { userActions } from '../actions';
class Pagination extends Component {

    render() {
        const {pageNo,totalUsers,totalPages} =this.props;
        var nextPage=(pageNo===undefined?1:pageNo+1);
        var prePage=(pageNo===undefined || pageNo===1 ?1:pageNo-1);
        var preStatusClass= pageNo==1?'disabled':'active';
        var nextStatusClass=pageNo>=totalPages?'disabled':'active';

        console.log("data==>>"+pageNo)
        console.log("data==>>>>>>"+pageNo)
        return (
            <div className="pagination">
                <a href="#" onClick={(e)=>{this.props.handlePre(prePage)}} className={preStatusClass}>❮❮</a>
                <a href="#" onClick={(e)=>{this.props.handleNext(nextPage)}} className={nextStatusClass} >❯❯</a>
            </div>
        );    
      }
    }
const mapStatsToProps= (state,ownProps) =>{
    return{
        pageNo:(state.UserDetails.data===undefined?undefined:state.UserDetails.data.page),
        totalUsers:(state.UserDetails.data===undefined?undefined:state.UserDetails.data.total),
        totalPages:(state.UserDetails.data===undefined?undefined:state.UserDetails.data.total_pages)
    }
}
const mapDispatchToProps =(dispatch,ownProps)=>{
    var nextData=(pageNo)=>{
        console.log("pageNo="+pageNo);
        dispatch(userActions.search(pageNo,10))
    }
    var preData=(pageNo)=>{
        dispatch(userActions.search(pageNo,10))
    }
    return{
        handleNext: nextData,
        handlePre: preData
    }
}
Pagination = connect(mapStatsToProps,mapDispatchToProps)(Pagination)
export default Pagination
