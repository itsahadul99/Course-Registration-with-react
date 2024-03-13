import { useState } from "react";
import Card from "../Card/Card";
import { useEffect } from "react";

const Courses = () => {
    const [cards, setCards] = useState([]);
    useEffect(()=>{
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])

    return (
        <div className="grid grid-cols-3 gap-5 justify-center">
            {
                cards.map(card => <Card
                    key={card.id}
                    card = {card}
                ></Card>)
            }
        </div>
    );
};

export default Courses;