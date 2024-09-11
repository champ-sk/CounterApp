import './App.css';
import React, { useState } from 'react';


function App() {
  const [count ,setCount] = useState(0);

  return (    
<div style={{textAlign:'center', marginTop:'50px'}}>
<h1>Counter App</h1>
<h2>{count}</h2>
<button onClick={()=>setCount(count+1)}>Increament</button>
<button onClick={()=>setCount(count-1)}>Decrement</button>
<button onClick={() => setCount(0)}>Reset</button>
</div>
  );
}

export default App;
