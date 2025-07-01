import { FaStar } from "react-icons/fa";
 const Rating = (props) => {
    const {rating} = props;
    const colors = {brown: " #2F1B14", white: "#FDF4E3"};
    const stars = Array(5).fill(0);
    return (
        <div>
            {stars.map((s,index) => {
                return <FaStar
                        key={index}
                        size={24}
                        color={rating > index ? "orange": "white"}
                        ></FaStar>
            })}
        </div>
    );
}
 
export default Rating;