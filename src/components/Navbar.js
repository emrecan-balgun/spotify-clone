import Navigation from "./Navbar/Navigation"
import Auth from "./Navbar/Auth"
// import { Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Search from "./Navbar/Search";


function Navbar() {
  let location = useLocation();

  return (
    <nav className="h-[3.7rem] flex items-center justify-between px-8">
        <Navigation />
        {
          location.pathname === "/search" && (
            <Search />
          )
        }
        {/* <Routes>
          <Route exact path="/" >Home</Route>
          <Route path="/search" >Search</Route>
          <Route path="/collection" >Collection</Route>
        </Routes> */}
        <Auth />
    </nav>
  )
}

export default Navbar