'use client'
//default is always server since clicking the icons and moving is in clients hand so we are chaning it to client (simple way if u want to use hooks i.e. usestate,pathname  u need to do client)
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils';
import Image from 'next/image';
import  Link  from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="sticky left-0 top-0 h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
        <div className="flex flex-1 flex-col gap-6">
            {sidebarLinks.map((link)=> {  //link here is just a kind of pointer that will move in sidebarlinks code 
                const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`); 

                return (
                  <Link
                  href={link.route}
                  key={link.label}
                  className={cn('flex gap-4 item-center p-4 rounded-lg justify-start',{ 'bg-blue-1': isActive,})} //this means that it will be as usuall when it is not selected but when it is selected then turn it blue that "isactive is true"
                  // cn allows us to add multiple classes and dynamic one and here when isActive is set to true then only second part will work
                  >  
                  <Image
                  src={link.imgUrl}
                  alt={link.label}
                  width={24}
                  height={24}
                  />
                  <p className="text-lg font-semibold max-lg:hidden ">  {/*for devices of min width below 1024px it will be hidden */}
                    {link.label} 
                  </p>
                  </Link>
                )
            })}
        </div>
    </section>
  )
}

export default Sidebar;