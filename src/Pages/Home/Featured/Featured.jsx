import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import './Featured.css';
import img from '../../../assets/home/featured.jpg';

const Featured = () => {
    return (
        <div className="featured bg-fixed p-10 text-white">
            <SectionTitle
            subHeading={"Check It Out"}
            heading={"From Our Menu"}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 place-items-center mb-4">
            <div>
                <img className="rounded" src={img} alt="" />
            </div>
            <div className="">
                <h4>March 20,2023</h4>
                <h2 className="text-2xl font-bold">Where Can I Get Some?</h2>
                <p className="font-medium text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

                <button className="btn btn-warning">Read More</button>
            </div>
            </div>
        </div>
    );
};

export default Featured;