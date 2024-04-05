import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="py-1 px-3 bg-red-500 text-white font-bold cursor-default">Breaking</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link to='/' className="mr-6">I can be a React component, multiple React components, or just some text....</Link>
                <Link to='/' className="mr-6">I can be a React component, multiple React components, or just some text....</Link>
                <Link to='/' className="mr-6">I can be a React component, multiple React components, or just some text....</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;