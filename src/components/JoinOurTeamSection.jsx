import Button from "./Button";

function JoinOurTeamSection() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center w-[32%] gap-4">
        <h1 className="text-3xl font-bold text-center">Join our team to be a part of our story</h1>
        <p className="text-center text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem deserunt cupiditate dolore.
        </p>
        <div>
          <Button text="Join Now" />
        </div>
      </div>
    </div>
  );
};

export default JoinOurTeamSection;
