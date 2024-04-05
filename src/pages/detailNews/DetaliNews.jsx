import Header from '../../components/shared/header/Header';
import Nav from '../../components/shared/nav/Nav';
import RightSideNav from '../../components/shared/rightSideNav/RightSideNav';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";

const DetailNews = () => {

    const {id} = useParams();
    const news = useLoaderData();

    const item = news.find(n => n._id === id);
    console.log(item);

    const { details, image_url, thumbnail_url, author, title, total_view, rating, _id ,published_date} = item;

    
    return (
        <div>
            <Header></Header>
            <Nav></Nav>

            <div className='grid grid-cols-4 gap-6'>
                <div className='col-span-3'>
                    <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
                        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                            <img src={image_url} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                            <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
                                <div className="space-y-2">
                                    <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">{title}</a>
                                    <p className="text-xs dark:text-gray-600">By
                                        <a rel="noopener noreferrer" href="#" className="text-xs hover:underline">{author.name}</a>
                                    </p>
                                </div>
                                <div className="dark:text-gray-800">
                                    <p>{details}</p>
                                </div>
                            </div>
                        </div>
                        <button className='flex items-center gap-2 bg-red-500 py-1 px-3 text-white font-semibold'><FaArrowLeft />All news in this category</button>
                    </div>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default DetailNews;