import { useState } from "react";
import Card from "../Card/Card";
import { useEffect } from "react";
import PropTypes from 'prop-types'

const Courses = ({handleAsideTitle}) => {
    const [cards, setCards] = useState([]);
    useEffect(()=>{
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center">
            {
                cards.map(card => <Card
                    key={card.id}
                    card = {card}
                    handleAsideTitle = {handleAsideTitle}
                ></Card>)
            }
        </div>
    );
};
Courses.propTypes = {
    handleAsideTitle: PropTypes.func.isRequired,
}
export default Courses;