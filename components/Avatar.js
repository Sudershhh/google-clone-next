
function Avatar(props)
{
    const {url} = props;
    return (
        <img src={url}
             loading="lazy"
              alt="Profile Picture"
         
             className="rounded-full ml-auto h-10 cursor-pointer transition duration-150 transform hover:scale-110">
            
        </img>
    )
}

export default Avatar
