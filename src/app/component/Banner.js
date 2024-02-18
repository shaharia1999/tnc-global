import { CarouselDefault } from "./Carusal";
import MovieData from "./DataFatching";
const Banner = async () => {
    return (
        <div className="md:h-[80vh] h-[50vh] w-full">
            <CarouselDefault/>
        </div>
    );
};
export default Banner;