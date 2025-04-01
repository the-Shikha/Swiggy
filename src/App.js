import React from 'react'
import {createRoot} from 'react-dom/client';
import Header from "./components/Header"
import Body from "./components/Body"


const App=()=>{
    return(
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    )
}
const Root=createRoot(document.getElementById('root'));
Root.render(<App/>)