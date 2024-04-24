import React, {useEffect, useState, useRef} from 'react'

type handleSummitProps ={
  handleSubmit: (e: React.FormEvent, value: string)=> void
}
function UsersSearch( { handleSubmit } : handleSummitProps) {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(()=>{
      inputRef?.current?.focus()
    }, [])
  return (
    <div className='search-container'>
     <form onSubmit={(e)=>handleSubmit(e, value)}>
       <label htmlFor='user'>Search GitHub User:{"  "}
          <input type="text" ref={inputRef} id="user" className="search" value={value} onChange={(e)=>setValue(e.target.value)}/>
        </label>
       <button className="btn">Submit</button>
       </form>
       
    </div>
  )
}

export default UsersSearch
