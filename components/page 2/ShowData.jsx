import React from 'react';

const ShowData = ({data}) => {
    return (
        <div>
            {data.map((item , index)=> {return <span>{item.content}</span>})}
        </div>
    );
};

export default ShowData;