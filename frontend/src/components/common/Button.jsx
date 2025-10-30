export default function Button({ children, className = "", onClick }) {
  return (
    <button onClick={onClick} className={`cursor-pointer ${className}`}>
      {children}
    </button>
  );
}
