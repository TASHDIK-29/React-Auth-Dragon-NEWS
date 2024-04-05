import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('./categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h1 className="text-3xl mb-4">All Category</h1>
            <div>
                <ul className="space-y-2 text-xl font-bold text-slate-600">
                    {
                        categories.map(cat => <li className="text-center py-2 rounded-md hover:bg-slate-600 hover:text-white" key='cat.id'><Link>{cat.name}</Link></li> )
                    }
                </ul>
            </div>
        </div>
    );
};

export default LeftSideNav;