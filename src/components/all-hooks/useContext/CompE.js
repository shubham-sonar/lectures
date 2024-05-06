import React from 'react'
import { UserContext, ChannelContext } from '../../../HooksApp'

function CompE() {
    return (
        <div> CompE = Using the Trditional method ContextVariable.consumer
            <UserContext.Consumer>
                {(user) => {
                    return (
                        <ChannelContext.Consumer>
                            {(channel) => {
                                return (
                                    <h3> The creator is {user} and the channel is {channel}</h3>
                                )
                            }}
                        </ChannelContext.Consumer>
                    )
                }}
            </UserContext.Consumer>
        </div >
    )
}

export default CompE