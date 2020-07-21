export default {
    getClients : () => {
        return fetch('/api/clients')
            .then(res =>{
                if(res.status !== 401) {
                    return res.json().then(data => data);
                }
                else
                    return { message : { msgBody : "UnAuthorized"}, msgError : true};
            });
    },
    postClient : client =>{
        return fetch ('/api/client/add', {
            method : "POST",
            body : JSON.stringify(client),
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