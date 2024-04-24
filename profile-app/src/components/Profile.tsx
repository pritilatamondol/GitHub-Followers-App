import UserProfile from "./UserProfile";

type profileProp = {
    name: string,
    email: string,
    bio: string,
    avatar: string
}
function Profile( { profileData : profileProp }) {

    const {name, email, bio, avatar } = profileProp;

  return (
    <div className='profile'>
        <div className='avatar'>
            <img alt="Avatar logo" src={avatar} />
        </div>
        <div className="info">
            <div>User Name: {name}</div>
            <div>Email: {email}</div>
            <div>Bio: {bio}</div>
        </div>
      
    </div>
  )
}

export default Profile
