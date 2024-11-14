import { useParams } from "react-router-dom";
import post_image from "../assets/images/two-women-in-front-of-dry-erase-board-1181533-1.svg";
import CategoryCards from "../components/CategoryCards";


function Category() {
  const { categoryName } = useParams();
  console.log(categoryName);

  return (
    <>
      {/* <h1>Category</h1> */}
      {/* section 1 */}
      <section className="flex justify-center bg-pink-100">
        <div className="flex flex-col items-center w-[50%] my-20">
        <h1 className="mb-4 text-5xl font-bold">{categoryName || "Business"}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, doloremque.</p>
        <p className="mb-4">Lorem ipsum dolor sit amet consectetur.</p>
        <p className="font-semibold">BLOG {">"} {categoryName || "Business"}</p>
        </div>
      </section>

      {/* section 2 */}
      <section  className="flex px-16 mt-24">
        <div  className="w-[70%] flex flex-col gap-12">
          <div data-aos="fade-up" className="flex items-center gap-6 ">
            <img className="w-[42%]" src={post_image} alt="" />
            <div className="pr-5">
              <p className="mb-3 font-semibold">{categoryName || "Business"}</p>
              <p className="mb-4 text-3xl font-semibold ">Top 6 free website mockup tools 2022</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, illo ad! Molestiae nemo exercitationem enim optio repudiandae porro cumque quas.</p>
            </div>
          </div>
          <div data-aos="fade-up" className="flex items-center gap-6 ">
            <img className="w-[42%]" src={post_image} alt="" />
            <div className="pr-5">
              <p className="mb-3 font-semibold">{categoryName || "Business"}</p>
              <p className="mb-4 text-3xl font-semibold ">Step-by-step guide to choosing great font pairs</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, illo ad! Molestiae nemo exercitationem enim optio repudiandae porro cumque quas.</p>
            </div>
          </div>
          <div data-aos="fade-up" className="flex items-center gap-6 ">
            <img className="w-[42%]" src={post_image} alt="" />
            <div className="pr-5">
              <p className="mb-3 font-semibold">{categoryName || "Business"}</p>
              <p className="mb-4 text-3xl font-semibold ">Ten free foogle fonts that you should use</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, illo ad! Molestiae nemo exercitationem enim optio repudiandae porro cumque quas.</p>
            </div>
          </div>
          <div data-aos="fade-up" className="flex items-center gap-6 ">
            <img className="w-[42%]" src={post_image} alt="" />
            <div className="pr-5">
              <p className="mb-3 font-semibold">{categoryName || "Business"}</p>
              <p className="mb-4 text-3xl font-semibold ">What did I learn from doing 50+ design sprints?</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, illo ad! Molestiae nemo exercitationem enim optio repudiandae porro cumque quas.</p>
            </div>
          </div>
        </div>
        {/* categories and All tages */}
        <div data-aos="fade-left" className="w-[30%] pl-16">
          <h1 className="mb-12 text-3xl font-semibold">Categories</h1>
          <div className="flex flex-col gap-4">
            <CategoryCards isCategoryPage={true} />
          </div>
          <h1 className="my-12 text-3xl font-semibold">All Tags</h1>
          <div className="flex flex-col gap-4">
            <div className="flex w-full gap-4">
              <button className="rounded-full border-[1px] border-gray-400 px-8 py-3 hover:bg-Yellow">Business</button>
              <button className="rounded-full border-[1px] border-gray-400 w-full py-3 hover:bg-Yellow">Experience</button>
            </div>
            <div className="flex w-full gap-4">
              <button className="rounded-full border-[1px] border-gray-400 px-8 py-3 hover:bg-Yellow">Screen</button>
              <button className="rounded-full border-[1px] border-gray-400 w-full py-3 hover:bg-Yellow">Technology</button>
            </div>
            <div className="flex w-full gap-4">
              <button className="rounded-full border-[1px] border-gray-400 w-full py-3 hover:bg-Yellow">Marketing</button>
              <button className="rounded-full border-[1px] border-gray-400 px-8 py-3 hover:bg-Yellow">Life</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Category;
