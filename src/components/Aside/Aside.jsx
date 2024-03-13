import PropTypes from 'prop-types'
const Aside = ({asidetitle}) => {
    console.log(asidetitle);
    return (
        <div className="bg-white p-5 rounded-lg">
            <h1 className="text-[#2F80ED] font-bold text-lg border-b-2 pb-5">Credit Hour Remaining: 7 hr</h1>
            <h1 className="font-bold text-xl py-5 border-b-2">Course Name:</h1>
            {
                asidetitle.map((title,idx) => <div key={idx} className='py-2'>
                    <p>{title}</p>
                </div>)
            }
            <p className="text-sm font-bold py-2 border-b-2">Credit Hour Remaining 7 hr</p>
            <p className="text-sm font-bold py-2 border-b-2">Total Price : 48000 USD</p>
        </div>
    );
};
Aside.propTypes = {
    asidetitle: PropTypes.object.isRequired,
}
export default Aside;