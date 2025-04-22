import React from 'react'
import User from './User'
import UserClass from './UserClass'
// import UserContext from '../utils/UserContext'

class About extends React.Component{
  constructor (props){
    super(props)
    //console.log("Parent Constructor called")
  }
  componentDidMount(){
      //console.log("Parent ComponentDidMount called")
  }
  render(){
    //console.log("Parent Render called")
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-black mb-6 text-center">About Us</h1>
        {/* <div>
          User Data: 
          <UserContext.Consumer>
            {({loggedInUser})=>{<h1>{loggedInUser}</h1>}}
          </UserContext.Consumer>
        </div> */}
        {/* <User name={"Shikha (function)"} location={"Hyderabad"} contact={"shikha1@gmail.com"}/> */}
        <UserClass name={"Shikha"} location={"Hyderabad"} contact={"shikha2@gmail.com"}/>
        
      </div>
    )
  }
}


export default About
