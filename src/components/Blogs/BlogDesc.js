import React, { Fragment, useEffect, useState } from "react";
import BlogsBanner from "./BlogsBanner";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import BlogList from "./BlogList";

function BlogDesc() {
  const { _ID } = useParams();

  const [blog, setblog] = useState([]);
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL_ECOSOCH}/api/auth/get/blogs/${_ID}`
        );
        setblog(response.data);
        // console.log(response.data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchBlog();
  }, [_ID]);

  return (
    <Fragment>
      <BlogsBanner />
      <Container fluid style={{ width: "85%" }} className="ptb--50">
        <h1 className="title">{blog.blogTitle}</h1>
        <p>{blog.blogThumnailDesc}</p>
        <div
          className="ptb--50"
          dangerouslySetInnerHTML={{ __html: blog.blogDesc }}
        ></div>
        <div className="related ptb--50">
          <BlogList />
        </div>
      </Container>
    </Fragment>
  );
}

export default BlogDesc;
