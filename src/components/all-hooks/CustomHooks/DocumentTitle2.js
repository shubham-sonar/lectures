import React, { useState } from 'react'
import useDocumentTitle from '../useDocumentTitle';

function DocumentTitle() {
    const [count, setCount] = useState(0);

    // Here we are just calling the custom hook. We will pass the count as the argument on the basis of which the document title will be changing. The hook will be called only when the count value is changed. Also we can directly call the hook just by using its name.

    useDocumentTitle(count);

    return (
        <div>DocumentTitle First
            <h3> Couter1 : {count}</h3>
            <button onClick={() => setCount(count + 1)}> Increment </button>
        </div>
    )
}

export default DocumentTitle