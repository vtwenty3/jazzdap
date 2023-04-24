type Props = {
  visible: boolean;
};
export default function login(props: Props) {
  return (
    <div
      className="hidden"
      style={
        props.visible == true ? { display: "block" } : { display: "hidden" }
      }
    >
      <div className=" relative  flex min-h-screen flex-col justify-center overflow-hidden py-6 antialiased sm:py-12">
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
              <label className="mt-3 block font-semibold">
                Username or Email
              </label>
              <input
                type="password"
                placeholder="Password"
                className="mt-2 h-5 w-full rounded-md border px-3 py-5 text-black hover:outline-none focus:outline-none focus:ring-2 focus:ring-accent "
              />
              <div className="flex items-baseline justify-between">
                <button
                  type="submit"
                  className=" mt-4 rounded-md bg-accent px-6 py-2 text-primary hover:bg-accentLight "
                >
                  Login
                </button>
                <a href="#" className="text-sm hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
