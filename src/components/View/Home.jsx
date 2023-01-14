import "./Home.css";
import Navbar from "components/Navbar/Navbar";
import PaletaLista from "components/PaletaLista/PaletaLista";
import AdicionaPaletaModal from "components/AdicionaPaletaModal/AdicionaPaletaModal";

function Home() {
    return (
        <div className="Home">
            <Navbar />
            <div className="Home__container">
                <PaletaLista />
                <AdicionaPaletaModal />
            </div>
        </div>
    );
}

export default Home;
