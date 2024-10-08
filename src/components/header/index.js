'use client'

import { Button } from "@/components/ui/button"
import {AlignJustify}  from 'lucide-react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import Link from "next/link"
import { UserButton } from "@clerk/nextjs"

function Header({user}) {

  const menuItems=[{
    label:'Home',
    path:'/',
    show:true
  },
  {
    label:'Login',
    path:'/sign-in',
    show:!user
  },
  {
    label:'Register',
    path:'/sign-up',
    show:!user
  },
  {
    label:'Jobs',
    path:'/jobs',
    show:user
  },
  {
    label:'Activity',
    path:'/activity',
    show:user
  },
  {
    label:'Membership',
    path:'/membership',
    show:user
  },
  {
    label:'Account',
    path:'/account',
    show:user
  }
]



  return (
    <div>
       <header className="flex h-16 shrink-0 items-center w-full">
         <Sheet>
            <SheetTrigger asChild >
                <Button className="lg:hidden">
                    <AlignJustify className="h-6 w-6"/>
                    <span className="sr-only">Toggle Navigation Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
               <Link className="mr-6 hidden lg:flex " href={'#'}>
                 <h3>JOBSCO</h3>
               </Link>
               <div className="grid gap-2 py-6">
                  {menuItems.map(item=>
                  item.show?
                  <Link href={item.path} className="flex w-full items-center py-2 text-lg font-semibold">{item?.label}</Link>
                   :null
                   )}
                     <UserButton afterSignOut="/"/>
               </div>
            </SheetContent>
         </Sheet>
         <Link className="hidden lg:flex mr-6" href={'/'}>JOBSCO</Link>
         <nav className="ml-auto hidden lg:flex gap-6">
            {
                menuItems.map(item=>item.show?
                    <Link href={item.path} className="group inline-flex h-9 w-max items-center rounded-md bg-white px-4 py-2 text-sm font-medium">
                        {item.label}
                        </Link>
                    :null)
            }
            <UserButton afterSignOut="/"/>
         </nav>
       </header>
    </div>
  )
}

export default Header
