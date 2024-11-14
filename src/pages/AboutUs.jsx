import section_3_image from "../assets/images/ground-group-growth-hands-461049.svg";
import section_4_image from "../assets/images/three-persons-sitting-on-the-stairs-talking-with-each-other-1438072.svg";
import shapes_image from "../assets/images/shapes.svg";
import ListOfAuthors from "../components/ListOfAuthors";
import auther_5_image from "../assets/images/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313.svg";
import auther_6_image from "../assets/images/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.svg";
import auther_7_image from "../assets/images/content-unshaven-man-covering-eye-with-yellow-flower-5262459.svg";
import auther_8_image from "../assets/images/cheerful-young-ethnic-male-millennial-standing-near-stone-wall-and-smiling-6147118.svg";
import JoinOurTeamSection from "../components/JoinOurTeamSection";
import shape_1 from "../assets/images/shape-1.svg";
import shape_2 from "../assets/images/shape-2.svg";
import BgImage from "../assets/images/bgImageForAboutUsPageSection.svg";

const autherData = [
  {
      imageUrl: auther_5_image,
      authorName: "Guy Hawkins",
      text: "Lorem ipsum dolor sit amet.",
  },
  {
      imageUrl: auther_6_image,
      authorName: "Eleanor Pera",
      text: "Lorem ipsum dolor sit amet.",
  },
  {
      imageUrl: auther_7_image,
      authorName: "Robert Fox",
      text: "Lorem ipsum dolor sit amet.",
  },
  {
      imageUrl: auther_8_image,
      authorName: "Jacob Jones",
      text: "Lorem ipsum dolor sit amet.",
  },
]

function AboutUs() {
  return (
    <>
      {/* <h1>AboutUs</h1> */}
      {/* section 1 */}
      <section className="relative flex justify-end px-16 pt-32">
        <div className="absolute top-24 left-44 px-16 py-10 bg-white border-[1px] border-gray-200 w-[34%] z-[1]">
          <h2 className="text-lg">ABOUT US</h2>
          <p className="text-3xl font-bold">We are a team of content writers who share their learnings</p>
        </div>
        <div className="w-[40%] mb-16">
          <p>Lorem ipsum  amet consectetur adipisicing elit. Consequatur minus, dignissimos aut nemo cum quasi aspernatur voluptatum, sequi, quaerat deserunt a doloremque tempore eius hic!</p>
        </div>
      </section>

      {/* section 2 */}
      <section className="px-16">
        <div className="relative w-full bg-gray-300">
          <img className="" src={BgImage} alt="" />
          <div className="absolute bottom-0 flex pl-24">
            <img className="h-[18px]" src={shape_1} alt="" />
            <img className="h-[18px]" src={shape_2} alt="" />
          </div>
          <div className="absolute flex gap-12 px-12 py-8 left-24 bottom-4 bg-Yellow">
            <div>
              <h1 className="mb-2 text-5xl font-semibold">12+</h1>
              <p>Blog Published</p>
            </div>
            <div>
              <h1 className="mb-2 text-5xl font-semibold">18K+</h1>
              <p>View on Finsweet</p>
            </div>
            <div>
              <h1 className="mb-2 text-5xl font-semibold">30K+</h1>
              <p>Total Active Users</p>
            </div>
          </div>
        </div>
        <div className="flex px-20 pt-10 pb-8 bg-pink-100 b">
          <div className="flex flex-col w-1/2 gap-5 p-6">
            <h3 className="font-semibold">OUR MISSION</h3>
            <h2 className="text-3xl font-semibold">Creating valuable content for creatives all around the world</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit sunt ab quae vel quidem dolor placeat nulla non temporibus nesciunt obcaecati quod, esse iusto cumque veniam ipsum. Non, alias hic.</p>
          </div>
          <div className="flex flex-col w-1/2 gap-5 p-6">
            <h3 className="font-semibold">OUR VISION</h3>
            <h2 className="text-3xl font-semibold">A platform that empowers individuals to improve</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit sunt ab quae vel quidem dolor placeat nulla non temporibus nesciunt obcaecati quod, esse iusto cumque veniam ipsum. Non, alias hic.</p>
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section className="flex items-center justify-between px-16 mt-24">
        <div className="w-[50%] ">
          <p className="mb-4 text-4xl font-semibold">Our team of creatives</p>
          <p className="mb-4 text-2xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eveniet nam accusamus!</p>
          <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, pariatur? consectetur adipisicing elit. Reiciendis doloribus deleniti voluptates illum. Blanditiis repudiandae nihil voluptates magni, tempora nesciunt exercitationem illo asperiores maiores nobis dicta, quod odit repellendus suscipit!</p>
        </div>
        <div className="relative w-[45%]">
          <img className="w-full" src={section_3_image} alt="" />
          <img className="absolute top-[24%] left-[-50px]" src={shapes_image} alt="" />
        </div>
      </section>

      {/* section 4 */}
      <section className="flex items-center justify-between px-16 mt-24">
      <div className="w-[45%]">
          <img className="w-full" src={section_4_image} alt="" />
        </div>
        <div className="w-[50%] ">
          <p className="mb-4 text-4xl font-semibold">Why we started this Blog</p>
          <p className="mb-4 text-2xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eveniet nam accusamus!</p>
          <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, pariatur? consectetur adipisicing elit. Reiciendis doloribus deleniti voluptates illum. Blanditiis repudiandae nihil voluptates magni, tempora nesciunt exercitationem illo asperiores maiores nobis dicta, quod odit repellendus suscipit!</p>
        </div>
      </section>

      {/* section 5 - (List of Authors) */}
      <section className="px-16 mt-24">
        <h1 className="mb-12 text-4xl font-semibold text-center">List of Authors</h1>
        <div className="flex flex-col gap-8">
          <ListOfAuthors />
          <ListOfAuthors authorsData={autherData} />
        </div>
      </section>

      {/* section 6 - (JoinOurTeamSection) */}
      <section className="px-16 mt-24">
        <JoinOurTeamSection />
      </section>
    </>
  );
}

export default AboutUs;
