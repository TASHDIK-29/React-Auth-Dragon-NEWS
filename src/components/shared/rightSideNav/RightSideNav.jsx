import { FaGoogle } from "react-icons/fa6";
import { FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import q1 from "../../../assets/qZone1.png"
import q2 from "../../../assets/qZone2.png"
import q3 from "../../../assets/qZone3.png"

const RightSideNav = () => {
    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-3xl font-bold mb-6">Login With</h1>
                <button className="py-1 w-full border rounded-md my-1 flex items-center justify-center gap-2 text-blue-500"><FaGoogle /> Login with Google</button>
                <button className="py-1 w-full border rounded-md my-1 flex items-center justify-center gap-2"><FaGithub /> Login with Github</button>
            </div>


            <div>
                <h1 className="text-3xl font-bold mb-6">Find us on</h1>
                <button className="py-3 w-full border rounded-t-md flex items-center justify-start 
                gap-2 "><FaFacebook className="ml-3" /> Facebook</button>
                <button className="py-3 w-full border-x flex items-center justify-start gap-2"><FaTwitter className="ml-3" /> Twitter</button>
                <button className="py-3 w-full border rounded-b-md flex items-center justify-start gap-2"><FaInstagram className="ml-3" /> Instagram</button>
            </div>


            <div className="bg-[#F3F3F3] p-2">
                <h1 className="text-3xl font-bold mb-6">Q Zone</h1>
                <div className="space-y-5">
                    <img src={q1} alt="" />
                    <img src={q2} alt="" />
                    <img src={q3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;