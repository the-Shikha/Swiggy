import React from "react";
class UserClass extends React.Component{
    constructor (props){
        super(props)
        // this.state={
        //     count1:0,
        //     count2: 1
        // }

        this.state={
            userInfo:{
                name:"Shikha",
                location:"India"
            }
        }

        //console.log("Child Constructor called")
        
    }
    async componentDidMount(){
        //console.log("Child ComponentDidMount called")
        const data=await fetch("https://api.github.com/users/ShikhaKumari01");
        const json=await data.json();
        console.log(json)
        this.setState({
            userInfo:json
        })
    }
    render(){
        const {name,location,avatar_url}=this.state.userInfo
        // const {count1,count2}=this.state
        //console.log("Child Render called")

        return (

            <div className="max-w-sm mx-auto bg-white p-6 rounded-2xl shadow-md text-center border border-orange-100">
                <img src={avatar_url} alt="" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-orange-500"/>
                <h2 className="text-xl font-semibold text-black mb-2">Name: {name}</h2>
                <p className="text-gray-600">Location: {location}</p>
                {/* <p>Contact: {contact}</p> */}
                {/* <h3>Count1 : {count1}</h3> */}
                {/* <button onClick={()=>{
                    this.setState(
                        {
                            count1:this.state.count1+1
                        }
                    )
                }}>Count Increase</button> */}
            </div>
        )
    }
}
export default UserClass