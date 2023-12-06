import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ModeToggle } from '@/components/toggle-mode'
import NavBar from '@/components/NavBar'
import HomePage from './home/page'

export default function Home() {
  return (
        <div>
          {/* <Button>Click me</Button>
          <ModeToggle /> */}
          <HomePage />
        </div>
      
   
    
  )
}
