export default {
    getOrders : () => {
        return fetch('/api/user/orders')
            .then(res =>{
                if(res.status !== 401) {
                    return res.json().then(data => data);
                }
                else
                    return { message : { msgBody : "UnAuthorized"}, msgError : true};
            });
    },
    postOrder : order =>{
        return fetch ('/api/user/order', {
            method : "POST",
            body : JSON.stringify(order),
            headers : {
                'Content-Type' :  'application/json'
            }
        }).then(res=>{
            if(res.status !== 401) {
                return res.json().then(data => data);
            }
            else
                    return { message : { msgBody : "UnAuthorized"}, msgError : true};

        });
    }
}