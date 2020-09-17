import React, { useState, useEffect } from 'react';

const EffectTest = () => {

    console.log('Render');
    const [resource, setResource] = (useState(() => {
        return 'users'
    }))
    const [items, setItem] = (useState(() => []));

    const setResourceType = (data: string) => {
        setResource(() => {
            return data;
        });
    }

    const fetchItem = async ()=>{
        const apiCall = await  fetch(`https://jsonplaceholder.typicode.com/${resource}`);
        const response = await apiCall.json();
        setItem(response);
    }
    useEffect(() => {
        fetchItem();
    }, [resource])

    return (
        <>
            <div>
                <button onClick={() => setResourceType('posts')}>POSTS</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
                <h1>
                    {resource}
                </h1>
            </div>
                {items.map((item) => JSON.stringify(item))}

        </>
    )

}
export default EffectTest;

