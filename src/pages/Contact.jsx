function Contact() {
  return (
    <>
      {/* <h1>Contact</h1> */}
      {/* section 1 */}
      <section className="flex justify-center pt-24 pb-16">
        <div className="w-[60%] flex flex-col gap-3 items-center">
          <h2 className="text-lg font-semibold ">CONTACT US</h2>
          <h1 className="mb-5 text-5xl font-bold">Let{"'"}s Start a Conversation</h1>
          <p className="text-center text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab saepe earum consequatur reprehenderit distinctio doloremque dolorum quam a rerum.</p>
        </div>
      </section>

      {/* section 2 */}
      <section className="flex justify-center">
        <div className="w-[60%]">
          <div className="flex px-16 py-12 mb-8 text-white bg-purple-700">
            <div className="w-[50%] pr-8">
              <h2 className="border-b-[1px] border-purple-300 pb-2 opacity-80">Working hours</h2>
              <h1 className="pr-12 mt-10 text-2xl font-semibold">Monday To Friday 9:00 AM to 8:00 PM</h1>
              <p className="mt-2 text-lg opacity-80">Our Support Team is available 24/7</p>
            </div>
            <div className="w-[50%] pl-8">
              <h2 className="border-b-[1px] border-purple-300 pb-2 opacity-80">Contact Us</h2>
              <h1 className="pr-4 mt-10 text-2xl font-semibold">020 7993 2905</h1>
              <p className="mt-2 text-lg opacity-80">hello@finsweet.com</p>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input className="w-full px-5 py-4 border-[1px] border-gray-300 mb-4" required type="text" placeholder="Full Name" />
            <input className="w-full px-5 py-4 border-[1px] border-gray-300 mb-4" required type="text" placeholder="Your Email" />
            <input className="w-full px-5 py-4 border-[1px] border-gray-300 mb-4" required type="text" placeholder="Query Related" />
            <textarea className="w-full px-5 py-4 border-[1px] border-gray-300 mb-4" placeholder="Message"></textarea>
            <button type="submit" className="w-full py-3 text-black font-semibold  bg-[#ffd050] hover:bg-opacity-80 active:bg-opacity-100">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
