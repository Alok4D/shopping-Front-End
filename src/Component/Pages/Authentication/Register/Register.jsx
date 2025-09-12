import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex h-full container mx-auto mt-7 overflow-hidden rounded-xl shadow-md">
      {/* Left Side: Form */}
      <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%] dark:bg-zinc-900">
        <h2 className="pb-8 text-center text-3xl font-semibold tracking-tight text-[#00B207]">
          Create Account
        </h2>

        <form className="flex w-full flex-col items-center justify-center gap-4">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-[80%] md:w-[60%] rounded-lg border border-[#00B207] bg-transparent py-2 pl-4 text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#00B207] dark:text-zinc-400"
          />

          {/* Photo URL */}
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="w-[80%] md:w-[60%] rounded-lg border border-[#00B207] bg-transparent py-2 pl-4 text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#00B207] dark:text-zinc-400"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-[80%] md:w-[60%] rounded-lg border border-[#00B207] bg-transparent py-2 pl-4 text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#00B207] dark:text-zinc-400"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-[80%] md:w-[60%] rounded-lg border border-[#00B207] bg-transparent py-2 pl-4 text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#00B207] dark:text-zinc-400"
          />

          {/* Confirm Password */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-[80%] md:w-[60%] rounded-lg border border-[#00B207] bg-transparent py-2 pl-4 text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#00B207] dark:text-zinc-400"
          />

          {/* Terms & Conditions */}
          <div className="w-[80%] md:w-[60%] flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I accept the{" "}
              <span className="text-[#00B207] underline cursor-pointer">
                Terms and Conditions
              </span>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-[80%] md:w-[60%] rounded-lg bg-[#00B207] px-6 py-2 font-medium uppercase text-white outline-none hover:bg-[#00B207]"
          >
            Register
          </button>
        </form>

        {/* Already have account */}
        <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <Link to="/signIn" className="text-[#00B207] underline">
            Sign in
          </Link>
        </p>
      </div>

      {/* Right Side: Image/Design */}
      <div className="relative hidden items-center justify-center bg-blue-300 md:flex md:w-[50%]">
        <div className="absolute -top-2 left-[20%] h-16 w-16 rounded-full bg-gradient-to-br from-white via-blue-300 to-blue-400"></div>
        <div className="absolute bottom-[18%] left-[20%] h-20 w-20 rounded-full bg-gradient-to-br from-white via-blue-300 to-blue-400"></div>
        <div className="absolute -right-7 top-[50%] h-14 w-14 -translate-y-1/2 rounded-full bg-gradient-to-br from-white via-blue-300 to-blue-400 transition-all"></div>
        <div className="absolute left-[50%] top-[22%] h-24 w-24 -translate-x-1/2 rounded-full bg-gradient-to-br from-white via-blue-300 to-blue-400"></div>
        <div className="z-10 space-y-2 text-center">
          <h2 className="text-3xl font-medium text-white/80">Join Ecobazar</h2>
          <p className="animate-pulse text-sm text-white/60">
            Let's grow together 🌿
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
