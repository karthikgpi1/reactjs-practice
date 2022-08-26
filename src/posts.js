import { useNavigate, useLocation } from "react-router-dom";

function Posts() {
  const navigate = useNavigate();
  const goForward = useNavigate();
  const location = useLocation();

  function handleClick(){
      navigate("/posts");
  }
  return (
    <>
    <p>posts page</p>
    <button onClick={() => navigate(-1)}>Go Back</button>
    <button onClick={() => goForward(1)}>Go Forward</button>
    <button onClick={handleClick}>Go to posts page - push</button>
    </>
  );
  }
  
  export default Posts;
  