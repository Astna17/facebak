import './App.css';
import { Header } from './main/header.jsx';
import { NavBar } from './main/nav-bar';
// import { Post } from './modules/post/post';
import "./main/main.css";
// import { PostList } from './modules/post/1-post-list';
import { NewPost } from './modules/post/new-post';
// import { Profil } from './modules/profil/profil.jsx';
// import { Login } from './modules/login-singin/login';

function App() {
  return (
    <>
      <Header />
        <main>
          <NavBar />
          {/* <PostList/> */}
          <NewPost/>
          {/* <Post /> */}
          {/* <Profil/> */}
          {/* <Login/>  */}
        </main>
    </>
  );
}

export default App;