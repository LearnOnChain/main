import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import{AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram, AiFillMediumSquare} from "react-icons/ai";
import Image from "next/image";
import learnhomepage from "../public/learnhomepage.png";
import learnbanner from "../public/learnbanner.png";

export default function Home() { 
  return (
    <main className="h-full w-full bg-white relative">
    <header className="bg-[#4FA3ab] h-12 w-full bg-cover object-cover">
      <div className="container">
        </div>
          <Image src={learnbanner} className="px-10 h-12 w-auto" alt={''}></Image>
          <button className="flex px-5 py-2 gap-3 mx-auto h-max w-auto text-3xl text-white absolute top-0 right-0">
            <AiFillInstagram> {"https://www.instagram.com/learnonchain"} <AiFillInstagram/>
            <AiFillLinkedin href="https://www.linkedin.com/in/learnonchain-web3-82a155269"  />
            <AiFillMediumSquare href="https://medium.com/@learnonchain" />
            <AiFillTwitterCircle href="https://www.twitter.com/@learn_onchain" />
          </button>
        </header>

        <section className="bg-white px-10 py-5">
          <div className="min-h-screen">
            <div className="mx-auto h-auto max-w-5xl mb-5">
              <Image src={learnhomepage} alt={''}></Image>
              </div>
              <div className="text-black text-5xl text-center py-10">
              Coming Soon!
              </div>
            </div>  
            
         </section>
            
     </main>  
  );
}
