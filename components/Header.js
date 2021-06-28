import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid"
import Image from "next/image"
import {useRouter} from "next/router"
import {useRef} from "react"
import Avatar from "./Avatar"

function Header() {

    const router = useRouter()
    const searchInputRef = useRef()

    const search =(event) => {

        event.preventDefault()
        const term = searchInputRef.current.value;
        if(!term)
        {
        return;
        }
        else{
            router.push(`/search?term=${term}`)
        }

    }

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">

                <Image 
                        src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                        height={40}
                        width={120}
                        alt="Google Logo"
                        onClick={() => router.push("/") }
                        className="cursor-pointer"
                        />

                    <form className="flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5">
                        <input type="text" ref={searchInputRef} className="flex-grow w-full focus:outline-none" defaultValue={router.query.term} />
                        <XIcon  
                            className="h-7 sm:mr-1 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
                            onClick={() => searchInputRef.current.value =""}
                        />

                        <MicrophoneIcon 
                                        className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"
                        />

                        <SearchIcon  className="h-6 sm:inline-flex text-blue-500 ml-1" onClick={search} />
                    
                        <button hidden type="submit" onClick={search}>Search</button>
                    </form>

                    {/* <Avatar url="https://www.seekpng.com/png/detail/41-410093_circled-user-icon-user-profile-icon-png.png" /> */}
            </div>
        </header>
    )
}

export default Header
