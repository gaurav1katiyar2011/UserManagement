export const userService = {
    search
    };
function search(pageNo, limit) {
    return fetch('https://reqres.in/api/users?page='+pageNo+'&per_page='+limit)
        .then(response => {
            if (!response.ok) { 
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
        .then(user => {
                return user
            });
}
