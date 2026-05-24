"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  slug: string;
  price: number;
  image: string;
  brand: string;
  rating?: number;
  buyUrl: string;
}

export default function ProductCard({ id, name, slug, price, image, brand, rating = 4.5, buyUrl }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="glass-card rounded-2xl p-4 flex flex-col h-full bg-white group"
    >
      <div className="relative aspect-square w-full rounded-xl bg-slate-50 mb-4 overflow-hidden flex items-center justify-center p-4">
        {/* We use standard img for dummy data until remote patterns are configured */}
        <img
          src={image}
          alt={name}
          className="object-contain w-full h-full mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 left-2 bg-white/80 backdrop-blur-md px-2 py-1 rounded-md text-xs font-semibold text-slate-700">
          {brand}
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <Link href={`/product/${slug}`} className="block mb-2 hover:text-blue-600 transition-colors">
          <h3 className="font-semibold text-slate-900 line-clamp-2 leading-tight">
            {name}
          </h3>
        </Link>
        
        <div className="flex items-center gap-1 mb-4 mt-auto">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium text-slate-700">{rating}</span>
          <span className="text-xs text-slate-400 ml-1">(Reviews)</span>
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
          <div className="font-bold text-lg text-slate-900">${price.toFixed(2)}</div>
          <a
            href={buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg hover:shadow-blue-500/30"
          >
            Buy Now
            <ShoppingCart size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
