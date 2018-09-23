import { userConstants } from '../constants';
import { userService } from '../services';

export const userActions = {
   search,
   deleteUser
};
function search(pageNo, limit) {
    return dispatch => {
        dispatch(request({ pageNo}));
        userService.search(pageNo, limit)
            .then( data => { 
                        dispatch(success(data));
                },
                error => {
                    dispatch(failure(error));
                }
            );
        };
    function request(pageNo) { return { type: userConstants.SEARCH_REQUEST, pageNo } }
    function success(data) { return { type: userConstants.SEARCH_SUCCESS, data } }
    function failure(error) { return { type: userConstants.SEARCH_FAILURE, error } }
}
function deleteUser(id){
    return dispatch => {
        dispatch(request({id}))
    }
    function request(pageNo) { return { type: userConstants.DELETE_REQUEST, id } }
}
