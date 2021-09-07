import { useEffect, useState } from "react";
import Header from "../../component/header/Header";
import Posts from "../../component/posts/Posts";
import "./home.css";
import { axiosInstance } from "../../config";
import { useLocation } from "react-router";
export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosInstance.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
      </div>
    </>
  );
}
