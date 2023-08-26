import Image from 'next/image';
import './society.css'
import Link from 'next/link';

export default async function Society() {
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


        <div className='card-placeholder'>
          <div className='card'>
            <div className="front">
                <h1 className=' text-4xl text-black'>CULT SOCIETY</h1>
                <Image
                src="/assets/cult.png"
                height={400}
                width={300}/>
            </div>
            <div className="back">
              <Link className=' absolute top-[8%] bg-gray-900 rounded-2xl shadow-xl' target='_blank'
                href="https://instagram.com/cult_iiitbh" ><h1>VIEW PAGE</h1></Link>
              <p className='absolute top-[16%] text-black text-justify rounded-2xl'>If you have that sensational voice or those charismatic steps Cult is all you need. A platform for all those who like to strike the right chords through music or move their bodies in a rhythmic way. CULT brings out the best in you and provide you with the platform to showcase your talent and entertainment to redeem you from the boredom of assignments and exams. Events like Sapphire, Glimpse, Bayaan or Beats of Bonanza can give you the perfect picture of what CULT is all about.</p>
            </div>
          </div>
        </div>

        <div className='card-placeholder'>
          <div className='card'>
            <div className="front">
                <h1 className=' text-4xl text-black'>E CELL</h1>
                <Image
                  src="/assets/e-cell white logo.png"
                  height={300}
                  width={400}/>
            </div>
            <div className="back">
              <Link className=' absolute top-[8%] bg-gray-900 rounded-2xl shadow-xl' target='_blank'
                href="https://instagram.com/iiitbh_ecell" ><h1>VIEW PAGE</h1></Link>
              <p className='absolute top-[16%] text-black text-justify rounded-2xl'>Entrepreneurship Cell is one of the most active cells for all the young minds who like to innovate and think dynamically. The main aim is to promote the entrepreneurship spirit. It conducts event which not only widens your spectrum but also develop you as an individual like the E-week, Funding Den, and frequent webinars by experienced mentors. D3-the Techno-management week was conducted in collaboration with Tech-Society recently.</p>
            </div>
          </div>
        </div>

        <div className='card-placeholder'>
          <div className='card'>
            <div className="front">
                <h1 className=' text-4xl text-black'>FATS</h1>
                <Image
                  src="/assets/fats.png"
                  height={300}
                  width={400}/>
            </div>
            <div className="back">
              <Link className=' absolute top-[8%] bg-gray-900 rounded-2xl shadow-xl' target='_blank'
                href="https://instagram.com/parda.productions" ><h1>VIEW PAGE</h1></Link>
              <p className='absolute top-[16%] text-black text-justify rounded-2xl'>{"The film and theatre society of IIIT Bhubaneswar needs no introduction. We all have that actor hiding inside us waiting for an opportunity to come out. Well FATS is your opportunity peers! FATS literally sets the stage for you to showcase your acting skills in front of the audience. Still want to know more? Well, why don't you watch them on YouTube. If not, then what are you waiting for?"}</p>
            </div>
          </div>
        </div>

        <div className='card-placeholder'>
          <div className='card'>
            <div className="front">
                <h1 className=' text-4xl text-black'>NAPS</h1>
                <Image className='bg-gray-200'
                  src="/assets/NAPS NEW LOGO.png"
                  height={300}
                  width={400}/>
            </div>
            <div className="back">
              <Link className=' absolute top-[8%] bg-gray-900 rounded-2xl shadow-xl' target='_blank'
                href="https://instagram.com/naps_iiit" ><h1>VIEW PAGE</h1></Link>
              <p className='absolute top-[16%] text-black text-justify rounded-2xl'>{"News and Publication Society is the literary club of IIIT Bhubaneswar. It is a platform to rise  up with amazing writeups be it poetry, short stories or any type of content writing. They believe that writing is for everyone. For better or for verse! Ingenium is the annual literary fest organised by NAPs along with various events like Shayari Nights, Open-mic shows, etc. You can find beautiful write-ups of further past events in their official monthly magazine 'The Insight'."}</p>
            </div>
          </div>
        </div>

        <div className='card-placeholder'>
          <div className='card'>
            <div className="front">
                <h1 className=' text-4xl text-black'>PARACOSM</h1>
                <Image className='bg-gray-200'
                  src="/assets/PARACOSM LOGO TRANSPARENT.png"
                  height={300}
                  width={400}/>
            </div>
            <div className="back">
              <Link className=' absolute top-[8%] bg-gray-900 rounded-2xl shadow-xl' target='_blank'
                href="https://instagram.com/paracosm.iiitbh" ><h1>VIEW PAGE</h1></Link>
              <p className='absolute top-[16%] text-black text-justify rounded-2xl'>Paracosm provides an environment for artistic minds to explore their creativity. May it be any event, the craftworks, decorations, and photo booths are beautifully managed by them. If you have creative ideas, artistic hands or a crafty mind, and the eagerness to create wonders, this is the right place for you. Events like Inktober, Art Relays, Exhibitions, Rangrez, etc are some of the beautiful contributions of this society.</p>
            </div>
          </div>
        </div>

        <div className='card-placeholder'>
          <div className='card'>
            <div className="front">
                <h1 className=' text-4xl text-black'>PHOTOGEEKS</h1>
                <Image className='bg-gray-200'
                  src="/assets/PHOTOGEEKS LOGO.png"
                  height={300}
                  width={400}/>
            </div>
            <div className="back">
              <Link className=' absolute top-[8%] bg-gray-900 rounded-2xl shadow-xl' target='_blank'
                href="https://instagram.com/photogeeks.iiit" ><h1>VIEW PAGE</h1></Link>
              <p className='absolute top-[16%] text-black text-justify rounded-2xl'>The official photography society of IIIT Bhubaneswar. Anyone interested in photography and capturing moments can gain lot of experience form the society members and contributes to it. It handles the precious duty of capturing beautiful memories of each event and creates memories worth a lifetime. It has conducted events like Tasveer, PhotoWalk and workshops.</p>
            </div>
          </div>
        </div>

        <div className='card-placeholder'>
          <div className='card'>
            <div className="front">
                <h1 className=' text-4xl text-black'>SPORTS SOCIETY</h1>
                <Image
                  src="/assets/sports.png"
                  height={300}
                  width={400}/>
            </div>
            <div className="back">
              <Link className=' absolute top-[8%] bg-gray-900 rounded-2xl shadow-xl' target='_blank'
                href="https://instagram.com/iiitbh_sports" ><h1>VIEW PAGE</h1></Link>
              <p className='absolute top-[16%] text-black text-justify rounded-2xl'>{"The official sports society of IIIT-Bh helps you maintain physical health and considers it to be man's greatest wealth. It provides great opportunity to interact with large number of people. It organises sports events like cricket, football, basketball intra championship and gives opportunity to represent the college in tournaments held in various IITs and NITs."}</p>
            </div>
          </div>
        </div>

        <div className='card-placeholder'>
          <div className='card'>
            <div className="front">
                <h1 className=' text-4xl text-black'>TARS</h1>
                <Image
                  src="/assets/tars.png"
                  height={300}
                  width={400}/>
            </div>
            <div className="back">
              <Link className=' absolute top-[8%] bg-gray-900 rounded-2xl shadow-xl' target='_blank'
                href="https://instagram.com/tarsiiitbh" ><h1>VIEW PAGE</h1></Link>
              <p className='absolute top-[16%] text-black text-justify rounded-2xl'>The automation and robotics society deals with the Technical and Automation parts. Core electronics and Robotics is dealt by TARS. It also consists of WebDev team and AI-ML team along with Research team who are supposed to update the team with new technologies and ideas, although workings (hardware & software) and ideas are dealt by Tech team independently. Exciting events like virtual bootcamps, drone events will ignite your robotics interest.</p>
            </div>
          </div>
        </div>

        <div className='card-placeholder'>
          <div className='card'>
            <div className="front">
                <h1 className=' text-4xl text-black'>TECH</h1>
                <Image
                  src="/assets/techsociety.png"
                  height={300}
                  width={400}/>
            </div>
            <div className="back">
              <Link className=' absolute top-[8%] bg-gray-900 rounded-2xl shadow-xl' target='_blank'
                href="https://instagram.com/techsociiitbh" ><h1>VIEW PAGE</h1></Link>
              <p className='absolute top-[16%] text-black text-justify rounded-2xl'>Under Tech society there are several sub societies like Psoc, Gdsc, Gfg chapter. The society regularly conducts sessions on both introductory and advanced skills. It has organised and in future will organise several competitions and hackathons to boost up dsa and dev skills of students. Students can avail the opportunity to network with seniors who have cracked product based companies like Microsoft, Uber, etc. It conducts exciting events in techno-management fests like D3.</p>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export const metadata = {
  title: "Socities -CSE Bootcamp 2.0",
  description: "Get to know about different societies in IIIT Bhubaneshwar",
};