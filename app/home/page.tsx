import RoomCard from './roomCard'
import roomDetails from './roomDetails'

const HomePage = () => {
  return (
    <div className='grid md:grid-cols-4 grid-cols-1 md:px-20 mt-4'>
        {roomDetails.map((roomDetail,index)=>(
            <RoomCard key={index} alt={roomDetail.alt} image={roomDetail.image} date={roomDetail.date} place={roomDetail.place} price={roomDetail.price}/>
        ))}
    </div>
  )
}

export default HomePage