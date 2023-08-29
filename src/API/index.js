const COHORT = "2306-ghp-et-web-ft-sf";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT}`;
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGVkMmNlMzIxZDlkYjAwMTQ2YTBkZjQiLCJ1c2VybmFtZSI6Im9rIiwiaWF0IjoxNjkzMjc1MzcyfQ.2PyrLDNLPlxovK_w2bbkaGOBV-LcFBsE74v_RmqBahU"


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

  export async function newPost(title, description, price, willDeliver) {
    try {

      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            post: {
                title: title,
                description: description,
                price: price,
                willDeliver: willDeliver,
        }
    })
      });
      const result = await response.json();
      return result;
      
    } catch (error) {
      console.error(error);
      
    }
  }
  
  export async function deletePost() {
    try {
      const response = await fetch(`${BASE_URL}/posts/64ed434b21d9db00146d566d`, {
        method: "DELETE",
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  }


  export async function registerUser(username, password) {
    try {
  const response = await fetch(
    `${BASE_URL}/users/register`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: username,
        password: password
      },
    })
  });
  const result = await response.json();

  console.log(result)
  return result
} catch (err) {
  console.error(err);
}
}

  export async function login(username, password) {
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password
          }
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }

  export async function myData() {
    try {
      const response = await fetch(`${BASE_URL}/users/me`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGVkMmNlMzIxZDlkYjAwMTQ2YTBkZjQiLCJ1c2VybmFtZSI6Im9rIiwiaWF0IjoxNjkzMjY1MTIzfQ.Tj3wv66zfgJGje3kGgDFfNHI1nvAAELkS7APtVWYDj4}`
        },
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }

  export async function updatePost(title, description, price, location, willDeliver) {
    try {
      // You will need to insert a variable into the fetch template literal 
      // in order to make the POST_ID dynamic. 
      // 5e8d1bd48829fb0017d2233b is just for demonstration.
      const response = await fetch(`${BASE_URL}/posts/${POST_ID}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          post: {
            title: title,
            description: description,
            price: price,
            location: location,
            willDeliver: true
          }
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }

  // export default async function deletePost() {
  //   try {
  //     const response = await fetch(`${BASE_URL}/posts/${POST_ID}`, {
  //       method: "DELETE",
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${token}`
  //       }
  //     });
  //     const result = await response.json();
  //     console.log(result);
  //     return result
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }