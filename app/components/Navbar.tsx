import React from 'react'
import { FloatingNav } from '../ui/floating-navbar'
import { IconHome,IconUser,IconMessage } from '@tabler/icons-react'

function Navbar() {
  return (
    <div className='relative w-full'>
        <FloatingNav navItems={navItems}/>
    </div>
  )
}

export default Navbar



 const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

