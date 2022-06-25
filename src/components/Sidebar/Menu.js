import { Icon } from 'Icons';
import { NavLink } from "react-router-dom";

function Menu() {
    let activeStyle = {
        color: "rgb(255 255 255)",
        backgroundColor: "#282828"
    };
    

  return (
    <nav className="px-2">
        <ul className="flex flex-col">
            <li>
                <NavLink exact to={"/"}>
                    {({ isActive }) => (
                        <span style={isActive ? activeStyle : undefined} className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4">
                            { isActive ? <Icon name="homeActive" /> : <Icon name="home" /> }
                            Ana sayfa
                        </span>
                    )}
                </NavLink>
            </li>
            <li>
                <NavLink exact to={"/search"}>
                    {({ isActive }) => (
                        <span style={isActive ? activeStyle : undefined} className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4">
                            { isActive ? <Icon name="searchActive" /> : <Icon name="search" /> }
                            Ara
                        </span>
                    )}
                </NavLink>
            </li>
            <li>
                <NavLink exact to={"/collection"}>
                    {({ isActive }) => (
                        <span style={isActive ? activeStyle : undefined} className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4">
                            { isActive ? <Icon name="collectionActive" /> : <Icon name="collection" /> }
                            Kitaplığın
                        </span>
                    )}
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Menu