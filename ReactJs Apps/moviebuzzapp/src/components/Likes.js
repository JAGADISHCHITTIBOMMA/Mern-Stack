import React, { useState } from 'react';

const Likes = () => {
    const [likes,setLikes] = useState(0);  //setLikes = Method
    return (
        <div>
            <h2>Likes:{likes}</h2> 
            <button onClick={()=>setLikes(likes+1)}>Likes</button>
            <button onClick={()=>setLikes(likes-1)}>Dislikes</button>
            <button onClick={()=>setLikes(likes+5)}>5Likes</button>
        </div>
    );
};

export default Likes;