import React , {useReducer} from 'react';
import NumberReducer from './NumberReducer';



function Child2() {
    let [state, dispatch] = useReducer(NumberReducer,52);
  return (
    <div>
        Child 2 {state}
        <button onClick={()=> { dispatch ({type :'Increment', val: 4}) ;}}>Increment</button>
        <button onClick={()=> { dispatch ({type :'Decrement', val: 2}) ;}}>Decrement</button>
    </div>
    
    
  );
}

export default Child2;