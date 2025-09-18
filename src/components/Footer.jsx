import logo from "../assets/Dvalley Logo Branding Plan.png"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="bg-[#232728]">
        <div className="container mx-auto">
          <div class="flex justify-center space-x-4 py-8 border-b-2 border-green-400 border-rounded">
            <button class="px-4 py-2 text-xl font-semibold rounded  cursor-pointer text-white focus:bg-[#2a308c]">
           Dhanmondi
            </button>
            <button class="px-4 py-2 text-xl font-semibold rounded  cursor-pointer text-white focus:bg-[#2a308c]">
              Mirpur
            </button>
            <button class="px-4 py-2 text-xl font-semibold  rounded cursor-pointer text-white focus:bg-[#2a308c]">
             Uttara
            </button>
            <button class="px-4 py-2 text-xl font-semibold  rounded cursor-pointer text-white focus:bg-[#2a308c]">
             Ghushan
            </button>
            <button class="px-4 py-2 text-xl font-semibold  rounded cursor-pointer text-white focus:bg-[#2a308c]">
             Banani
            </button>
            <button class="px-4 py-2 text-xl font-semibold  rounded cursor-pointer text-white focus:bg-[#2a308c]">
             Paltan
            </button>
          </div>

          <div className="py-36 flex flex-wrap">
<div className="w-1/6">
<img src={logo} alt="" className="w-[70%]" />
</div>
<div className="w-1/6">
<ul className="text-white font-bold text-xl space-y-5">
  <li className="hover:underline cursor-pointer">About Us</li>
  <li className="hover:underline cursor-pointer">Investors Relations</li>
  <li className="hover:underline cursor-pointer">Teams</li>
  <li className="hover:underline cursor-pointer">Media</li>
</ul>
</div>
<div className="w-1/6">
<ul className="text-white font-bold text-xl space-y-5">
  <li className="hover:underline cursor-pointer">Blogs</li>
  <li className="hover:underline cursor-pointer">FAQs Relations</li>
  <li className="hover:underline cursor-pointer">Refer and Earn</li>
  <li className="hover:underline cursor-pointer">House Rules</li>
</ul>
</div>
<div className="w-1/6">
<ul className="text-white font-bold text-xl space-y-5">
  <li className="hover:underline cursor-pointer">T&C</li>
  <li className="hover:underline cursor-pointer">Privacy Policy</li>
  <li className="hover:underline cursor-pointer">Contact Us</li>
  <li className="hover:underline cursor-pointer">COVID-19</li>
</ul>
</div>
<div className="w-1/6">
<ul className="text-white font-bold text-xl space-y-5">
  <li className="hover:underline cursor-pointer">Partner With Us</li>
  <li className="hover:underline cursor-pointer">Cookie Policy</li>

</ul>
</div>
<div className="w-1/6">
<div className="flex space-x-4 ">
  <FaFacebook  className="text-4xl text-white cursor-pointer"/>
  <FaLinkedin  className="text-4xl text-white  cursor-pointer"/>
  <FaInstagramSquare  className="text-4xl text-white cursor-pointer"/>
  <FaYoutube  className="text-4xl text-white cursor-pointer"/> 
</div>
</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
