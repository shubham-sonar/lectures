// We can pass any type of value to the useState hook.. It can be a value, primitive or non-premitive variable such as Object or Array. But we need to handle its setState method accordingly.


import React, { useState } from 'react'

function ObjectToUsestate() {
    const [user, setUser] = useState({ firstName: '', lastName: '' });

    console.log({ ...user });

    const onChangeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <div>ObjectToUsestate
            <form>
                <input type="text" onChange={onChangeHandler} name="firstName" value={user.firstName} />
                <input type="text" onChange={onChangeHandler} name="lastName" value={user.lastName} />
            </form>
            <h3> This is your First Name : {user.firstName}</h3>
            <h3> This is your Last Name : {user.lastName}</h3>
            <br />
            <h6>{JSON.stringify(user)}</h6>
        </div>
    )
}

export default ObjectToUsestate

/*

Here we use the spread operator to manually copy the earlier value of the Obj to the setState so that the other properties of the State are not lost.

This will simply spread all the values of the object and ignore the same properties.

*/