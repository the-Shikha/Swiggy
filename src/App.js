import React, { lazy, Suspense, useEffect, useState } from 'react'
import {createRoot} from 'react-dom/client';
import Header from "./components/Header"
import Body from "./components/Body"
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import {createBrowserRouter,Outlet,RouterProvider} from "react-router";
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';



const Grocery=lazy(()=>import('./components/Grocery'))

const App=()=>{
    const [userName,setUserName]=useState()
    useEffect(()=>{
        //FETCH
        const data={
            name:"Shikha"
        }
        setUserName(data.name)
    },[])
    return(
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
                <div className=''>
                    <Header/>
                    <Outlet/>
                </div>
            </UserContext.Provider>
        </Provider>
        
        
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            },
            {
                path:"/restaurants/:id",
                element:<RestaurantMenu/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ],
        errorElement:<Error/>
    },
    
])
const Root=createRoot(document.getElementById('root'));
Root.render(<RouterProvider router={appRouter}/>)


