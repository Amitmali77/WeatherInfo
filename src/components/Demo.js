import React,{useState,useEffect} from "react";

const TabComponent = () =>{

  let [tabState,setTabState] = useState('')

      tabState = 'React'

    useEffect(()=>{
         
    },[])

    const handleClickTab1 = () =>{
       setTabState('tab1')
    }

    const handleClickTab2 = () =>{
      setTabState('tab2')
    }
    
    const handleClickTab3 = () =>{
      setTabState('tab3')
    }
    

    return (
       <div>
           <h1>This is Tab component</h1>

           <ul className="tabClass" >
             <li>Tab1 </li>
             <li>Tab2</li>
             <ii>Tab3</ii>
           </ul>

           <button onClick= {handleClickTab1}>Tab1</button>
           <button onClick= {handleClickTab2}>Tab2</button>
           <button onClick= {handleClickTab3}>Tab3</button>

           <p>{tabState}</p>

       </div>
      
    )
}

export default TabComponent