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

      <lottie-player
          className='left-card'
          src="/animations/society1.json"
          background="transparent"
          speed="1"
          loop
          autoplay/>

        <lottie-player
          className='right-card'
          src="/animations/society2.json"
          background="transparent"
          speed="1"
          loop
          autoplay/>

        <lottie-player
          className='left-card'
          src="/animations/society3.json"
          speed="1"
          loop
          autoplay/>

        <lottie-player
          className='right-card'
          src="https://lottie.host/c7561713-c5a7-4cd3-becb-188099674eec/PFXmeRb60Y.json"
          speed="1"
          loop
          autoplay/>

        <lottie-player
          className='left-card'
          src="https://lottie.host/44e21f05-0bf3-4615-9ee1-9fd688806b44/h5NAGTRDW5.json"
          speed="1"
          loop
          autoplay/>
        
      </div>
    </>
  )
}

export const metadata = {
  title: "Socities -CSE Bootcamp 2.0",
  description: "Get to know about different societies in IIIT Bhubaneshwar",
};