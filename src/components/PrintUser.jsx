import Icons from "./Icons"

const PrintUser = ({user}) => {
    return (
      <>
          <img src={user.avatar_url} alt={user.name} />
          <br />
          <h1>{user.name}</h1>
          <br />
          <h2>Web Developer - Web Designer</h2>
          <br />
          <p>{user.bio}</p>

          <Icons/>
      </>     
    )
  }
  
  export default PrintUser