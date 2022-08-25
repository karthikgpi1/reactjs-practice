import { useNavigate, useLocation } from "react-router-dom";

// import { link } from "react-router-dom";




function Home(props) {
    console.log(props);
    
    const navigate = useNavigate();
    const goForward = useNavigate();
    const location = useLocation();

    function handleClick(){
        navigate("/posts");
    }
    return (
      <>
      <p>home page</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => goForward(1)}>Go Forward</button>
      <button onClick={handleClick}>Go to posts page - push</button>
      </>
    );
  }
  
  export default Home;
  