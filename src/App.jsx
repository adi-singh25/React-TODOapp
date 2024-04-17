// import { useState } from 'react'
// import Navbar from './components/Navbar'
// import { v4 as uuidv4 } from 'uuid';

// import './App.css'
// function App() {
//   const[todo,setTodo]=useState("")
//   const [todos,setTodos]=useState([])

//   const handleEdit=(e, id)=>{
//     let t=todos.filter(i=>i.id===id)
//     setTodo(t[0].todo)
//     let newTodos=todos.filter(item=>{
//       return item.id!==id
//     });
//     setTodos(newTodos)

//   }
//   const handleDelete=(e,id)=>{
//     let newTodos =todos.filter(item=>{
//       return item.id!==id
//     });
    
//     setTodos(newTodos)

//   }
//   const handleAdd=()=>{
//     setTodos([...todos,{id:uuidv4() ,todo,isCompleted:false}])
//     setTodo("")

    
//   }

  
//   const handleChange=(e)=>{
  
//    setTodo(e.target.value)
//   }
//   const handleCheckbox=(e)=>{
//     let id = e.target.name;
//     let index =todos.findIndex(item=>{
//       return item.id===id;
//     })
//     let newTodos=[...todos];
//     newTodos[index].isCompleted=!newTodos[index].isCompleted;
//     setTodos(newTodos)
//   }
//   return (
//     <>
//     <Navbar/>
//     <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]"> 
//     <div className='addTodo'> 
//     <h2 className="text-lg font-bold">Add a Todo </h2>
//     <input onChange={handleChange} value={todo} type="text"  className='w-1/2'/>
//     <button onClick= {handleAdd} className=" bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6">Save</button>
//     </div>
//     <h2 className="text-xl font-bold text-left">  Your Todos</h2>

//     <div className="todos">
//      {todos.length===0 && <div className='m-5'> No to display</div>}
//       {todos.map(item=>{ 

//      return <div key={item.id} className="todo flex w-full justify-between">
//       <div className='flex gap-5'>
//       <input name={item.id} onChange={handleCheckbox} type="checkbox" value={item.isCompleted}  id=""/>
//       <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
//       </div>
//      <div className='buttons  flex h-full'>
//       <button onClick={(e)=>handleEdit(e, item.id)} className=' bg-violet-800 hover:bg-violet-950 p-1.5 py-0 text-sm font-bold text-white rounded-md mx-2'>Edit</button>
//       <button onClick={(e)=>{handleDelete(e,item.id)}} className=" bg-violet-800 hover:bg-violet-950 p-1 py-0 text-sm font-bold text-white rounded-md mx-1">Delete</button>
//      </div>
//       </div>
//       })}
//     </div>
//     </div>
        
//     </>
//   )
// }

// export default App
// =========================
// CHATGPT TOUCHED BELOW

// import { useState } from 'react';
// import Navbar from './components/Navbar';
// import { v4 as uuidv4 } from 'uuid';

// import './App.css';

// function App() {
//   const [todo, setTodo] = useState('');
//   const [todos, setTodos] = useState([]);

//   const handleEdit = (id) => {
//     const editedTodo = prompt('Edit Todo', todos.find(todo => todo.id === id).todo);
//     if (editedTodo && editedTodo.trim()) {
//       const updatedTodos = todos.map(todo =>
//         todo.id === id ? { ...todo, todo: editedTodo } : todo
//       );
//       setTodos(updatedTodos);
//     }
//   };

//   const handleDelete = (id) => {
//     const updatedTodos = todos.filter(todo => todo.id !== id);
//     setTodos(updatedTodos);
//   };

//   const handleAdd = () => {
//     if (todo.trim()) {
//       setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
//       setTodo('');
//     }
//   };

//   const handleChange = (e) => {
//     setTodo(e.target.value);
//   };

//   const handleCheckbox = (id) => {
//     const updatedTodos = todos.map(todo =>
//       todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
//     );
//     setTodos(updatedTodos);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto my-5 rounded-xl p-5 bg-blue-100 min-h-[80vh]">
//         <div className="addTodo flex items-center mb-4">
//           <input onChange={handleChange} value={todo} type="text" className="w-full p-2 mr-2 border border-gray-400 rounded-md" placeholder="Enter your task" />
//           <button onClick={handleAdd} className="bg-blue-500 hover:bg-blue-600 p-2 text-sm font-bold text-white rounded-md">Add Task</button>
//         </div>
//         <h2 className="text-xl font-bold text-left mb-4">Your Todos</h2>
//         <div className="todos">
//           {todos.length === 0 && <div className="m-5">No tasks to display</div>}
//           {todos.map(todo => (
//             <div key={todo.id} className={`todo flex w-full justify-between items-center p-2 border border-gray-300 rounded-md ${todo.isCompleted ? 'bg-gray-100' : ''}`}>
//               <div className="flex items-center gap-3">
//                 <input type="checkbox" onChange={() => handleCheckbox(todo.id)} checked={todo.isCompleted} className="cursor-pointer" />
//                 <div className={todo.isCompleted ? "line-through" : ""}>{todo.todo}</div>
//               </div>
//               <div className="buttons flex items-center">
//                 <button onClick={() => handleEdit(todo.id)} className="text-gray-600 hover:text-gray-900 mr-2">Edit</button>
//                 <button onClick={() => handleDelete(todo.id)} className="text-gray-600 hover:text-gray-900">Delete</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
// =================++++++++++++++++++++++++++=================
// import { useState } from 'react';
// import Navbar from './components/Navbar';
// import { v4 as uuidv4 } from 'uuid';

