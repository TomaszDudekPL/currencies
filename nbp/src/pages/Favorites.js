import {useSelector} from "react-redux";

const Favorites = () => {

    const {favorites} = useSelector(state => state);

    return (
        <section>{favorites}</section>
    )
};
export default Favorites;