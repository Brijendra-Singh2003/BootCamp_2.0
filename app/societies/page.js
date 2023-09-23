import './society.css'
import { Society_card } from '@/components/society_card/society_card';
import anime from "@/public/animations/society-main.json"
import Lottie from '@/components/animations/Lottie';

export default async function Society() {
  return (
    <>
      <h1 className={"title"}>SOCIETIES</h1>
      <Lottie options={anime} className="middle-card" />

      <div className='no-select'>
        <p className={"desc"}>
          There is immense power when a group of people with similar interests gets together to work toward the same goals
        </p>
      </div>

      <div className="society-container container">

        <Society_card
          height="400"
          width="300"
          heading="CULT SOCIETY"
          src="/assets/cult.png"
          instagram="https://instagram.com/cult_iiitbh"
          para="If you have that sensational voice or those charismatic steps Cult is all you need. A platform for all those who like to strike the right chords through music or move their bodies in a rhythmic way. CULT brings out the best in you and provide you with the platform to showcase your talent and entertainment to redeem you from the boredom of assignments and exams. Events like Sapphire, Glimpse, Bayaan or Beats of Bonanza can give you the perfect picture of what CULT is all about."
        />
        <Society_card
          heading="E CELL"
          src="/assets/e-cell white logo.png"
          instagram="https://instagram.com/iiitbh_ecell"
          para="Entrepreneurship Cell is one of the most active cells for all the young minds who like to innovate and think dynamically. The main aim is to promote the entrepreneurship spirit. It conducts event which not only widens your spectrum but also develop you as an individual like the E-week, Funding Den, and frequent webinars by experienced mentors. D3-the Techno-management week was conducted in collaboration with Tech-Society recently."
        />
        <Society_card
          heading="FATS"
          src="/assets/fats.png"
          instagram="https://instagram.com/parda.productions"
          para="The film and theatre society of IIIT Bhubaneswar needs no introduction. We all have that actor hiding inside us waiting for an opportunity to come out. Well FATS is your opportunity peers! FATS literally sets the stage for you to showcase your acting skills in front of the audience. Still want to know more? Well, why don't you watch them on YouTube. If not, then what are you waiting for?"
        />
        <Society_card
          heading="NAPS"
          src="/assets/NAPS NEW LOGO.png"
          instagram="https://instagram.com/naps_iiit"
          para="News and Publication Society is the literary club of IIIT Bhubaneswar. It is a platform to rise  up with amazing writeups be it poetry, short stories or any type of content writing. They believe that writing is for everyone. For better or for verse! Ingenium is the annual literary fest organised by NAPs along with various events like Shayari Nights, Open-mic shows, etc. You can find beautiful write-ups of further past events in their official monthly magazine 'The Insight'."
        />
        <Society_card
          heading="PARACOSM"
          src="/assets/PARACOSM LOGO TRANSPARENT.png"
          instagram="https://instagram.com/paracosm.iiitbh"
          para="Paracosm provides an environment for artistic minds to explore their creativity. May it be any event, the craftworks, decorations, and photo booths are beautifully managed by them. If you have creative ideas, artistic hands or a crafty mind, and the eagerness to create wonders, this is the right place for you. Events like Inktober, Art Relays, Exhibitions, Rangrez, etc are some of the beautiful contributions of this society."
        />
        <Society_card
          heading="PHOTOGEEKS"
          src="/assets/PHOTOGEEKS LOGO.png"
          instagram="https://instagram.com/photogeeks.iiit"
          para="The official photography society of IIIT Bhubaneswar. Anyone interested in photography and capturing moments can gain lot of experience form the society members and contributes to it. It handles the precious duty of capturing beautiful memories of each event and creates memories worth a lifetime. It has conducted events like Tasveer, PhotoWalk and workshops."
        />
        <Society_card
          heading="SPORTS SOCIETY"
          src="/assets/sports.png"
          instagram="https://instagram.com/iiitbh_sports"
          para="The official sports society of IIIT-Bh helps you maintain physical health and considers it to be man's greatest wealth. It provides great opportunity to interact with large number of people. It organises sports events like cricket, football, basketball intra championship and gives opportunity to represent the college in tournaments held in various IITs and NITs."
        />
        <Society_card
          heading="TARS"
          src="/assets/tars.png"
          instagram="https://instagram.com/tarsiiitbh"
          para="The automation and robotics society deals with the Technical and Automation parts. Core electronics and Robotics is dealt by TARS. It also consists of WebDev team and AI-ML team along with Research team who are supposed to update the team with new technologies and ideas, although workings (hardware & software) and ideas are dealt by Tech team independently. Exciting events like virtual bootcamps, drone events will ignite your robotics interest."
        />
        <Society_card
          heading="TECH"
          src="/assets/techsociety.png"
          instagram="https://instagram.com/techsociiitbh"
          para="Under Tech society there are several sub societies like Psoc, Gdsc, Gfg chapter. The society regularly conducts sessions on both introductory and advanced skills. It has organised and in future will organise several competitions and hackathons to boost up dsa and dev skills of students. Students can avail the opportunity to network with seniors who have cracked product based companies like Microsoft, Uber, etc. It conducts exciting events in techno-management fests like D3."
        />
        <Society_card
          heading="VEDANTA SAMITI"
          src="/assets/vedantsamiti.png"
          instagram="https://instagram.com/techsociiitbh"
          para="Vedanta Samiti is mainly focused on celebrations. It has 4 major domains. Vedanta: The main organiser of festivals and fun events. Spicmacay: The national level society for the promotion of Indian classical music and culture amongst youth. YFS: Brings together like minded youth oriented organisations focused on sustainability as a way of life. IIIT Megahertz: The official broadcasting channel and face of iiit bh."
        />
      </div>
    </>
  )
}

export const metadata = {
  title: "Societies -CSE Bootcamp 2.0",
  description: "Get to know about different societies in IIIT Bhubaneshwar",
};