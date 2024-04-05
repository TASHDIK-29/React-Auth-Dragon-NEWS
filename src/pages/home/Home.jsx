import { useLoaderData } from "react-router-dom";
import BreakingNews from "../../components/breakingNews/BreakingNews";
import Header from "../../components/shared/header/Header";
import LeftSideNav from "../../components/shared/leftSideNav/LeftSideNav";
import Nav from "../../components/shared/nav/Nav";
import RightSideNav from "../../components/shared/rightSideNav/RightSideNav";
import HomeNewsCard from "../../components/homeNews/HomeNewsCard";

const Home = () => {

    const article = useLoaderData();
    console.log(article);

    const articles = Array.isArray(article) ? article : [];

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Nav></Nav>
            
            <div className="grid grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2 space-y-5">
                    <h1 className="text-3xl">Dragon News Home</h1>
                    {
                        articles.map(item => <HomeNewsCard key={item._id} item={item}></HomeNewsCard>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;