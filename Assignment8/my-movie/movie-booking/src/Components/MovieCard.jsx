import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MovieCard = ({ movie }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-gradient-to-br from-purple-600 via-pink-500 to-red-400 shadow-xl rounded-2xl overflow-hidden text-white"
    >
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6 space-y-3">
        <h2 className="text-2xl font-extrabold tracking-wide uppercase">
          {movie.title}
        </h2>
        <p className="text-sm text-pink-100">Released: {movie.year}</p>
        <p className="text-sm text-pink-200 font-medium">⭐ Cast: {movie.cast}</p>
        <motion.div whileTap={{ scale: 0.95 }}>
          <Link
            to={`/movie/${movie.id}`}
            className="inline-block mt-4 bg-white text-pink-600 font-semibold px-5 py-2 rounded-md hover:bg-pink-100 transition-colors duration-200"
          >
            View Details
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MovieCard;
