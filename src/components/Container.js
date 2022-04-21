import './Container.css'

function Container(props){
    return(
     <div className='container'>
         <div className='vip'>
        <h1>Online Users 875/2,452</h1>
            <div className='block'>
               <img src={props.profilePic}/>
                  <h3>{props.username}</h3>
                  <h5>About</h5>
                     <p>{props.userInfo}</p>
               <a href="#"><b>web:</b> https//phin.dey</a>
               <a href="#"><b>twitter:</b> https//twitter.com/phin</a>
            </div>
            </div>
     </div>
    )
}

export default Container