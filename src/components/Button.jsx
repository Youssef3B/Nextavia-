function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-blue-600  text-white font-bold text-lg rounded-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
