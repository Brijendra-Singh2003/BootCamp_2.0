import './society.css'
import Lottie from '@/components/animations/Lottie';

function Society() {
  return (
    <>
    <Lottie
        className='middle-card'
        src="https://lottie.host/7cab2c58-4430-45c7-acec-1c5756661ed2/IZsNX0UedL.json"/>
    <div>
      <p className='text'>
        SOCIETIES
      </p>
    </div>

    <div className="container">
      <Lottie
          className='left-card'
          src="https://lottie.host/d50c2b17-e9cb-48fd-b398-ebc016684817/9xMhusflLl.json"/>

        <Lottie
          className='right-card'
          src="https://lottie.host/ffb8224c-0789-4a89-ac59-c85c8958541c/aof29xsnyr.json"/>

        <Lottie
          className='left-card'
          src="https://lottie.host/360f78e9-4acb-4728-9404-d62c4fda20b4/pJVVstSbOg.json"/>

        <Lottie
          className='right-card'
          src="https://lottie.host/c7561713-c5a7-4cd3-becb-188099674eec/PFXmeRb60Y.json"/>

        <Lottie
          className='left-card'
          src="https://lottie.host/44e21f05-0bf3-4615-9ee1-9fd688806b44/h5NAGTRDW5.json"/>
        
      </div>
    </>
  )
}

export default Society;

export const metadata = {
  title: "Socities -CSE Bootcamp 2.0",
  description: "Get to know about different societies in IIIT Bhubaneshwar",
};