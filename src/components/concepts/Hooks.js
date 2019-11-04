import React, {useState, useEffect} from 'react';

const Hooks = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState({});

    return(
        <div className="main">
            <div classNam="mainDiv">
                <input value={query} onChange={e => setQuery(e.target.value)} placeholder="enter your sw character number" />
            </div>
        </div>
    )
}

const Hook2 = () => {
    const [results, queryNum, setQueryNum] = useNumHook ('')
    const [clicks, setClicks] = useClicks(0);
}

return(
    <div className="main">
    <div className="mainDiv">
        <h3>Enter a number below ot see a number fact</h3>
        <input value={queryNum} onChange={e => setQueryNum(e.target.value)} placeholder="enter a number"/>
        {results ? <h2>{results}</h2> :<div></div>}
        <button onClick={() => setClicks(clicks +1)}>Click to update document title</button>
    </div>
    </div>
)
export default Hooks;