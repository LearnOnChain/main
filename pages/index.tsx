import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import{AiFillTwitterCircle, AiFillInstagram, AiFillMediumSquare} from "react-icons/ai";
import Image from "next/image";
import learnhomepage from "../public/learnhomepage.png";
import learnbanner from "../public/learnbanner.png";
import Link from "next/link"
import { FaDiscord } from "react-icons/fa"

export default function Home() { 
  return (
    <main className="h-auto w-auto bg-white relative">
    <header className="bg-[#4FA3ab] h-12 w-auto bg-cover object-cover">
      <div className="container h-auto w-auto">
        </div>
          <Image src={learnbanner} className="px-7 py-0.5 h-10 mx-0 w-auto" alt={''}></Image>
          <button className="flex px-5 py-2 gap-3 mx-auto h-max w-auto text-3xl text-white absolute top-0 right-0">
            <Link href="https://www.instagram.com/learnonchain"><b><AiFillInstagram/></b></Link>
            <Link href="https://www.twitter.com/@learn_onchain"><b><AiFillTwitterCircle/></b></Link>
            <Link href="https://discord.gg/wzTyvjufhy"><b><FaDiscord/></b></Link>
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
              <div className="text-3xl text-center">
              <Link href="https://www.medium.com/@aaronjameswebb">Litepaper</Link>
              </div>
    
            </div>  
            
         </section>
            
     </main>  
  );
}