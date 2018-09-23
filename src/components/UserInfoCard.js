import React from 'react';
import {UserDetail} from './UserDetail'
import {Pagination} from './Pagination'
import {connect} from 'react-redux'
import {userActions} from '../actions'
class UserInfoCard extends React.Component {
    render(){
        console.log("apis data="+this.props.data);
        var apidata=undefined;
        if(this.props.data){
            apidata= this.props.data.data;
        }
        var userdata=[];
        if(apidata){
        apidata.forEach(element => {
            userdata.push(<UserDetail key={element.id} data={element} handleDelete={this.props.handleDelete} />    );
        })
        }else {
            userdata.push(<div>No data found</div>);
        }
            return (
                <React.Fragment>
                     
                    {userdata}
                   
                </React.Fragment>
            )
        
    }
        
}
const mapDispatchToProps = (dispatch, ownProps) => {
    var deletedata= (id)=>{
        dispatch(userActions.deleteUser(id))
    }
    return {
        handleDelete: deletedata
    }
}
UserInfoCard = connect(null,mapDispatchToProps)(UserInfoCard)
export default UserInfoCard;



