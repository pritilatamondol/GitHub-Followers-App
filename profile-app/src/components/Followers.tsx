
import { userdata } from '../App'
import UserProfile from './UserProfile'

type followersProps= {
    followersData: userdata[],
    findFollowers: (user: userdata)=> void
}
function Followers( { followersData, findFollowers }: followersProps) {
  return (
    <div>
       <h2>Followers</h2>
       <section className='fcard'>
         { followersData.map( (follower: userdata )=> ( <UserProfile key={follower.login} user={follower} 
           findFollowers={ ()=>findFollowers(follower) }/>) )}
        </section>    
    </div>
  )
}

export default Followers
