import {Zoom} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'


export default function Home() {

  const images=[
    'src/assets/img1.jpg',
    'src/assets/img2.jpg',
    'src/assets/img3.jpg'
  ];


  return (

    <div>
      <Zoom scale={0.4}>
        {
            images.map((img,index)=><img key={index} style={{width:"100%",height:"600px"}} src={img}/>)
        }
      </Zoom>
    </div>
  )
}
