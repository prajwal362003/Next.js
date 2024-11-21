"use client";

const { useEffect, useState } = require("react");

const ProductList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    //   fetch("https://jsonplaceholder.typicode.com/comments")
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log(data);
    //       setPosts(data);
    //     });
    // }, []);

    // Fetch using async await
    async function fetchData() {
      try {
        const data = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        const response = await data.json();
        setPosts(response); // Update the state with the fetched data
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    }

    fetchData(); // Call the async function inside useEffect
  }, []);
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
