type Props = {
  onClose: () => void;
};
export default function login(props: Props) {
  const handleButtonClick = () => {
    props.onClose();
  };
  return (
    <div className="fixed   bottom-0 left-0 right-0 top-0  mx-auto my-auto flex  items-center justify-center">
      <div className=" relative  flex  h-screen w-screen flex-col  justify-center overflow-hidden bg-black bg-opacity-40 py-6 text-offWhite   antialiased sm:py-12">
        <div className="relative mx-auto   py-3 text-center sm:w-96">
          <span className="text-2xl font-light ">Login to your account</span>
          <div className="mt-4 rounded-lg bg-primary text-left shadow-md">
            <div className=" h-2 rounded-t-md bg-accent"></div>
            <div className="px-8 py-6 ">
              <label className="block font-semibold"> Username or Email </label>
              <input
                type="text"
                placeholder="Email"
                className="  mt-2  h-5 w-full rounded-md border px-3 py-5 text-black hover:outline-none focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <label className="mt-3 block font-semibold">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="mt-2 h-5 w-full rounded-md border px-3 py-5 text-black hover:outline-none focus:outline-none focus:ring-2 focus:ring-accent "
              />
              <a href="#" className="text-sm hover:underline">
                Forgot password?
              </a>
              <div className="flex items-baseline justify-between">
                <button
                  type="submit"
                  className=" mt-4 rounded-md  bg-red-500 px-12 py-2 text-primary hover:bg-accentLight "
                  onClick={handleButtonClick}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className=" mt-4 rounded-md bg-accent px-12 py-2 text-primary hover:bg-accentLight "
                  onClick={handleButtonClick}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
