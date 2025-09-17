import React from "react";
import screenshot from "../assets/screenshot.png";
import phonebg from "../assets/phone bg.avif";
import likeicon from "../assets/Likeicon.png"
import fwbwicon from "../assets/fwbwicon.png"

const SectionSix = () => {
  return (
    <>
      <div className={`bg-gradient-to-r from-[#183f35] to-[#60C3AD]`}>
        <div className="container mx-auto  py-10">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-[45%] flex flex-col justify-center">
              <h1 className="py-20 text-4xl md:text-4xl lg:text-5xl text-bold text-center lg:text-start font-bold">
                Always have us
                <br />
                <span className="text-[#60C3AD]">at your fingertips</span>
              </h1>

              <div className="overflow-y-scroll h-36 no-scrollbar">
                <div className="py-16 text-white">
                  <p className="textxl lg:text-2xl font-medium">
                    Tell us what you crave
                  </p>
                  <p className="lg:text-xl pt-5">
                    Not only are our meals deliciously homely, they are also
                    customisable. Pick and choose from our varied menu on the
                    app and we'll serve it up, piping hot.
                  </p>
                </div>
                <div className="py-16 text-white">
                  <p className="textxl lg:text-2xl font-medium">
                    All payments and dues, in one place
                  </p>
                  <p className="lg:text-xl pt-5">
                    No running around here and there paying all your bills.
                    While paying, tracking and managing your rent and other
                    expenses on your app, the only thing that'll move would be
                    your fingertips
                  </p>
                </div>
                <div className="py-16 text-white">
                  <p className="textxl lg:text-2xl font-medium">
                    Be heard. Without saying a word
                  </p>
                  <p className="lg:text-xl pt-5">
                    If you need help with anything, wish to register a
                    complaint, or if you think we can do something better, do
                    tell us through the support and real-time feedback feature
                    on the app.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-full lg:w-[45%]">
              <div className="mt-24 flex justify-center lg:justify-end ">
                <div className="">
                  <div>
                    <img src={phonebg} alt="" className="w-80 lg:w-90 xl:w-[90%] absolute top-32 lg:top-52  right-20 md:right-55  lg:-right-[30px] xl:top-36 xl:-right-24 bg-[#60C3AD] rounded-full rotate-infinite" />
                  </div>
                  <div className="relative">
                    {" "}
                    <img
                      src={screenshot}
                      alt=""
                      className="w-50 lg:w-70 xl:w-80 border-20 rounded-4xl"
                    />

                    <img src={likeicon} alt="" className="w-20 absolute top-[50%] -left-[20%] floating-obj" />
                    <img src={fwbwicon} alt="" className="w-20 absolute top-[50%] -right-[20%] floating-obj" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionSix;
