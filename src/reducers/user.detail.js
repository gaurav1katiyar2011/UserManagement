const UserDetails=(state={},action) =>{

    switch(action.type){
        case 'SEARCH_REQUEST':
        return {
            ...state,
            requeestedPageNo : action.pageNo
        }
        
        case 'SEARCH_SUCCESS':
        return {
            ...state,
            data : action.data
        }
        case 'SEARCH_FAILURE':
        return {
            ...state,
            error : action.error
        }
        case 'DELETE_REQUEST':
        var copystate={} 
        Object.assign(copystate,state);
        console.log("deleted idis="+JSON.stringify(action.id)+",copystate="+JSON.stringify(copystate));
        var userdata=copystate.data.data;
        var filterdata=userdata.filter((user) => {
            if (user.id!==action.id.id){
               return true;
            }
        });
        var data={};
        var total=copystate.data.total;
        
        data['data']=filterdata;
        data['per_page']=copystate.data.per_page;
        data['total']=(total==undefined?0:total-1)
        data['per_page']=copystate.data.total_pages;
        
        return{
            ...state,
            data:data
        }
        default:
            return state;
      }
    }
    export default UserDetails
    