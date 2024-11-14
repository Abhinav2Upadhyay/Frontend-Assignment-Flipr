import image_1 from "../assets/images/man-in-white-dress-shirt-sitting-on-black-rolling-chair-while-facing-black-computer-set-and-smiling-840996.svg";
import Button from "../components/Button";
import post_1_image from "../assets/images/two-women-in-front-of-dry-erase-board-1181533-1.svg";
import post_2_image from "../assets/images/photo-of-people-doing-handshakes-3183197.svg";
import post_3_image from "../assets/images/photo-of-woman-looking-at-man-3183173.svg";
import post_4_image from "../assets/images/photo-of-people-walking-on-hallway-3182811.svg";
import CategoryCards from "../components/CategoryCards";
import JoinOurTeamSection from "../components/JoinOurTeamSection";
import { useNavigate } from "react-router-dom";

function Blog() {
  const navigate = useNavigate();

  return (
    <>
      {/* <h1>Blog</h1> */}
      {/* section 1 - (banner) */}
      <section className="w-full">
        <div className="flex justify-between p-16 bg-pink-100">
          <div className="w-[55%]">
            <h2>FEATURED POST</h2>
            <p className="mt-4 text-4xl font-semibold">Step-by-step guide to choosing great font pairs</p>
            <p className="mt-6">By John Doe | May 23 2022</p>
            <p className="pr-4 mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi iste perferendis recusandae alias ipsam dignissimos.</p>
            <Button text="Read More >" onClickHandler={() => navigate("/blog-post")}  />
          </div>
          <div className="w-[40%]">
            <img src={image_1} alt="image" />
          </div>
        </div>
      </section>

      {/* section 2 (all posts) */}
      <section  className="px-16 mt-24">
        <h1 className="mb-20 text-4xl font-semibold">All Posts</h1>
        <div className="flex flex-col gap-16">
          {/* post 1 */}
          <div data-aos="fade-right" className="flex gap-12">
            <img src={post_1_image} alt="Post 1 image" />
            <div className="py-12">
              <p className="mb-6 text-lg text-purple-600">STARTUP</p>
              <h1 className="mb-4 text-4xl font-semibold">Design tips for designers that cover everything you need</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fugit sit libero quasi sapiente molestiae doloremque hic minus eum pariatur.</p>
            </div>
          </div>

          {/* post 2 */}
          <div data-aos="fade-left" className="flex gap-12">
            <img src={post_2_image} alt="Post 2 image" />
            <div className="py-12">
              <p className="mb-6 text-lg text-purple-600">BUSINESS</p>
              <h1 className="mb-4 text-4xl font-semibold">How to build rapport with your web design clients</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fugit sit libero quasi sapiente molestiae doloremque hic minus eum pariatur.</p>
            </div>
          </div>

          {/* post 3 */}
          <div data-aos="fade-right" className="flex gap-12">
            <img src={post_3_image} alt="Post 3 image" />
            <div className="py-12">
              <p className="mb-6 text-lg text-purple-600">STARTUP</p>
              <h1 className="mb-4 text-4xl font-semibold">Logo design trends to avoid in 2022</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fugit sit libero quasi sapiente molestiae doloremque hic minus eum pariatur.</p>
            </div>
          </div>

          {/* post 4 */}
          <div data-aos="fade-left" className="flex gap-12">
            <img src={post_4_image} alt="Post 4 image" />
            <div className="py-12">
              <p className="mb-6 text-lg text-purple-600">TECHNOLOGY</p>
              <h1 className="mb-4 text-4xl font-semibold">8 Figma design systems you can download for free today</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fugit sit libero quasi sapiente molestiae doloremque hic minus eum pariatur.</p>
            </div>
          </div>

          {/* post 5 */}
          <div data-aos="fade-right" className="flex gap-12">
            <img src={post_1_image} alt="Post 5 image" />
            <div className="py-12">
              <p className="mb-6 text-lg text-purple-600">ECONOMY</p>
              <h1 className="mb-4 text-4xl font-semibold">Font sizes in UI design: The compete guide to follow</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fugit sit libero quasi sapiente molestiae doloremque hic minus eum pariatur.</p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex items-center gap-4 text-lg font-semibold text-gray-500">
            <button className="hover:text-black hover:scale-105 active:scale-95">
              {"<"} Prev
            </button>
            <button className="hover:text-black hover:scale-105 active:scale-95">
              Next {">"}
            </button>
            </div>
          </div>

        </div>
        
      </section>

      {/* section 3 - (Choose a category)*/}
      <section data-aos="fade-up" className="px-16 mt-24">
        <h1 className="mb-12 text-4xl font-semibold ">All Categories</h1>
        <div>
          <CategoryCards />
        </div>
      </section>
      

      {/* section 4 - (JoinOurTeamSection) */}
      <section data-aos="fade-up" className="px-16 mt-24">
        <JoinOurTeamSection />
      </section>
    </>
  );
}

export default Blog;
