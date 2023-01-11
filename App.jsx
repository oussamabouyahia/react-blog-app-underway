import React from "react";
import AllPosts from "./components/AllPosts.jsx";
import Search from "./components/Search.jsx";
import OnePost from "./components/OnePost.jsx"
import CreatePost from "./components/CreatePost.jsx"

class App extends React.Component {
  constructor(props) {
    //The super keyword is used to call functions on an object's parent, including its constructor.
    // super keyword must be used before the this keyword is used in constructor .
    super(props);
    //Invoking super() calls the parent class constructor. If you want to pass some arguments in a class's
    // constructor to its parent's constructor, you call it with super(arguments).
    this.state = {
      username: window.location.search.substring(10), //DO NOT EDIT THIS LINE
      view: "allPosts",

    };
    this.changeView = this.changeView.bind(this);
  }

  changeView(view) {
    this.setState({
      view: view,
    });
  }

  renderView() {
    if (this.state.view === "allPosts") {
      return <AllPosts changeView= {this.changeView}/>;
    } else if (this.state.view === "onePost") {
      return <OnePost blog={}/>;
    } else if (this.state.view === "createPost") {
      return <CreatePost/>
    }
  }

  render() {
    return (
      <div>
        <nav className=" nav">
          <div
            className={
              this.state.view !== "createPost"
                ? "nav-unselected"
                : "nav-selected"
            }
            onClick={() => {
              this.changeView("createPost");
            }}
          >
            Create Post
          </div>
          <div
            className={
              this.state.view === "allPosts" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.changeView("allPosts")}
          >
            All Posts
          </div>
          <div>
            <Search />
          </div>
        </nav>

        {this.renderView()}
      </div>
    );
  }
}

export default App;
