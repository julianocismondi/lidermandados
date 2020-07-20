import React from 'react';
import { Fragment } from 'react';

const getStyle = (props) => {
    console.log(props.message);
    let baseClass = "alert ";
    if(props.message.msgError)
        baseClass = baseClass + "alert-danger ";
    else
        baseClass = baseClass + "alert-primary ";
    return baseClass + "text-center";
   
}


const Alerts = props => {
    return (
        <Fragment>
            <div className={getStyle(props)} role="alert">{props.message.msgBody}
                <button type="button" className="close" data-dismiss="alert">
                    <span>&times;</span>
                </button>
            </div>
        </Fragment>
        
    );
}

export default Alerts;