export function fetchData() {
    return fetch('http://localhost:8080/profil')
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error fetching data:", error);
        throw error;
      });
  }
  
  export function sendData(data) {
    return fetch('http://localhost:8080/profil', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error sending data:", error);
        throw error;
      });
  }
  
  async function fetchPostData() {
    try {
      const response = await fetch('http://localhost:8080/profil');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
  
export { fetchPostData };