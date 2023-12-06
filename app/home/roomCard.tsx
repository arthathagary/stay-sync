import { Card } from '@/components/ui/card'
import { StaticImageData } from "next/image"
import Image from 'next/image'
import React from 'react'
import { FaStar } from "react-icons/fa";

interface Props { 
    image :  StaticImageData;
    alt : string;
    place: string;
    date : string;
    price : number;
}
const RoomCard = ({image,alt,place,date,price}:Props) => {
  return (
    <Card className='md:w-72 md:h-72 w-52 rounded-2xl'>
        <div>
        <Image src={image} alt={alt} style={{ borderRadius: '16px' }} />
        </div>
        <div>
            <div className='flex items-center justify-between'>
            <h1 className='font-bold'>{place}</h1>
            <div className='flex items-center gap-3'>
            <FaStar /> <p>4.8</p>
            </div>
            </div>
            <p className='text-muted-foreground'>Room Deatils</p>
            <p className='text-muted-foreground'>{date}</p>
        </div>
        <div>
            <h2 className='font-bold'>Rs.{price}</h2>
        </div>
    </Card>
  )
}

export default RoomCard