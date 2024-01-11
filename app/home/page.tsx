import { notFound } from 'next/navigation'
import RoomCard from './roomCard'
// import roomDetails from './roomDetails'
import prisma from '@/prisma/client'

const HomePage = async () => {
 
  const roomDetails = await prisma.roomDetail.findMany({})
  if(!roomDetails) return notFound()
  return (
    <div className='grid md:grid-cols-4 grid-cols-1 md:px-20 mt-4'>
        {roomDetails.map((roomDetail,index)=>(
            <RoomCard key={index} alt={roomDetail.name}  date={roomDetail.type} place={roomDetail.type} price={roomDetail.price}/>
        ))}
    </div>
  )
}

export default HomePage