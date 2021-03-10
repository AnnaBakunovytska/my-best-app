
import './App.css';
import { MyComponents } from "./components/MyComponents";
import { PostContainer } from "./components/Posts";
import { openPosts } from "./actions/posts";

function App(props) {

  return (
    <div className="App">
      <MyComponents.Header />
      <PostContainer />
    </div>
  );
}

export default App;
