// import React,{useState} from 'react';
// import { CSSTransition,TransitionGroup } from 'react-transition-group';
// import './styles.css';

// function TransitionLayout() {
//     const [items, setItems] = useState([]);
//     const [input, setInput] = useState('');
  
//     const addItem = () => {
//       if (input) {
//         setItems([...items, input]);
//         setInput('');
//       }
//     };
  
//     const removeItem = (index) => {
//       setItems(items.filter((_, i) => i !== index));
//     };
  
//     return (
//       <div className='App'>
//         <h1>Transition Group - Items</h1>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         /> 
//         &nbsp;
//         <button onClick={addItem} className='btn btn-primary btn-sm'>Add Item</button>
//         <br/><br/>
//         {/* <ul> */}
//           <TransitionGroup>
//             {items.map((item, index) => (
//               <CSSTransition
//                 key={index}
//                 timeout={400}
//                 classNames="fade">
//                 <li>
//                   {item} <button onClick={() => removeItem(index)} className='btn btn-danger btn-xs'>Remove</button>                
//                 </li>   
                         
//               </CSSTransition>
               
//             ))}
//           </TransitionGroup>
//         {/* </ul> */}
//       </div>
//     );
//   }
  
//   export default TransitionLayout;
import React,{useState} from 'react';
import { CSSTransition,TransitionGroup } from 'react-transition-group';
import './styles.css';

function TransitionLayout() {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState('');
  
    const addItem = () => {
      if (input) {
        setItems([...items, input]);
        setInput('');
      }
    };
  
    const removeItem = (index) => {
      setItems(items.filter((_, i) => i !== index));
    };
  
    return (
      <div className='App'>
        <h1>Transition Group - Items</h1>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        /> 
        &nbsp;
        <button onClick={addItem} className='btn btn-primary btn-sm'>Add Item</button>
        <br/><br/>
        {/* <ul> */}
          <TransitionGroup>
            {items.map((item, index) => (
              <CSSTransition
                key={index}
                timeout={400}
                classNames="fade">
                <li>
                  {item} <button onClick={() => removeItem(index)} className='btn btn-danger' style={{padding: '0.25rem 0.5 rem',
                  fontSize: '0.75rem',
                  lineHeight: '1.25',
                  borderRadius: '0.2rem'}}>Remove</button>                
                </li>   
                         
              </CSSTransition>
               
            ))}
          </TransitionGroup>
        {/* </ul> */}
      </div>
    );
  }
  
  export default TransitionLayout;