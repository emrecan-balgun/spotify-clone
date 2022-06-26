import { Menu } from '@headlessui/react'
import { Icon } from 'Icons';

function Auth() {
  const user = {
    name: "Emrecan Balgün",
    avatar: "https://i.scdn.co/image/ab6775700000ee856813b6dc88c8e40473f5a63e"
  }
  return (
    <Menu as="nav" className={"relative"}>
      {({ open }) => (
        <>
          <Menu.Button className={`flex items-center h-8 rounded-3xl pr-2 ${open ?" bg-active" : "bg-black"} hover:bg-active`}>
            <img src={user.avatar} className={"w-8 h-8 rounded-full p-0.5 mr-2"}/>
            <span className={"text-sm font-semibold mr-2"}>{user.name}</span>
            <span className={open && "rotate-180"}>
              <Icon name="downDir" size={16} />
            </span>
          </Menu.Button>
          <Menu.Items className={"absolute p-1 top-full right-0 w-48 bg-active rounded translate-y-2"}>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex justify-between items-center px-2 text-sm font-semibold rounded ${active && 'bg-white bg-opacity-10'}`}
                  href="#"
                >
                  Hesap
                  <Icon name="external" size={16} />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm font-semibold rounded ${active && 'bg-white bg-opacity-10'}`}
                  href="#"
                >
                  Profil
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex justify-between items-center px-2 text-sm font-semibold rounded ${active && 'bg-white bg-opacity-10'}`}
                  href="#"
                >
                  Destek
                  <Icon name="external" size={16} />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex justify-between items-center px-2 text-sm font-semibold rounded ${active && 'bg-white bg-opacity-10'}`}
                  href="#"
                >
                  İndir
                  <Icon name="external" size={16} />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm font-semibold rounded ${active && 'bg-white bg-opacity-10'}`}
                  href="#"
                >
                  Oturumu kapat
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  )
}

export default Auth