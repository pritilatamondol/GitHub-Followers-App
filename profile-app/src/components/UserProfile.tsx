import { userdata } from '../App'

export type userProps = {
  user: userdata,
  findFollowers: ( data : userdata) => void  
}

function UserProfile(  { user, findFollowers } : userProps ) {
   
  return (
    <div className='user-profile'>
      <div> {user.login}</div>
      <div> <img width="100" height="100" src={user.avatar_url} alt="Avatar" /></div>
      <div> {user.location}</div>
      <div>Created At: {user.created_at}</div>
      <div>
        <button className='btn' onClick={()=>findFollowers(user)}>Find my Followers</button>
      </div>
      {/* { followers.length > 0 &&  <Followers followersData={followers}  findFollowers={ findFollowers }/>} */}
    </div>
  )
}

export default UserProfile
