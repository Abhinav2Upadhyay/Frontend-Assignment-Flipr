import banner from "../assets/images/banner.svg"
import buildingImage from "../assets/images/white-concrete-building-1838640.svg"

function Home() {

  return (
    <>
      {/* <h1 className="text-xl font-semibold">Home</h1> */}
      <section>
        <img src={banner} alt="banner image" />
      </section>
      <section className="flex mt-16 px-16">
        <div className="w-[50%]">
          <h2 className="font-semibold text-2xl">Featured Post</h2>
          <div>
            <img src={buildingImage} alt="building Image" />
            <p></p>
            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam error sed quibusdam.</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore suscipit saepe nostrum aut debitis in doloribus dignissimos maiores distinctio quam!</p>
            <button>Read More</button>
          </div>
        </div>
        <div className="w-[50%]"></div>
      </section>
    </>
  );
}

export default Home;
