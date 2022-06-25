import logo from 'img/logo.svg';
import Menu from './Sidebar/Menu';

function Sidebar() {
  return (
    <aside className="w-60 py-6">
      <img src={logo} className="h-10" alt="" />
      <Menu />
    </aside>
  )
}

export default Sidebar