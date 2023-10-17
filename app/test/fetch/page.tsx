'use client'
import { useEffect, useState } from 'react';
const url = "https://jsonplaceholder.typicode.com/users/1";
/** 
  // Sample Response
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
  }
**/

interface IUserData {
  name?: string
  website?: string
  email?: string
  phone?: string
}

/** 
  Challenge: Given the url above, make this app fetch the data and display them in the browser (Small Hint: use `React.useEffect and fetch api`)
  
  Solution: https://codepen.io/angelo_jin/pen/zYEWZdW
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/
export default function App() {
  const [userData, setUserData] = useState<IUserData>({});
  
  useEffect(() => {
    fetch(url).then(async (response) => {
      const user = await response.json();
      setUserData(user);
    })
  }, [])

  // No need to touch code below
  return (
    <div className="App">
      <h2>User Data</h2>
      <p>
        <strong>Name: </strong>{" "}
        {userData.name || "(Need to populate name here)"}
      </p>
      <p>
        <strong>Website: </strong>
        {userData.website || "(Need to populate website here)"}
      </p>
      <p>
        <strong>Email: </strong>
        {userData.email || "(Need to populate email here)"}
      </p>
      <p>
        <strong>Phone: </strong>
        {userData.phone || "(Need to populate phone here)"}
      </p>
    </div>
  );
}

/**
  All Exercises and Solutions from the video for your convenience
  https://youtu.be/VzNNjNmbXpY

  Exercises:
  Display simple JSX 
    - https://codepen.io/angelo_jin/pen/wvrygZa
  Display array of users to browser
    - https://codepen.io/angelo_jin/pen/QWqQdXE
  Show/Hide Element on Screen
    - https://codepen.io/angelo_jin/pen/zYERZZL
  2 way data binding in ReactJS
    - https://codepen.io/angelo_jin/pen/MWEQmqN
  Disable a button
    - https://codepen.io/angelo_jin/pen/YzrazGY
  Update the parent state
    - https://codepen.io/angelo_jin/pen/JjrLjOy
  Dynamically add child components (React Children)
    - https://codepen.io/angelo_jin/pen/BawrpeX
  Sum of Two Numbers
    - https://codepen.io/angelo_jin/pen/zYEWZNR
  Create Counter App
    - https://codepen.io/angelo_jin/pen/mdBxWwN
  Fetch data from an API
    - https://codepen.io/angelo_jin/pen/oNGqZpm

  Solutions:
  Display simple JSX 
    - https://codepen.io/angelo_jin/pen/xxXrZLd
  Display array of users to browser
    - https://codepen.io/angelo_jin/pen/wvreMpZ
  Show/Hide Element on Screen
    - https://codepen.io/angelo_jin/pen/abLwyrL
  2 way data binding in ReactJS
    - https://codepen.io/angelo_jin/pen/yLzvMop
  Disable a button
    - https://codepen.io/angelo_jin/pen/dyVmyYz
  Update the parent state
    - https://codepen.io/angelo_jin/pen/KKXoKgO
  Dynamically add child components (React Children)
    - https://codepen.io/angelo_jin/pen/MWEVJNb
  Sum of Two Numbers
    - https://codepen.io/angelo_jin/pen/BawrWzy
  Create Counter App
    - https://codepen.io/angelo_jin/pen/yLzKMXX
  Fetch data from an API
    - https://codepen.io/angelo_jin/pen/zYEWZdW
**/
