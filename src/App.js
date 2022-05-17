import './App.css'
import Post from './components/Post'

function App (){
  const posts = [
      {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      },
      {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
      }
    ]
  return(
   <div>
     {posts.map((el) => {
       return(
       <Post title={el.title} completed={el.completed}/>
       )
     })}
   </div>
    )
}


export default App