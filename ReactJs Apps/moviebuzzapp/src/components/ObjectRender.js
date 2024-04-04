import React from 'react';

const ObjectRender = () => {
    const pcart =  {
        pid:1201,
        pname:"lenovo",
        price:40000
    }
    return (
        <div>
            {
            Object.keys(pcart).map((key,index)=><li key={index}>{pcart[key]}</li>)
}
        </div>
    );
};

export default ObjectRender;