function Protected() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
    return (
      <>
        <button onClick={() => {
            localStorage.setItem("isLoggedIn", true)
          }}
        >login
        </button>
        
        {isLoggedIn ? <p>protected page</p> : <p>please login</p>};
      
      </>
    );
  }
  
  export default Protected;