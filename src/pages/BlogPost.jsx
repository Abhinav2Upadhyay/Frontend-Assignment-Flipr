import startupIcon from "../assets/Icons/startupIcon.svg";
import user_image from "../assets/images/user_image.svg";
import section_2_image from "../assets/images/photo-of-woman-wearing-eyeglasses-3184405.svg"
import section_4_post_1_image from "../assets/images/two-women-in-front-of-dry-erase-board-1181533-1.svg"
import section_4_post_2_image from "../assets/images/photo-of-people-doing-handshakes-3183197.svg"
import section_4_post_3_image from "../assets/images/photo-of-woman-looking-at-man-3183173.svg"
import JoinOurTeamSection from "../components/JoinOurTeamSection";

function BlogPost() {

  return (
    <>
      {/* <h1>BlogPost</h1> */}
      {/* section 1 (post title) */}
      <section className="flex justify-center">
        <div className="flex flex-col gap-6 mt-24 w-[30%]">
          <div className="flex items-center text-purple-700">
            <img className="w-10 h-10 mr-4 bg-gray-300 rounded-full" src={user_image} alt="" />
            <div>
              <h2 className="text-xl font-semibold">Janathan Vallem</h2>
              <p className="text-sm">New York USA</p>
            </div>
          </div>
          <h1 className="text-2xl font-semibold">Step-by-step guide to choosing great font pairs</h1>
          <div className="flex items-center gap-3 font-semibold">
            <img className="w-5 h-5" src={startupIcon} alt="startupIcon" />
            Startup
          </div>
        </div>
      </section>

      {/* section 2 (post image) */}
      <section className="flex justify-center mt-24">
        <img className="w-[90%]" src={section_2_image} alt="" />
      </section>

      {/* section 3 (post content) */}
      <section className="flex flex-col items-center mt-24">
        <div className="w-[60%] mb-10">
          <h1 className="mb-10 text-3xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, dicta eligendi.</h1>
          <p>Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam voluptate, aperiam dolores quasi fuga similique quos ad voluptas nemo architecto? Lorem ipsum dolor sit amet. ipsum dolor sit amet consectetur adipisicing elit. Tempora cum esse voluptate, similique explicabo impedit nostrum eos officiis doloribus, voluptas ex iste! Dolores aut facilis cum sapiente blanditiis ipsam vitae.</p>
        </div>
        <div className="w-[60%] mb-10">
          <h1 className="mb-10 text-3xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, dicta eligendi.</h1>
          <p className="mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eveniet. ipsum dolor sit, amet consectetur adipisicing elit. Quam voluptate, aperiam dolores quasi fuga similique quos ad voluptas nemo architecto? Lorem ipsum dolor sit amet. ipsum dolor sit amet consectetur adipisicing elit. Tempora cum esse voluptate, similique explicabo impedit nostrum eos officiis doloribus, voluptas ex iste! Dolores aut facilis cum sapiente blanditiis ipsam vitae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eveniet. ipsum dolor sit, amet consectetur adipisicing elit. Quam voluptate, aperiam dolores quasi fuga similique quos ad voluptas nemo architecto? Lorem ipsum dolor sit amet. ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, reiciendis? </p>
        </div>
        <div className="w-[60%] mb-10">
          <ul className="text-xl font-semibold list-disc list-inside">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
          </ul>
        </div>
        <div className="w-[60%] mb-10">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eveniet. ipsum dolor sit, amet consectetur adipisicing elit. Quam voluptate, aperiam dolores quasi fuga similique quos ad voluptas nemo architecto? Lorem ipsum dolor sit amet. ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, reiciendis? </p>
        </div>
        <div className="w-[60%] mb-10">
          <h1 className="mb-10 text-3xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, dicta eligendi.</h1>
          <p>Lorem  dolor sit, amet consectetur adipisicing elit. Quam voluptate, aperiam dolores quasi fuga similique quos ad voluptas nemo architecto? Lorem ipsum dolor sit amet. ipsum dolor sit amet consectetur adipisicing elit. Tempora cum esse voluptate, similique explicabo impedit nostrum eos officiis doloribus, voluptas ex iste! Dolores aut facilis cum sapiente blanditiis ipsam vitae.</p>
        </div>
      </section>

      {/* section 4 (related posts) */}
      <section className="px-16 mt-24">
        <h1 className="mb-12 text-3xl font-semibold">What to read next</h1>
        <div className="flex justify-between ">
          <div onClick={() => window.scrollTo(0,0)} className="w-[32%] cursor-pointer p-5 hover:shadow-lg rounded-lg">
            <img className="w-full mb-6" src={section_4_post_1_image} alt="" />
            <p>By john Doe | Aug 23, 2021</p>
            <h1 className="mt-4 text-2xl font-semibold">AUX Case Study Creating a Studious Environment for Students:</h1>
            <p className="mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam maiores explicabo odit, quibusdam inventore assumenda rem? Distinctio eum veritatis deleniti!</p>
          </div>
          <div onClick={() => window.scrollTo(0,0)} className="w-[32%] cursor-pointer p-5 hover:shadow-lg rounded-lg">
            <img className="w-full mb-6" src={section_4_post_2_image} alt="" />
            <p>By john Doe | Aug 23, 2021</p>
            <h1 className="mt-4 text-2xl font-semibold">AUX Case Study Creating a Studious Environment for Students:</h1>
            <p className="mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam maiores explicabo odit, quibusdam inventore assumenda rem? Distinctio eum veritatis deleniti!</p>
          </div>
          <div onClick={() => window.scrollTo(0,0)} className="w-[32%] cursor-pointer p-5 hover:shadow-lg rounded-lg">
            <img className="w-full mb-6" src={section_4_post_3_image} alt="" />
            <p>By john Doe | Aug 23, 2021</p>
            <h1 className="mt-4 text-2xl font-semibold">AUX Case Study Creating a Studious Environment for Students:</h1>
            <p className="mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam maiores explicabo odit, quibusdam inventore assumenda rem? Distinctio eum veritatis deleniti!</p>
          </div>
          
        </div>
      </section>

      {/* section 5 - (JoinOurTeamSection) */}
      <section className="px-16 mt-24">
        <JoinOurTeamSection />
      </section>
    </>
  );
}

export default BlogPost;
