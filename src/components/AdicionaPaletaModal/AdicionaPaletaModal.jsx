import { useState } from "react";
import Modal from "components/Modal/Modal";

import "./AdicionaPaletaModal.css";

function AdicionaPaletaModal({ closeModal }) {
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

    return (
        <Modal closeModal={closeModal}>
            <div className="AdicionaPaletaModal">
                <form autoComplete="false">
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
                            onChange={(e) => handleChange(e, "preco")}
                        />
                    </div>
                    <input
                        type="submit"
                        className="AdicionaPaletaModal__enviar"
                        value="Enviar"
                    />
                </form>
            </div>
        </Modal>
    );
}

export default AdicionaPaletaModal;
