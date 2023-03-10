import { useState, useEffect } from "react";
import Modal from "components/Modal/Modal";
import { PaletaService } from "services/PaletaService";
import "./AdicionaPaletaModal.css";

function AdicionaPaletaModal({ closeModal, onCreatePaleta }) {
    const form = {
        preco: "",
        sabor: "",
        recheio: "",
        descricao: "",
        foto: "",
    };

    const [state, setState] = useState(form);

    const handleChange = (e, name) => {
        setState({ ...state, [name]: e.target.value });
    };

    const [canDisable, setCanDisable] = useState(true);

    const canDisableSendButton = () => {
        const response = !Boolean(
            state.descricao.length &&
                state.foto.length &&
                state.sabor.length &&
                state.preco.length
        );

        setCanDisable(response);
    };

    useEffect(() => {
        canDisableSendButton();
    });

    const createPaleta = async () => {
        const renomeiaCaminhoFoto = (fotoPath) => fotoPath.split("\\").pop();

        const { sabor, recheio, descricao, preco, foto } = state;

        const titulo = sabor + (recheio && " com " + recheio);

        const paleta = {
            sabor: titulo,
            descricao,
            preco,
            foto: `assets/images/${renomeiaCaminhoFoto(foto)}`,
        };

        const response = await PaletaService.create(paleta);
        onCreatePaleta(response);
        closeModal();
    };

    return (
        <Modal closeModal={closeModal}>
            <div className="AdicionaPaletaModal">
                <form autoComplete="off">
                    <h2>Adicionar ao Cardápio</h2>
                    <div>
                        <label
                            htmlFor="preco"
                            className="AdicionaPaletaModal__text"
                        >
                            Preço:{" "}
                        </label>
                        <input
                            id="preco"
                            type="text"
                            placeholder="R$ 1,00"
                            value={state.preco}
                            onChange={(e) => handleChange(e, "preco")}
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="sabor"
                            className="AdicionaPaletaModal__text"
                        >
                            Sabor:{" "}
                        </label>
                        <input
                            id="sabor"
                            type="text"
                            placeholder="Limão"
                            value={state.sabor}
                            onChange={(e) => handleChange(e, "sabor")}
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="recheio"
                            className="AdicionaPaletaModal__text"
                        >
                            Recheio:{" "}
                        </label>
                        <input
                            id="recheio"
                            type="text"
                            placeholder="Leite condensado"
                            value={state.recheio}
                            onChange={(e) => handleChange(e, "recheio")}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="descricao"
                            className="AdicionaPaletaModal__text"
                        >
                            Descrição:{" "}
                        </label>
                        <input
                            id="descricao"
                            type="text"
                            placeholder="Descreva o produto"
                            value={state.descricao}
                            onChange={(e) => handleChange(e, "descricao")}
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="foto"
                            className="AdicionaPaletaModal__text AdicionaPaletaModal__foto-label"
                        >
                            {" "}
                            {!state.foto.length
                                ? "Selecionar Imagem"
                                : state.foto}
                        </label>
                        <input
                            className="AdicionaPaletaModal__foto"
                            id="foto"
                            type="file"
                            accept="image/png, image/gif, image/jpeg"
                            value={state.foto}
                            onChange={(e) => handleChange(e, "foto")}
                            required
                        />
                    </div>
                    <button
                        className="AdicionaPaletaModal__enviar"
                        type="button"
                        disabled={canDisable}
                        onClick={createPaleta}
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </Modal>
    );
}

export default AdicionaPaletaModal;
