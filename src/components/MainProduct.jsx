import DetailsProduct from "./DetailsProduct";
import Galeria from "./Galeria";

const MainProduct=()=>{
    return(
        <main className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:min-h-[calc(100vh-88px-3px)] md:container md:mx-auto">
            <Galeria/>
            <DetailsProduct/>
        </main>
    )
}
export default MainProduct;