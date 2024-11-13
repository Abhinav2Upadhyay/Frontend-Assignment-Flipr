import facebook_icon from "../assets/Icons/facebook_icon.svg";
import twitter_icon from "../assets/Icons/twitter_icon.svg";
import instagram_icon from "../assets/Icons/instagram_icon.svg";
import linkedIn_icon from "../assets/Icons/linkedIn_icon.svg";
import section_1_image from "../assets/Images/close-up-photography-of-man-wearing-sunglasses-1212984.svg";
import shape_1 from "../assets/images/shape-1.svg";
import shape_2 from "../assets/images/shape-2.svg";
import post_image_1 from "../assets/images/stained-glass-high-rise-building-1106476.svg";
import post_image_2 from "../assets/images/man-in-black-crew-neck-t-shirt-sitting-beside-woman-in-gray-crew-neck-t-shirt-3153201.svg";

function Author() {
  return (
    <>
      {/* <h1>Author</h1> */}
      {/* section 1 */}
      <section className="relative flex justify-center w-full py-24 bg-pink-100">
        <div className="flex w-[70%]">
          <img src={section_1_image} alt="" />
          <div className="px-10 pt-5">
            <h1 className="mb-6 text-4xl font-semibold">Hey there, I{"'"}m Andrew Jonhson and welcome to my blog</h1>
            <p className="mb-5 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, et. Ex placeat doloremque beatae ut, reprehenderit consequatur deleniti, fugit explicabo assumenda eos numquam. Pariatur, maxime?</p>
            <div className="flex gap-4">
                <img className="w-4 h-4 cursor-pointer " src={facebook_icon} alt="facebook icon" />
                <img className="w-4 h-4 cursor-pointer " src={twitter_icon} alt="twitter icon" />
                <img className="w-4 h-4 cursor-pointer " src={instagram_icon} alt="instagram icon" />
                <img className="w-4 h-4 cursor-pointer " src={linkedIn_icon} alt="linkedIn icon" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 flex mr-2">
          <img className="h-[19px]" src={shape_1} alt="" />
          <img className="h-[19px]" src={shape_2} alt="" />
        </div>
      </section>

      {/* section 2 */}
      <section className="flex justify-center">
        <div className="w-[70%] mt-20">
          <h1 className="mb-20 text-4xl font-semibold">My Posts</h1>
          <div className="flex items-center gap-8 mb-12">
            <img src={post_image_1} alt="" />
            <div>
              <p className="mb-3 text-lg font-semibold text-purple-600">BUSINESS</p>
              <p className="mb-6 text-3xl font-semibold">Front sizes is UI design: The complete guide to follow</p>
              <p className="text-gray-600">Lorem ipsum dolor ipsum dolor sit amet consectetur adipisicing elit. Libero est repellendus tempora officiis?</p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <img src={post_image_2} alt="" />
            <div>
              <p className="mb-3 text-lg font-semibold text-purple-600">ECONOMY</p>
              <p className="mb-6 text-3xl font-semibold">How to build rapport with your web design clients</p>
              <p className="text-gray-600">Lorem ipsum dolor ipsum dolor sit amet consectetur adipisicing elit. Libero est repellendus tempora officiis?</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Author;
