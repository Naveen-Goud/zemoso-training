 
 
export const securedAPITest = async (token : string) => {  
  console.log("access token"+ token)
  try { 
    const response = await fetch("http://localhost:8080/auth0/private", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, 
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
      console.log(data);
    } else {
      console.error(`Failed to fetch data: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error(error);
  }
};
function getAccessTokenSilently(arg0: { audience: any; scope: any; }) {
    throw new Error('Function not implemented.');
}
export const publicAPITest = async ( ) => {  
  
  try { 
    const response = await fetch("http://localhost:8080/auth0/public", {
      method: "GET",
      headers: { 
        "Content-Type": "application/json",
      },
    }); 
    if (response.ok) {
      const data = await response.json();
      return data;  
    } else {
      console.error(`Failed to fetch data: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error(error);
  }
};