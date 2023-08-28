const COHORT = "2306-ghp-et-web-ft-sf";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT}`;

export async function fetchPosts() {
    try {
      const response = await fetch(`${BASE_URL}/posts`)
  
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  };

  export async function fetchSinglePost(id) {
    try {
      //${id} comes from the front end and the URL
      const response = await fetch(`${BASE_URL}/posts/${id}`);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  };

  export async function newPost(/*username, password maybe?*/) {
    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
            post: {
                title: "My favorite stuffed animal",
                description: "Very nice",
                price: "$480.00",
                willDeliver: true
        }
    })
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  }
  
  export async function deletePost(id) {
    try {
      const response = await fetch(`${BASE_URL}/posts/${id}`, {
        method: "DELETE"
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  }