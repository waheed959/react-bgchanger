import {useState} from "react" ;

function App() {
 const [color,setcolor] = useState("white");
  return (
   
<div className="w-full h-screen duration-200"
style={{backgroundColor:color}}
>
  <div className="fixed flex flex-wrap
  justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
      <button onClick={()=>setcolor("red")} className="outline-none px-4 py-1 rounded-full  text-white shadow-lg"
      style={{backgroundColor:" Red"}}
      >Red</button>
       <button onClick={()=>setcolor("green")} className="outline-none px-4 py-1 rounded-full  text-white shadow-lg"
      style={{backgroundColor:"Green"}}
      >Green</button>
       <button onClick={()=>setcolor("Blue")} className="outline-none px-4 py-1 rounded-full  text-white shadow-lg "
      style={{backgroundColor:" Blue"}}
      >Blue</button>
       <button onClick={()=>setcolor("orange")} className="outline-none px-4 py-1 rounded-full  text-white shadow-lg "
      style={{backgroundColor:"orange"}}
      >Orange</button>
       <button onClick={()=>setcolor("Black")} className="outline-none px-4 py-1 rounded-full  text-white shadow-lg "
      style={{backgroundColor:" black"}}
      >Black</button>
       <button onClick={()=>setcolor("yellow")} className="outline-none px-4 py-1 rounded-full  text-white shadow-lg "
      style={{backgroundColor:" yellow"}}
      >Yellow</button>
      <button onClick={()=>setcolor("grey")} className="outline-none px-4 py-1 rounded-full  text-white shadow-lg "
      style={{backgroundColor:" grey"}}
      >Grey</button>
      <button onClick={()=>setcolor("pink")} className="outline-none px-4 py-1 rounded-full  text-white shadow-lg "
      style={{backgroundColor:" pink"}}
      >Pink</button>
      <button onClick={()=>setcolor("white")} className="outline-none px-4 py-1 rounded-full  text-black shadow-lg "
      style={{backgroundColor:" white"}}
      >white</button>
      <button onClick={()=>setcolor("purple")} className="outline-none px-4 py-1 rounded-full  white-black shadow-lg "
      style={{backgroundColor:" purple"}}
      >Purple</button>
       <button onClick={()=>setcolor("olive")} className="outline-none px-4 py-1 rounded-full  text-white shadow-lg "
      style={{backgroundColor:" olive"}}
      >Olive</button>
    </div>
  </div>
</div>
   
  )
};

export default App;