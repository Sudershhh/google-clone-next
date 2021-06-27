import Head from 'next/head'
import Avatar from "../components/Avatar"
import {ViewGridIcon, MicrophoneIcon} from "@heroicons/react/solid"
import { SearchIcon} from "@heroicons/react/outline"
import Image from "next/image"
import Footer from '../components/Footer'
import {useRef} from "react"
import {useRouter} from "next/router"

export default function Home() 
{

  const router = useRouter();
  const searchRef = useRef(null);

  const search = (event) => 
  {
    event.preventDefault();
    const searchTerm = searchRef.current.value;
    if(!searchTerm)
    {
      return;
    }
    else
    {
      router.push(`/search?term=${searchTerm}`)
    }

  }




  return (
    <div>
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Generated by Google search Engine" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <header className="flex w-full p-5 justify-between text-sm text-gray-700">

        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p  className="link">Store</p>
        </div>
        
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>

          <Avatar url="https://static.thenounproject.com/png/538846-200.png" />

        </div>
      </header>

      <main>
        <form className="flex flex-col items-center mt-44 flex-grow">
          <Image src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" height={100} width={300} alt="Google Logo" />
          <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
            <SearchIcon className="h-5 mr-3 text-gray-500" />
            <input type="text" className="focus:outline-none flex-grow" ref={searchRef} />
            <MicrophoneIcon className="h-5" />
          </div>

          <div className="flex flex-col w-1/2 justify-center mt-8 sm:flex-row sm:space-x-4 space-y-2 lg:space-y-0 md:space-y-0">
            <button className="btn" onClick={search}>Google Search</button>
            <button className="btn">I am Feeling Lucky</button>
          </div>
        </form>
      </main>

      <footer className="absolute bottom-0 left-0 w-full">
        <Footer />
      </footer>

    </div>
  )
}

