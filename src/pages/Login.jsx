import { useState } from "react";
import { FiEye, FiEyeOff, FiLock, FiMail, FiUser } from "react-icons/fi";

function Login() {
  const [mode, setMode] = useState("signUp");
  const [showPassword, setShowPassword] = useState(false);
  const isSignUp = mode === "signUp";

  return (
    <section className="px-4 py-8 min-h-[calc(100vh-120px)] justify-center bg-[#f7f4f2] flex items-center">
      <div className="p-6 w-full max-w-[540px] rounded-[20px] bg-[#f3f3f3] shadow-[0_4px_14px_rgba(0,0,0,0.03)] ring-1 ring-[#ededed]">
        <div className="text-center">
          <h1 className="text-[2.1rem] font-black text-[#2a2a2a] tracking-[-0.05em]">
            Welcome back!
          </h1>
          <p className="mt-1 text-[1.05rem] text-[#6b6b6b]">
            Please enter your information.
          </p>
        </div>

        <form className="mt-6 space-y-5">
          {isSignUp && (
            <div>
              <label className="mb-2 text-[1.05rem] font-semibold text-[#2d2d2d] block">
                Full Name
              </label>
              <div className="px-4 py-3 rounded-[16px] border border-[#75c9a4] bg-[#f5fdf9] shadow-[inset_0_0_0_1px_rgba(117,201,164,0.2)] flex items-center">
                <input
                  type="text"
                  defaultValue=""
                  className="w-full border-0 bg-transparent text-[1.08rem] text-[#1d1d1d] outline-none placeholder:text-[#767676]"
                />
                <span className="h-6 w-6 justify-center rounded-full text-[0.8rem] text-white ml-2 flex items-center">
                  
                </span>
              </div>
            </div>
          )}

          <div>
            <label className="mb-2 text-[1.05rem] font-semibold text-[#2d2d2d] block">
              Email
            </label>
            <div className="px-4 py-3 rounded-[16px] bg-[#efefef]">
              <input
                type="email"
                placeholder="Enter your email here"
                className="w-full border-0 bg-transparent text-[1.05rem] text-[#1d1d1d] outline-none placeholder:text-[#7b7b7b]"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 text-[1.05rem] font-semibold text-[#2d2d2d] block">
              Password
            </label>
            <div className="px-4 py-3 rounded-[16px] bg-[#efefef] flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full border-0 bg-transparent text-[1.05rem] text-[#1d1d1d] outline-none placeholder:text-[#7b7b7b]"
              />
              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                className="text-[#6f6f6f] ml-2"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="mt-2 py-4 w-full rounded-[16px] bg-[#f57d78] text-[1.15rem] font-semibold text-white shadow-[0_6px_14px_rgba(245,125,120,0.25)] transition hover:bg-[#ee6d68]"
          >
            {isSignUp ? "Create Account" : "Login"}
          </button><br />
        </form>

        <p className="mt-5 text-center text-[1.02rem] text-[#2e2e2e]">
          {isSignUp ? (
            <>
              Already have an account? <button type="button" onClick={() => setMode("signIn")} className="font-semibold text-[#ff6f7d]">Log in</button>
            </>
          ) : (
            <>
              Don’t have an account? <button type="button" onClick={() => setMode("signUp")} className="font-semibold text-[#ff6f7d]">Create Account</button>
            </>
          )}
        </p>

        <div className="mt-6 gap-4 justify-center text-[#8a8a8a] flex items-center">
          <span className="h-px w-full bg-[#cfcfcf]" />
          <span className="text-[0.9rem] uppercase tracking-[0.18em]">OR</span>
          <span className="h-px w-full bg-[#cfcfcf]" />
        </div>

        <div className="grid grid-cols-2 mt-5 gap-3">
          <button
            type="button"
            className="gap-2 px-4 py-3 justify-center rounded-[14px] border border-[#cfcfcf] bg-[#f5f5f5] text-[1.05rem] font-medium text-[#2d2d2d] shadow-sm flex items-center"
          >
            <span className="h-6 w-6 justify-center rounded-full border border-[#d6d6d6] bg-white text-[0.9rem] font-bold text-[#e94f3f] flex items-center">
              G
            </span>
            Google
          </button>

          <button
            type="button"
            className="gap-2 px-4 py-3 justify-center rounded-[14px] border border-[#cfcfcf] bg-[#f5f5f5] text-[1.05rem] font-medium text-[#2d2d2d] shadow-sm flex items-center"
          >
            <span className="h-6 w-6 justify-center rounded-full bg-[#3b82f6] text-[0.9rem] font-bold text-white flex items-center">
              f
            </span>
            Facebook
          </button>
        </div>
      </div>
    </section>
  );
}

export default Login;
