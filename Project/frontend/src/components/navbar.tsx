import * as React from 'react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()

    const handleHome = () => {
        navigate("/")
    }

    return (
        <div className="flex flew-grow bg-black">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Button
                        variant="ghost"
                        className="text-white m-4"
                        onClick={handleHome}>
                            Home
                        </Button>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Button
                        variant="ghost"
                        className="text-white m-4"
                        >
                            Profile
                        </Button>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>

    )
  }
  
  
  export default NavBar