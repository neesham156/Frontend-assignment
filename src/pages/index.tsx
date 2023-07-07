import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaReact } from "react-icons/Fa";
import { useDispatch, useSelector } from "react-redux";
export default function index() {
  const dispatch = useDispatch();

  const handlePasswordChange = (event: any) => {
    console.log("yes", event);
    dispatch({ type: "SET_Password", payload: event });
  };

  const handleEmailChange = (event: any) => {
    dispatch({ type: "SET_EMAIL", payload: event });
  };
  const [tokens, setTokens] = useState<any>({});
  const handleTokenChange = (event: any) => {
    console.log(event);
    setTokens(event);
    dispatch({ type: "SET_TOKEN", payload: event.accessToken });
  };

  const router = useRouter();

  const [email, setEmail] = useState<any>("");
  const [submit, setSubmit] = useState<any>(false);
  const [err, setErr] = useState<any>(false);
  const [password, setPassword] = useState<any>("");
  const [accepted, setAccepted] = useState(false);

  const login = async (email: any, password: any) => {
    handleEmailChange(email);
    handlePasswordChange(password);

    const data = { email: email, password: password };
    console.log("data", data);

    await axios
      .post("https://test.enitiate.gg/api/v1/user/auth/login", data)
      .then((res: any) => {
        console.log(res.data.data.accessToken);
        handleTokenChange(res.data.data);
       
       

        setErr(false);
        console.log(err)

        if (err == false && submit == true) {
         router.push("/post")
        }
      })

      .catch((error: any) => {
        console.error("Error fetching tokens:", error);
        setErr(true);
      });
  };
useEffect(()=>{

  localStorage.setItem("accessToken",JSON.stringify(tokens.accessToken));

},[tokens])
  return (
    <>
      <div className=" h-[100%] w-[100%]  bg-gradient-to-b md:pt-[140px] md:pl-[76px] px-[26px] py-[178px] md:pr-[83px] md:pb-[151px] from-[#79F2EC]  to-[#14518E] relative overflow-hidden">
        <div className="h-[100%] w-[100%]  flex flex-col items-center  bg-[#080d0d] rounded-[35px] relative">
          <div className="w-[100%]  flex  justify-center md:justify-normal  gap-2.5 md:pl-[68px] pt-[44px] items-center text-[#ECECEC] text-[24px] font-medium font-poppins">
            <Image src="/logo.svg" alt={""} width={59.5} height={55.25} />
            <p>Logo</p>
          </div>

          <div className="flex  w-[100%] py-[80px] pb-[160px]  md:py-[50px]   justify-center">
            <div className="w-[40%] hidden md:block">
              <Image src={"/home-pic.png"} alt={""} width={400} height={400} />
            </div>

            <div className="w-[100%] md:w-[40%] pt-[40px] flex flex-col items-center   text-[#ffffff] font-poppins font-medium">
              <p className="text-[26px] leading-normal">Login to you account</p>

              <div className="h-12  relative mt-[20px]">
                <input
                  type="email"
                  className="bg-transparent rounded-[6px] border-[1px] border-[#5b5b5b] w-[274px] pl-[35px] py-[8px] "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="18"
                  viewBox="0 0 21 18"
                  fill="none"
                  className="absolute top-2.5  left-2"
                >
                  <g clip-path="url(#clip0_1_88)">
                    <path
                      d="M1.8095 4.1115L9.57513 10.7685C9.80486 10.9655 10.1117 11.0825 10.4363 11.0968C10.7609 11.1111 11.0801 11.0216 11.3321 10.8458L11.4319 10.7685L19.1923 4.116C19.2176 4.1985 19.2343 4.2825 19.243 4.36875L19.25 4.5V13.5C19.2501 13.8784 19.0834 14.2429 18.7832 14.5204C18.483 14.7979 18.0715 14.9679 17.6313 14.9963L17.5 15H3.5C3.0585 15.0001 2.63325 14.8572 2.30952 14.5999C1.98579 14.3426 1.78749 13.9899 1.75438 13.6125L1.75 13.5V4.5C1.75 4.41 1.75875 4.323 1.77625 4.2375L1.8095 4.1115ZM17.5 3C17.6059 3 17.71 3.0075 17.8106 3.02325L17.9594 3.0525L10.5044 9.4425L3.04675 3.051C3.143 3.0285 3.24275 3.0135 3.34425 3.006L3.5 3H17.5Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_88">
                      <rect width="21" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="h-12  relative mt-[20px]">
                <input
                  type="password"
                  className="bg-transparent rounded-[6px] border-[1px] border-[#5b5b5b] w-[274px] pl-[35px] py-[8px] "
                  value={password}
                  onChange={(e: any) => setPassword(e.target.value)}
                />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  className="absolute top-2.5  left-2"
                >
                  <path
                    d="M1.41659 13.4583V12.0417H15.5833V13.4583H1.41659ZM2.23117 9.17292L1.31034 8.64167L1.91242 7.57917H0.708252V6.51667H1.91242L1.31034 5.48958L2.23117 4.95833L2.83325 5.98542L3.43534 4.95833L4.35617 5.48958L3.75409 6.51667H4.95825V7.57917H3.75409L4.35617 8.64167L3.43534 9.17292L2.83325 8.11042L2.23117 9.17292ZM7.89783 9.17292L6.977 8.64167L7.57908 7.57917H6.37492V6.51667H7.57908L6.977 5.48958L7.89783 4.95833L8.49992 5.98542L9.102 4.95833L10.0228 5.48958L9.42075 6.51667H10.6249V7.57917H9.42075L10.0228 8.64167L9.102 9.17292L8.49992 8.11042L7.89783 9.17292ZM13.5645 9.17292L12.6437 8.64167L13.2458 7.57917H12.0416V6.51667H13.2458L12.6437 5.48958L13.5645 4.95833L14.1666 5.98542L14.7687 4.95833L15.6895 5.48958L15.0874 6.51667H16.2916V7.57917H15.0874L15.6895 8.64167L14.7687 9.17292L14.1666 8.11042L13.5645 9.17292Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className=" flex gap-1 mt-[20px] mb-[40px]">
                <input
                  type="checkbox"
                  id="t&c"
                  name="interest"
                  value="t&c"
                  onChange={() => setAccepted(true)}
                  className="bg-transparent cursor-pointer text-[#275DEA]"
                />
                <label htmlFor="t&c"> I agree to the Terms & Conditions</label>
              </div>
              <div
                className="rounded-[6px] bg-[#275DEA] px-[74px] py-[12px] transition-all duration-500 shadow-sm hover:shadow-2xl  shadow-white cursor-pointer"
                onClick={(e) => {
                  login(email, password), setSubmit(true);
                }}
              >
                Create my account
              </div>
              {accepted == false && submit == true ? (
                <>
                  <div className="text-red-400  text-md pt-2">
                    Accept terms & condition
                  </div>
                </>
              ) : (
                <></>
              )}
              {err == true && submit == true ? (
                <>
                  <div className="text-red-400  text-md pt-2">
                    Email & password is not correct
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className="border-circ  border-[70px]  absolute top-[570px]  right-[1270px]  rounded-full  rotate-90  w-[450px] h-[450px]  "></div>
      </div>
    </>
  );
}
