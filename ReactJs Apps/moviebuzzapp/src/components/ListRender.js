import React from 'react';

const ListRender = () => {
    const stunames = ["vamsi","ravi","shaii","vinnu"];
    return (
        <div>
            {
         stunames.map((sname)=><li>{sname}</li>)
           }
        </div>
    );
};

export default ListRender;