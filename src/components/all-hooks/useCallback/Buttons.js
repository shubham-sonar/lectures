import React from 'react'

function Buttons({ handler, children }) {
    console.log('Button Called for ', children);
    return (
        <button onClick={handler}>{children}</button>
    )
}

export default React.memo(Buttons)