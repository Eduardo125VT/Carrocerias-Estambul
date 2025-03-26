
import React from "react";
import { Wrench, Truck, MapPin, Image, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function CarroceriasEstambul() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans relative">
      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/570000000000?text=Hola,%20estoy%20interesado%20en%20una%20cotizaci%C3%B3n%20de%20carrocer%C3%ADa%20para%20mi%20veh%C3%ADculo."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg z-50 transition"
      >
        Cotiza ahora
      </a>

      <header className="bg-gradient-to-r from-red-600 to-red-800 text-white py-10 px-6 text-center shadow-md">
        <div className="mb-4 h-16 w-32 mx-auto bg-white rounded-md flex items-center justify-center">
          <span className="text-red-800 font-bold">LOGO</span>
        </div>
        <h1 className="text-4xl font-bold">Carrocerías Estambul</h1>
        <p className="text-lg mt-2">Especialistas en carrocerías, chasis y fabricación de vehículos</p>
      </header>

      <section id="servicios" className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-2 gap-8 justify-center">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-2xl shadow-md p-6 text-center">
            <Truck className="w-10 h-10 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Fabricaciones</h3>
            <p>Diseño y construcción de carrocerías nuevas para camiones y vehículos industriales según tus necesidades.</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-2xl shadow-md p-6 text-center">
            <Wrench className="w-10 h-10 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Reparaciones</h3>
            <p>Especialistas en reparación de carrocerías, chasis y estructura de vehículos industriales.</p>
          </motion.div>
        </div>
      </section>

      <section id="sobre-nosotros" className="py-16 px-6 text-center bg-white border-t border-gray-200">
        <h2 className="text-3xl font-bold mb-4">Sobre Nosotros</h2>
        <p className="max-w-3xl mx-auto text-lg">
          En Carrocerías Estambul nos apasiona fabricar y dar vida a vehículos industriales. Con más de 20 años de experiencia, un equipo altamente capacitado y tecnología de punta, ofrecemos soluciones eficientes, seguras y duraderas.
        </p>
      </section>

      <section id="ubicacion" className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Ubicación</h2>
        <MapPin className="w-10 h-10 text-red-600 mx-auto mb-4" />
        <p className="text-lg">Estamos ubicados en [Tu ciudad], [dirección específica o referencia].</p>
      </section>

      <section id="galeria" className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold mb-4">Galería</h2>
        <Image className="w-10 h-10 text-red-600 mx-auto mb-4" />
        <p className="text-lg mb-4">Muy pronto podrás ver nuestros trabajos más recientes aquí.</p>
      </section>

      <section id="testimonios" className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Testimonios</h2>
        <MessageCircle className="w-10 h-10 text-red-600 mx-auto mb-4" />
        <p className="text-lg">"Excelente servicio, transformaron completamente mi camión y quedó como nuevo." - Cliente satisfecho</p>
      </section>

      <footer className="bg-gray-800 text-white py-6 px-4 text-center">
        <p>© 2025 Carrocerías Estambul. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
