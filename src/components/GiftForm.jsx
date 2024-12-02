import React, { useState } from 'react';

const GiftForm = ({ onGiftSubmit }) => {
    const [genero, setGenero] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [donante, setDonante] = useState('');
    const [mensajeExito, setMensajeExito] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        onGiftSubmit({ Genero: genero, Juguete: descripcion, Nombre: donante });
        setMensajeExito(true);
        setTimeout(() => setMensajeExito(false), 5000); // Ocultar el mensaje después de 3 segundos
        setGenero('');
        setDescripcion('');
        setDonante('');
    };

    return (
        <div className="form-container font-oswald p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Registrar Regalo</h2>
            {mensajeExito && (
                <div className="mb-4 p-2 bg-green-200 text-green-800 rounded-lg">
                    ¡Juguete registrado satisfactoriamente! 💚
                </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
                <select
                    value={genero}
                    onChange={(e) => setGenero(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg"
                >
                    <option value="">Seleccione Género del juguete</option>
                    <option value="Masculino"> 👦 Masculino</option>
                    <option value="Femenino">👧 Femenino</option>
                    <option value="Generico">🤖 Generico</option>
                </select>
                <input
                    type="text"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    placeholder="Descripción del Jugete"
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg"
                />
                <input
                    type="text"
                    value={donante}
                    onChange={(e) => setDonante(e.target.value)}
                    placeholder="Nombre del donante"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                />
                <button
                    type="submit"
                    className="w-full p-2 bg-counter-primary text-white font-bold rounded-lg hover:bg-counter-primary-dark transition-all duration-300"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default GiftForm;