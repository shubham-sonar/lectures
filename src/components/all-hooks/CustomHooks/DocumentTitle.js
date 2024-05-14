import React, { useState } from 'react'
import useDocumentTitle from '../useDocumentTitle';

function DocumentTitle2() {
    const [count, setCount] = useState(0);

    useDocumentTitle(count);

    return (
        <div>DocumentTitle Second
            <h3> Couter2 : {count}</h3>
            <button onClick={() => setCount(count + 1)}> Increment </button>
        </div>
    )
}

export default DocumentTitle2