'use client';
import Image from "next/image";
import Link from "next/link";
import {FaChevronDown,} from 'react-icons/fa'
import {FiAlertTriangle, FiUsers} from 'react-icons/fi'
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { FaGear } from "react-icons/fa6";
import { LuCctv } from "react-icons/lu";
import { TbCube3dSphere } from "react-icons/tb";
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { usePathname } from "next/navigation";
const navLinks = [
  { href: '/dashboard', label: 'Dashboard', icon: BsFillGrid1X2Fill },
  { href: '/cameras', label: 'Cameras', icon: LuCctv },
  { href: '/scenes', label: 'Scenes', icon: FaGear },
  { href: '/incidents', label: 'Incidents', icon: FiAlertTriangle },
  { href: '/users', label: 'Users', icon: FiUsers },
  { href: '/3d', label:'3D',icon:TbCube3dSphere}
]

export default function Navbar(){
    const pathname=usePathname()
    return(
        <header className="w-full border-b sticky top-0 z-50 bg-black">
            <div className="container mx-auto flex justify-between items-center p-4">
                <Link href='/' className="text-xl font-bold ">
                    <Image src='/logo.png' alt='logo' width={120} height={26} priority />
                </Link>

                <nav className="flex gap-6 text-xs font-bold">
                    {navLinks.map(({ href, label, icon: Icon }) => {
                         const isActive = pathname === href
                         return (
                          <Link
                             key={href}
                             href={href}
                             className={`flex items-center gap-2 text-sm ${
                                 isActive ? 'font-bold text-white' : 'text-white'
                              }`}
                             >
                              <Icon size={16} className={isActive ? 'text-yellow-400' : ''} />
                              <span>{label}</span>
                          </Link>
                        )
                      })}
                </nav>

                <div className="flex items-center gap-3">
                    <Avatar className='flex items-center gap-3'>
                        <AvatarImage src='/avatar.jpg' alt='user'/>
                        <AvatarFallback>MA</AvatarFallback>
                    </Avatar>
                    <div className="text-sm leading-tight text-white hidden sm:block">
                        <p className="font-semibold">Abhay Pawar</p>
                        <p className="text-xs text-gray-400">pawar2abhay1910@gmail.com</p>
                    </div>
                    <FaChevronDown className="text-white text-xs"/>
                </div>
            </div>
        </header>
    )
}