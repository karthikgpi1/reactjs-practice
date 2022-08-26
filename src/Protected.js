function Protected() {
  const isLoggedIn = false;
    return (
      <>
      
        {isLoggedIn ? <p>protected page</p> : <p>please login</p>};
      
      </>
    );
  }
  
  export default Protected;