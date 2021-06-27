import Image from "next/image" 

function Avatar(props)
{
    const {url} = props;
    return (
        <Image src={url}
             loading="lazy"
              alt="Profile Picture"
              height={50}
              width={50}
             className="rounded-full ml-auto cursor-pointer transition duration-150 transform hover:scale-110">
            
        </Image>
    )
}

export default Avatar
