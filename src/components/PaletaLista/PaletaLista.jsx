import { useState, useEffect } from "react";
import "./PaletaLista.css";
import { PaletaSerivce } from "services/PaletaService";
import PaletaListaItem from "components/PaletaListaItem/PaletaListaItem";

function PaletaLista() {
    const [paletas, setPaletas] = useState([]);

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

    const getLista = async () => {
        const response = await PaletaSerivce.getLista();
        setPaletas(response);
    };

    useEffect(() => {
        getLista();
    }, []);

    return (
        <div className="PaletaLista">
            {paletas.map((paleta, index) => (
                <PaletaListaItem
                    key={`PaletaListaItem-${index}`}
                    index={index}
                    quantidadeSelecionada={paletaSelecionada[index]}
                    paleta={paleta}
                    onRemove={(index) => removerItem(index)}
                    onAdd={(index) => adicionarItem(index)}
                />
            ))}
        </div>
    );
}

export default PaletaLista;
