import { NavLink } from "react-router-dom";

function Section({ title, more = false, items }) {
  return (
    <section>
      <header className="flex items-center justify-between">
        <h3 className="text-2xl text-white font-semibold tracking-tight">{title}</h3>
        {
          more && (
            <NavLink className={"text-xs font-semibold uppercase text-link hover:underline"} to={more}>see all</NavLink>
          )
        }
      </header>
      <div className="grid grid-cols-5">
        {items.map(item => (
          <NavLink key={item.id} to="/">
            {item.title}
          </NavLink>
        ))}
      </div>
    </section>
  )
}

export default Section