import { useState } from "react";
import "./PaletaLista.css";
import { paletas } from "assets/mocks/paletas";
import PaletaListaItem from "components/PaletaListaItem/PaletaListaItem";

function PaletaLista() {
    const [paletaSelecionada, setPaletaSelecionada] = useState({});

    const adicionarItem = (paletaIndex) => {
        const paleta = {
            [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) + 1,
        };
        setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
    };

    const removerItem = (paletaIndex) => {
        const paleta = {
            [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) - 1,
        };
        setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
    };

    return (
        <div className="PaletaLista">
            {paletas.map((paleta, index) => (
                <PaletaListaItem 
                key={`PaletaListaItem-${index}`}
                index={index}
                quantidadeSelecionada={paletaSelecionada[index]}
                paleta={paleta}/>
            ))}
        </div>
    );
}

export default PaletaLista;
