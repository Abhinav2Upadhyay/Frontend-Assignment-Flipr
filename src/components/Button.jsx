function Button({ text }) {
  return (
    <>
      <button className="px-8 py-2 mt-6 text-black font-semibold  bg-[#ffd050] hover:bg-opacity-80 active:bg-opacity-100">
        {text}
      </button>
    </>
  );
}

export default Button;
