

import React, { useContext } from 'react'
import { UserContext, ChannelContext } from '../../../HooksApp'


function CompB() {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);

    return (
        <div>CompB = Using the useContext() method
            <h3> The creator is {user} and the channel is {channel}</h3>
        </div>
    )
}

export default CompB


/*
useContext = There is no change while calling the component and creating the context. Only consuming the context becomes very easy. We need to wrap the components in the context.producer and also export them and import them in the consumer function but the only difference is that the consumers are extremely simple with useContext() method.
*/
