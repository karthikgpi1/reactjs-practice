import React from "react"
import { useNavigate,} from "react-router-dom";

function Profile() {
    
      const navigate = useNavigate();
      return (
        <>
           <p>profile page</p>
           <button onClick={() => { navigate("/home");}}
           >change to home page</button>
        </>
    );
  }



  
  
  export default Profile;
  