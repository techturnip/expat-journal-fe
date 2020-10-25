import React, { useEffect /*, useState*/ } from "react";
import { Router } from "@reach/router";
import "./App.css";
import SignIn from "./views/auth/SignIn";
import SignUp from "./views/auth/SignUp";
import Home from "./views/Home";
import MainNav from "./components/MainNav";
import { getPosts } from "./store/actions/postActions";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  // const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsReducer.posts);

  useEffect(() => {
    const fetchData = async () => await dispatch(getPosts());

    if (posts) {
      fetchData();
    }
    // eslint-disable-next-line
  }, []);

  const renderPosts = () => {
    if (posts) {
      posts.map((post) => {
        return <li>{post.title}</li>;
      });
    }
  };

  return (
    <div className="App">
      <Router primary={false}>
        <MainNav path="/*" />
      </Router>
      <Router>
        <SignIn path="signin" />
        <SignUp path="signup" />
        <Home path="/" posts={posts} />
      </Router>
    </div>
  );
};

export default App;
