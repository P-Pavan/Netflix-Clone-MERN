import "./home.scss"
import NavBar from "../components/navbar/NavBar.jsx"
import Featured from "../components/featured/Featured.jsx"
import List from "../components/list/List.jsx"

export default function Home() {
  return (
    <div className="home">
        <NavBar />
        <Featured type="movie"/>
        <List />
        <List />
        <List />
        <List />
    </div>
  )
}
