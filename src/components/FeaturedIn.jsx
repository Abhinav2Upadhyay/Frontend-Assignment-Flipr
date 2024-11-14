import logo_1 from "../assets/Images/logo_1.svg";
import logo_2 from "../assets/Images/logo_2.svg";
import logo_3 from "../assets/Images/logo_3.svg";
import logo_4 from "../assets/Images/logo_4.svg";
import logo_5 from "../assets/Images/logo_5.svg";

function FeaturedIn() {
    const logosImage = [
        {imageUrl: logo_1},
        {imageUrl: logo_2},
        {imageUrl: logo_3},
        {imageUrl: logo_4},
        {imageUrl: logo_5},
    ]

    return (
        <>
            <div className="flex items-center justify-between">
                <div className="w-40 ">
                    <p className="text-sm">We are</p>
                    <h1 className="text-xl font-semibold">Featured In</h1>
                </div>
                <div className="flex items-center justify-between w-[80%]">
                    {logosImage.map((logo, index) => (
                        <img key={index} src={logo.imageUrl} alt="logo" />
                    ))}
                </div>
            </div>
        </>
    )
}

export default FeaturedIn;