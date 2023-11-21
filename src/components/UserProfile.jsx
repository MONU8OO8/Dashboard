import React, {useState} from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';

const UserProfile = () => {
  
  const [count, setCount] = useState("");
  const [name, setName] = useState("");
   

  const handleChane = (e)=>{
    setCount(parseInt(e.target.value));
  }

  const fetchRandomName = async()=>{
    try {
      const response = await fetch(`https://randomuser.me/api/?results=${count}`);
      const data = await response.json();
      const fetchName = data.results.map(
        (result)=> result.name.first + " " + result.name.last
      );
      setName(fetchName);
     
    }catch(error){
      console.log("error", error);
    }
  };

   


  return (
    <div className="nav-item absolute right-1 top-16 text-white bg-zinc-700 dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="containter">
        <h6>Enter any number to get random name from API</h6>
      <div className="center">
        <input type="number"
        value={count}
        onChange = {handleChane}
        className="border-black border-2 text-black"
        />
        
       
      <button onClick={fetchRandomName}  type="button" class="py-2.5 px-5 me-2 mb-2 ml-2 mt-2 text-sm font-medium text-white focus:outline-none bg-zinc-700 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Submit</button>
      
      </div>
     
       <div className="Names">
              {Array.isArray(name)?(
                name.map((n,i)=> <p key={i}>{n}</p>)
              ):(
                <p></p>
              )}

       </div>
       <div>
       </div>
       

    </div>

    </div>

  );
};

export default UserProfile;
