import React , { useState, useContext, useEffect } from 'react';
import OrderItem from './OrderItem';
import OrderService from '../Services/OrderService';
import Message from './Message';
import { AuthContext } from '../Context/AuthContext';
import { Fragment } from 'react';

const Orders = props => {
    const [ order, setOrder ] = useState({ name: ""});
    const [ orders, setOrders ] = useState([]);
    const [ message, setMessage] = useState(null);
    const authContext = useContext(AuthContext);
    

    useEffect(() => {
        OrderService.getOrders().then(data => {
            setOrder(data.orders);

        });
    },[]);

    const onSubmit = e => {
        e.preventDefault();
        OrderService.postOrder(order).then(data => {
            const { message } = data;
            resetForm();
            if(!message.msgError){
                OrderService.getOrders().then( getData => {
                    setOrders(getData.orders);
                    setMessage(message);
                });
            }
            else if(message.msgBody === "UnAuthorized"){
                setMessage(message);
                authContext.setUser({ username : "", role : ""});
                authContext.setIsAuthenticated(false);
            }
            else{
                setMessage(message);

            }
        });
    }


    return(
        <Fragment>
            <ul >
                {
                    orders.map(order => {
                        return <OrderItem key={order._id} order={order}/>
                    })
                }

            </ul>
            <br/>

            <form onSubmit = {onSubmit}>
                <label htmlFor="Order">Generar un pedido</label>
                <input 
                    type = "text"
                    name="todo" 
                    value= {order.name} 
                    onChange={onChange}>   
                </input>

                

                <button className="btn" type="submit" > enviar</button>

            </form>

            { message ? <Message message={ message }/> : null }
        </Fragment>

    );
} 
export default Orders;