import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const  DiffCard = ({mani}) => {
  
  return (
    <div className=' shadow-2xl mt-20 gap-3 ' >
          {
      mani.map(value =>{
        return(
          
      <div className=' '> 
       <Card className='w-56 h-64 shadow-2xl hover:border-2 hover:border-solid hover: border-red-500 '  >
       <div>
      <Card.Img className='w-52 h-36' src={`http://localhost:4000/${value?.img1}`} />
      </div>
      <Card.Body>
        <Card.Title>{value.Name}</Card.Title>
        <div>
        <h3>₹{value.prise}</h3>
       </div>
       {/* <div>
        <h3>{value.quantity}</h3>
       </div> */}
       <div className=''>
        <Button className='bg-red-500'>Add To cart</Button>
        </div>
      </Card.Body>
    </Card>
      </div> 
     
        )
     
       
    })

     }
    </div>
  )
}
export default DiffCard
