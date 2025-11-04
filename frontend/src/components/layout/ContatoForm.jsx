const ContatoForm = () => {
  return (
    
    <form className="w-full max-w-lg">
      <div className="flex flex-col gap-6">
        <input
          type="text"
          placeholder="Nome"
          className="w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none "
        />
        <input
          type="email"
          placeholder="E-mail"
          className="w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none"
        />
        <textarea
          placeholder="Sua mensagem"
          rows="5"
          className="w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none "
        ></textarea>
        <button
          type="submit"
          className="w-32 bg-orange-700 text-white font-bold py-3 px-6 rounded-full hover:bg-orange-400 transition-colors duration-300 cursor-pointer"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default ContatoForm;
