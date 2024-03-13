import PropTypes from 'prop-types'
import { IoBookOutline } from "react-icons/io5";
const Card = ({ card, handleAsideTitle }) => {
    // console.log(card);
    const { name, description, photo, price, credit } = card;
    return (
        <div className="card w-80 h-[450px] bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={photo} alt={name} className="rounded-xl" />
            </figure>
            <div className="text-center px-5 pt-4">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
            <div className="flex justify-between px-5 py-5">
                <p>Price: ${price}</p>
                <p className="flex gap-1 items-center"> <IoBookOutline /> Credit: {credit}</p>
            </div>
            <div className="px-4">
                <button onClick={()=>handleAsideTitle(name, credit, price)} className="text-xl w-full h-10 rounded-xl text-white bg-[#2F80ED] overflow-hidden relative z-10 group hover:text-sky-900 duration-700">Select<span className="bg-sky-900 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-50 size-32 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-sky-800 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-100 size-28 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-sky-600 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-200 size-24 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-sky-500 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-300 size-20 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-sky-500 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-[400ms] size-16 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span></button>
            </div>
        </div>
    );
};
Card.propTypes = {
    card: PropTypes.object.isRequired,
    handleAsideTitle: PropTypes.func.isRequired,
}
export default Card;