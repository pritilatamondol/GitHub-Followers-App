import { useState, MouseEvent } from 'react';

import UserProfile from './components/UserProfile'
import UsersSearch from './components/UsersSearch';
import Followers from './components/Followers';

export type userdata ={
  login: string 
  avatar_url: string,
  location: string,
  created_at: string,
}
export type followersData ={
  followers : userdata[]
}

function App() {
  
  const [user, setUser] = useState<userdata>();
  const [error, setError]  = useState('');
  const [followers, setFollowers] = useState<followersData>([]);
  const [loading, setLoading] = useState(false);
  

  //Find the github user
  const handleSubmit =( e: MouseEvent, val: string )=> {
    //console.log("submit:" + e.target);
    e.preventDefault();
    if(val.length === 0)  {
      setError("Please enter user name");
      return;
    }
    const controller = new AbortController();
    setLoading(true)
    const userUrl = `https://api.github.com/users/${val}`;
     fetch(userUrl, {signal: controller.signal}).then(res=>{
      if(res.ok)
        return res.json();
       else {
         throw new Error("Could not fetch data:" + res.status)
      }
    })
     .then(data=> setUser( data))
     .catch((error)=> {
        console.log(error);
        setError( error.message );
        
     }).finally(()=>setLoading(false));
    
  }

  //Find user's followers
function findFollowers(user: userdata ){
   //console.log("Followers");
   const followersUrl =  `https://api.github.com/users/${user.login}/followers`;
   console.log("followersUrl:" + followersUrl)
   fetch( followersUrl ).then(res=> res.json())
       .then(data=> {
            setFollowers(data);
            setUser( user );
       }).catch(err=>{
           setError(err.message);
       })
}

  return (
    <>
      <h2>My Dashboard</h2>
      {error && <p>{error}</p>}
     
      <UsersSearch handleSubmit={handleSubmit}/>
      <div>
      {loading && <p>Loading...</p>}
        { user!= null && <UserProfile user={user} findFollowers={findFollowers} />}
      </div>
      { followers.length > 0 &&  <Followers followersData={followers}  findFollowers={ findFollowers }/>} 
    </>
  )
}

export default App;
