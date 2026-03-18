import UserCard from "./Components/UserCard"
import './App.css';
function App() {
  return (
    <div className="container">
      <UserCard name="Avadhi Jain" des="hello everyone.It is nice to meet you"></UserCard>
      <UserCard name="Kashish Vijay" des="i hope you are happy"></UserCard>
      <UserCard name="Akshita Bhargava"des="welcome everyone for comming here"></UserCard>
    </div>
  )
}

export default App
