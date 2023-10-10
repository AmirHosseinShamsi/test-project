import React from 'react';

const ShowData = ({data}) => {
    const listtest = [{content:'amirhossein'} , {content: 'zahra'} , {content: ';'}]
    const codes = listtest
        .filter((item) => !item.content.match(/^[a-zA-Z\s]+$/))
        .map((item) => item.content)
        .join(' ');

    const text = listtest
        .filter((item) => item.content.match(/^[a-zA-Z\s]+$/))
        .map((item) => item.content)
        .join(' ');
    return (
        <div>
            {console.log(`this is codes : ${codes}`)}
            {console.log(`this is text : ${text}`)}
        </div>
    );
};

export default ShowData;