// import './App.css';

// function App() {
//   const [todo, setTodo] = useState('');
//   const [todos, setTodos] = useState([]);
//   const [isNightMode, setIsNightMode] = useState(false); // State for day-night mode

//   const handleEdit = (id) => {
//     const editedTodo = prompt('Edit Todo', todos.find(todo => todo.id === id).todo);
//     if (editedTodo && editedTodo.trim()) {
//       const updatedTodos = todos.map(todo =>
//         todo.id === id ? { ...todo, todo: editedTodo } : todo
//       );
//       setTodos(updatedTodos);
//     }
//   };

//   const handleDelete = (id) => {
//     const updatedTodos = todos.filter(todo => todo.id !== id);
//     setTodos(updatedTodos);
//   };

//   const handleAdd = () => {
//     if (todo.trim()) {
//       setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
//       setTodo('');
//     }
//   };

//   const handleChange = (e) => {
//     setTodo(e.target.value);
//   };

//   const handleCheckbox = (id) => {
//     const updatedTodos = todos.map(todo =>
//       todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
//     );
//     setTodos(updatedTodos);
//   };

//   const toggleMode = () => {
//     setIsNightMode(!isNightMode);
//   };

//   return (
//     <>
//       <Navbar toggleMode={toggleMode} /> {/* Pass toggle function to Navbar */}
//       <div className={`container mx-auto my-5 rounded-xl p-5 ${isNightMode ? 'bg-gray-800 text-white' : 'bg-yellow-200 text-black'} min-h-[80vh]`}>
//         <div className="addTodo flex items-center mb-4">
//           <input onChange={handleChange} value={todo} type="text" className="w-full p-2 mr-2 border border-gray-400 rounded-md" placeholder="Enter your task" />
//           <button onClick={handleAdd} className={`p-2 text-sm font-bold rounded-md ${isNightMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-yellow-500 hover:bg-yellow-600 text-white'}`}>Add Task</button>
//         </div>
//         <h2 className="text-xl font-bold text-left mb-4">Your Todos</h2>
//         <div className="todos">
//           {todos.length === 0 && <div className="m-5">No Todo To Display</div>}
//           {todos.map(todo => (
//             <div key={todo.id} className={`todo flex w-full justify-between items-center p-2 border border-gray-300 rounded-md ${todo.isCompleted ? 'bg-gray-100' : ''}`}>
//               <div className="flex items-center gap-3">
//                 <input type="checkbox" onChange={() => handleCheckbox(todo.id)} checked={todo.isCompleted} className="cursor-pointer" />
//                 <div className={todo.isCompleted ? "line-through" : ""}>{todo.todo}</div>
//               </div>
//               <div className="buttons flex items-center">
//                 <button onClick={() => handleEdit(todo.id)} className="text-gray-600 hover:text-gray-900 mr-2">Edit</button>
//                 <button onClick={() => handleDelete(todo.id)} className="text-gray-600 hover:text-gray-900">Delete</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
// =====================================================================================================================================================================
import { useState } from 'react';
import Navbar from './components/Navbar';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [isNightMode, setIsNightMode] = useState(false);

  const handleEdit = (id) => {
    const editedTodo = prompt('Edit Todo', todos.find(todo => todo.id === id).todo);
    if (editedTodo && editedTodo.trim()) {
      const updatedTodos = todos.map(todo =>
        todo.id === id ? { ...todo, todo: editedTodo } : todo
      );
      setTodos(updatedTodos);
    }
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleAdd = () => {
    if (todo.trim()) {
      setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
      setTodo('');
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  };

  const toggleMode = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <>
      <Navbar toggleMode={toggleMode} />
      <div className={`container mx-auto my-5 rounded-xl p-5 ${isNightMode ? 'bg-gray-800 text-white' : 'bg-yellow-200 text-black'} min-h-[80vh]`}>
        <div className="addTodo flex items-center mb-4">
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            className={`w-full p-2 mr-2 border border-gray-400 rounded-md ${isNightMode ? 'text-gray-300' : 'text-black'}`}
            placeholder="Enter your task"
          />
          <button
            onClick={handleAdd}
            className={`p-2 text-sm font-bold rounded-md ${isNightMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-yellow-500 hover:bg-yellow-600 text-white'}`}
          >
            Add Task
          </button>
        </div>
        <h2 className="text-xl font-bold text-left mb-4">Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className="m-5">No Todo To Display</div>}
          {todos.map(todo => (
            <div key={todo.id} className={`todo flex w-full justify-between items-center p-2 border border-gray-300 rounded-md ${todo.isCompleted ? 'bg-gray-100' : ''}`}>
              <div className="flex items-center gap-3">
                <input type="checkbox" onChange={() => handleCheckbox(todo.id)} checked={todo.isCompleted} className="cursor-pointer" />
                <div className={todo.isCompleted ? "line-through" : ""}>{todo.todo}</div>
              </div>
              <div className="buttons flex items-center">
                <button onClick={() => handleEdit(todo.id)} className="text-gray-600 hover:text-gray-900 mr-2">Edit</button>
                <button onClick={() => handleDelete(todo.id)} className="text-gray-600 hover:text-gray-900">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

