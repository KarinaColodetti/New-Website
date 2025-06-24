import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../../Header.jsx";
import Footer from "../../Footer.jsx";
import dustbowl from "/src/assets/bowldust.png";
import buffalohunting from "/src/assets/buffalohunting.png";

const blogPosts = [
  {
    to: "/blog/post1",
    img: { dustbowl },
    alt: "dust bowl",
    title: "O que aprendemos com o Dust Bowl",
    desc: "",
  },
  {
    to: "/blog/post2",
    img: { buffalohunting },
    alt: "Blog Post 2",
    title: "When greediness takes over",
    desc: "",
  },
  {
    to: "/blog/post3",
    img: "/src/assets/blog_post_3.jpg",
    alt: "Blog Post 3",
    title: "Blog Post 3",
    desc: "",
  },
  {
    to: "/blog/post4",
    img: "/src/assets/blog_post_4.jpg",
    alt: "Blog Post 4",
    title: "Blog Post 4",
    desc: "",
  },
  {
    to: "/blog/post5",
    img: "/src/assets/blog_post_5.jpg",
    alt: "Blog Post 5",
    title: "Blog Post 5",
    desc: "",
  },
];

function Blog() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth <= 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ajustar o índice para não ultrapassar o final
  useEffect(() => {
    if (currentIndex > blogPosts.length - visibleCount) {
      setCurrentIndex(Math.max(0, blogPosts.length - visibleCount));
    }
  }, [visibleCount, currentIndex]);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + visibleCount < blogPosts.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="container_testimonials">
      <div className="container_blog_posts">
        {blogPosts
          .slice(currentIndex, currentIndex + visibleCount)
          .map((post) => (
            <div className="card_blog_post" key={post.to}>
              <Link to={post.to} className="card_blog_post_link">
                <div className="card_blog_post_img">
                  <img src={post.img} alt={post.alt} />
                </div>
                <div className="card_blog_post_content">
                  <h2>{post.title}</h2>
                  <p>{post.desc}</p>
                </div>
              </Link>
            </div>
          ))}
      </div>
      <div className="testimonials_button_container">
        <button
          className="material-symbols-outlined-prev"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          {"<"}
        </button>
        <button
          className="material-symbols-outlined-next"
          onClick={handleNext}
          disabled={currentIndex + visibleCount >= blogPosts.length}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

export default Blog;
