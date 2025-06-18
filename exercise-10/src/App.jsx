import UserList from "./UserList";

const App = () => {
  const Users=[
    {ID:1,name:"Abdalla",Email:"devabdulla25@gmail.com"},
    {ID:2,name:"Nour",Email:"Nour@gmail.com"},
    {ID:3,name:"Farah",Email:"Farah@gmail.com"},
    {ID:4,name:"Fartun",Email:"Fartun@gmail.com"},
    {ID:5,name:"Falis",Email:"Falis@gmail.com"},
  ]
  return (
    <div>
      <h1>Users List</h1>
      <UserList Users={Users}/>
    </div>
  )
}

export default App;
