import React from "react"
import { useNavigate,} from "react-router-dom";

function Profile() {
    
      const navigate = useNavigate();
      return (
        <>
           <p>profile page</p>
           <button onClick={() => { navigate("/");}}
           >change to home page</button>
        </>
    );
  }



  
  
  export default Profile;
  