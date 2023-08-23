import Image from 'next/image';
import './society.css'

export default function Society() {
  return (
    <>
      <lottie-player
          className='middle-card'
          src="/animations/society-main.json"
          speed="1"
          loop
          autoplay/>

      <div >
        <p className='text'>
          SOCIETIES
        </p>
      </div>

      <div className="container">

        <div className='card'>
          <Image
          src="/assets/e-cell white logo.png"
          height={400}
          width={300}/>
        </div>

        <div className='card'>
          <Image
          src="/assets/cult.png"
          height={400}
          width={300}/>
        </div>

        <div className='card'>
          <Image
          src="/assets/fats.png"
          height={400}
          width={300}/>
        </div>

        <div className='card'>
            <Image className='bg-gray-200'
            src="/assets/NAPS NEW LOGO.png"
            height={400}
            width={300}/>
        </div>
          

        <div className='card'>
          <Image
          src="/assets/PARACOSM LOGO TRANSPARENT.png"
          height={400}
          width={300}/>
        </div>

        <div className='card'>
          <Image
          src="/assets/PHOTOGEEKS LOGO.png"
          height={400}
          width={300}/>
        </div>

        <div className='card'>
          <Image
          src="/assets/sports.png"
          height={400}
          width={300}/>
        </div>

        <div className='card'>
          <Image
          src="/assets/tars.png"
          height={400}
          width={300}/>
        </div>

        <div className='card'>
          <Image
          src="/assets/techsociety.png"
          height={400}
          width={300}/>
        </div>
        
      </div>
    </>
  )
}

export const metadata = {
  title: "Socities -CSE Bootcamp 2.0",
  description: "Get to know about different societies in IIIT Bhubaneshwar",
};