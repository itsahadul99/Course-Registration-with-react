import PropTypes from 'prop-types'
const Aside = ({asidetitle,credit, price, creditOnly}) => {
    return (
        <div className="bg-white p-5 rounded-lg space-y-3">
            <h1 className="text-[#2F80ED] font-bold text-lg border-b-2 pb-5">Credit Hour Remaining: {creditOnly} hr</h1>
            <h1 className="font-bold text-xl py-5 border-b-2">Course Name List</h1>
            {
                asidetitle.map((title,idx) => <div key={idx} className='py-2'>
                    <li>{title}</li>
                </div>)
            }
            <p className="text-md font-bold py-5 border-b-2 ">Total Credit Hour: {credit} </p>
            <p className="text-lg font-bold py-5 border-b-2">Total Price : {price} USD</p>
        </div>
    );
};
Aside.propTypes = {
    asidetitle: PropTypes.object.isRequired,
    credit: PropTypes.object.isRequired,
    price: PropTypes.object.isRequired,
    creditOnly: PropTypes.object.isRequired


}
export default Aside;