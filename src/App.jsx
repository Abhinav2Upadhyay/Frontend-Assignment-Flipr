import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AboutUs from "./pages/AboutUs";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Author from "./pages/Author";

function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold ">Frontend Project</h1> */}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/blog" element={<Blog />} />            
          <Route path="/blog-post" element={<BlogPost />} />
          <Route path="/about-us" element={<AboutUs />} />     
          <Route path="/category" element={<Category />} />
          <Route path="/author" element={<Author />} /> 
          <Route path="/contact" element={<Contact />} />      
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
