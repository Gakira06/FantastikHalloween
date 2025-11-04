import { useState } from "react";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom"

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const response = await fetch("http://localhost:5001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.message || "Erro ao logar");
      } else {
        setSuccess("Login realizado com sucesso!");
        localStorage.setItem("usuario", JSON.stringify(data.usuario));
        setTimeout(() => {
          setShowModal(false);
          setEmail("");
          setSenha("");
          setSuccess("");
        }, 1500);
      }
    } catch {
      setError("Erro de conexão");
    }
    setLoading(false);
  };

  return (
    <>
      <header className="w-full bg-black text-white flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-4">
        <div className="flex flex-col items-center w-full md:w-auto">
          <div className="flex justify-center w-full">
            <Link to="/">
              <img
                src="/Logo.png"
                alt="Logo"
                className="h-24 w-auto md:h-32 md:w-60 object-contain"
              />
            </Link>
          </div>
          <p className="text-gray-400 text-xs md:text-2xs tracking-widest mt-1 font-bold py-2 text-center">
            UMA GRANDE SELEÇÃO DE FANTASIAS
          </p>
        </div>

        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <div className="flex flex-col leading-tight text-right">
            <Button
              className="p-2 md:p-3 rounded-md bg-gray-300 font-semibold text-xs md:text-3xs text-black hover:bg-orange-600"
              onClick={() => setShowModal(true)}
            >
              Login
            </Button>
          </div>
        </div>
      </header>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-xl p-6 w-full max-w-xs shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-black text-xl"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h2 className="text-lg font-bold mb-4 text-center text-black">
              Login
            </h2>
            <form onSubmit={handleLogin} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded px-3 py-2 text-black"
                required
              />
              <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="border rounded px-3 py-2 text-black"
                required
              />
              <button
                type="submit"
                className="bg-orange-600 text-white font-bold py-2 rounded hover:bg-orange-700"
                disabled={loading}
              >
                {loading ? "Entrando..." : "Entrar"}
              </button>
              {error && (
                <span className="text-red-600 text-xs text-center">
                  {error}
                </span>
              )}
              {success && (
                <span className="text-green-600 text-xs text-center">
                  {success}
                </span>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
