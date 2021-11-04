import React from "react";
import "./article.scss";
import { createArticle } from "../../actions/articles";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const Article: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = React.useState("");
  const [about, setAbout] = React.useState("");
  const [write, setWrite] = React.useState("");
  const [tag, setTag] = React.useState([]);

  const handleTitle = (e: any) => {
    setTitle(e.target.value);
  };

  const handleAbout = (e: any) => {
    setAbout(e.target.value);
  };

  const handleWrite = (e: any) => {
    setWrite(e.target.value);
  };

  const handleTag = (e: any) => {
    // let tag = e.target.value;
    // let tagList = [];
    // tagList.push(tag);
    // setTag(tagList);
  };

  const handleCreateArticle = () => {
    dispatch(createArticle(write, about, tag, title));
    history.push("/");
  };

  return (
    <div className="article">
      <div className="form-group">
        <input
          type="text"
          name="title"
          placeholder="Article Title"
          onChange={handleTitle}
        />
        <input
          type="text"
          name="about"
          placeholder="What's this article about?"
          onChange={handleAbout}
        />
        <textarea
          name="write"
          placeholder="Write your article"
          onChange={handleWrite}
        />
        <input
          type="text"
          name="tag"
          placeholder="Enter tag"
          onChange={handleTag}
        />
        <button onClick={handleCreateArticle}>Publish Article</button>
      </div>
    </div>
  );
};

export default Article;
