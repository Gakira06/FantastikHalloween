const ContatoCard = () => {
  return (
    // O cartão branco que se sobrepõe
    <div className="bg-white p-8 shadow-lg rounded-md w-full max-w-md">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-2">LIGUE PARA NÓS</h3>
        <p className="text-gray-600">(11) 99999-9999</p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-2">LOCALIZAÇÃO</h3>
        <p className="text-gray-600">Avenida Paulista, 1000</p>
        <p className="text-gray-600">São Paulo - SP</p>
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-2">
          HORÁRIO COMERCIAL
        </h3>
        <p className="text-gray-600">Seg - Sex ........ 09h - 19h</p>
        <p className="text-gray-600">Sáb, Dom ........ Fechado</p>
      </div>
    </div>
  );
};

export default ContatoCard;
