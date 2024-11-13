import businessIcon from "../assets/Icons/businessIcon.svg";
import startupIcon from "../assets/Icons/startupIcon.svg";
import economyIcon from "../assets/Icons/economyIcon.svg";
import technologyIcon from "../assets/Icons/technologyIcon.svg";


function CategoryCards() {
    const categoryData = [
        {
            imageUrl: businessIcon,
            categoryName: "Business",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
            imageUrl: startupIcon,
            categoryName: "Startup",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
            imageUrl: economyIcon,
            categoryName: "Economy",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
            imageUrl: technologyIcon,
            categoryName: "Technology",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        },
    ]

    return (
        <>
            <div className="flex w-full gap-6">
            {categoryData.map(({ imageUrl, categoryName, text }, index) => (
                <div key={index} className="flex flex-col gap-3 p-8 border-2 border-gray-200 w-[25%] hover:bg-Yellow cursor-pointer group">
                    <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 group-hover:bg-white rounded-xl ">
                    {imageUrl && <img className="" src={imageUrl} alt={categoryName} />}
                    </div>
                    <h2 className="text-2xl font-bold">{categoryName}</h2>
                    <p>{text}</p>
                </div>
            ))}
            </div>
        </>
    )
}

export default CategoryCards;