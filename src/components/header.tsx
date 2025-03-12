import { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Header: React.FC = () => {
  const headerWidth = 300; // Ancho aproximado del header
  const headerHeight = 80; // Alto aproximado del header

  // Inicializar centrado correctamente
  const [position, setPosition] = useState({
    x: Math.max(10, (window.innerWidth - headerWidth) / 7),
    y: Math.max(10, 50),
  });

  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragging) return;

      const newX = e.clientX - offset.x;
      const newY = e.clientY - offset.y;

      // Evitar que el header salga completamente de la pantalla
      setPosition({
        x: Math.max(-headerWidth + 50, Math.min(window.innerWidth - 50, newX)),
        y: Math.max(-headerHeight + 50, Math.min(window.innerHeight - 50, newY)),
      });
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    if (dragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, offset]);

  return (
    <header
      className="fixed w-[90%] md:w-[80%] bg-white/10 backdrop-blur-lg shadow-lg rounded-2xl px-4 md:px-8 py-4 flex justify-between items-center z-50 border-b border-white/20 cursor-grab active:cursor-grabbing overflow-hidden"
      style={{
        left: position.x,
        top: position.y,
        position: "absolute",
        maxWidth: "calc(100% - 20px)", // Evita que el header sea más grande que la pantalla
        maxHeight: "calc(100% - 20px)", // Evita el desbordamiento vertical
        clipPath: "inset(0px 0px)", // Oculta las partes que sobresalen
      }}
      onMouseDown={handleMouseDown}
    >
      {/* Nombre y título */}
      <div className="flex items-baseline space-x-4 md:space-x-6">
        <span className="text-white text-lg md:text-xl font-bold" style={{ fontFamily: "Playfair Display, serif" }}>
          Alejandro Gámez
        </span>
        <span className="text-gray-300 text-sm uppercase tracking-wide hidden md:block" style={{ fontFamily: "Montserrat, sans-serif" }}>
          Software Developer
        </span>
      </div>

      {/* Iconos de redes */}
      <div className="flex space-x-4 md:space-x-6">
        <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 transition-colors">
          <Github className="w-5 h-5 text-white hover:text-gray-300 transition-colors" />
        </a>
        <a href="https://linkedin.com/in/alejandrogamezct" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 transition-colors">
          <Linkedin className="w-5 h-5 text-white hover:text-gray-300 transition-colors" />
        </a>
        <a href="mailto:alejandrogamezct@gmail.com" className="p-2 rounded-full hover:bg-white/10 transition-colors">
          <Mail className="w-5 h-5 text-white hover:text-gray-300 transition-colors" />
        </a>
      </div>
    </header>
  );
};

export default Header;
