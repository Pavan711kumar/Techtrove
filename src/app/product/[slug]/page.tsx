"use client";

import { use, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Star, ShoppingCart, Check, X, ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { fetchProducts } from "@/lib/data";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const prods = await fetchProducts();
      const current = prods.find((p: any) => p.slug === resolvedParams.slug) || prods[0];
      setProduct(current);
      setLoading(false);
    }
    loadData();
  }, [resolvedParams.slug]);

  // Dummy specs and pros/cons
  const specs = [
    { label: "Display", value: "6.7-inch Super Retina XDR display" },
    { label: "Processor", value: "A17 Pro chip" },
    { label: "Camera", value: "48MP Main | 12MP Ultra Wide | 12MP Telephoto" },
    { label: "Battery", value: "Up to 29 hours video playback" },
  ];

  const pros = ["Incredible performance", "Stunning display", "Excellent battery life", "Premium titanium build"];
  const cons = ["Expensive", "Slow charging speeds", "iOS limitations for power users"];

  if (loading || !product) {
    return (
      <>
        <Header />
        <main className="flex-1 pt-24 pb-20 flex justify-center items-center h-screen">
           <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight size={14} />
            <Link href={`/category/${product.category.toLowerCase()}`} className="hover:text-blue-600">{product.category}</Link>
            <ChevronRight size={14} />
            <span className="text-slate-900 font-medium">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Product Image Gallery */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card rounded-3xl p-8 flex items-center justify-center bg-white aspect-square relative"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain mix-blend-multiply"
              />
              <div className="absolute top-4 left-4 bg-slate-900 text-white px-3 py-1 rounded-full text-sm font-semibold tracking-wider">
                {product.brand.toUpperCase()}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col justify-center"
            >
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1 bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium border border-yellow-200">
                  <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  {product.rating}
                </div>
                <span className="text-slate-500 text-sm">Automated Aggregated Score</span>
              </div>

              <div className="text-4xl font-bold text-slate-900 mb-8">
                ${product.price.toFixed(2)}
              </div>

              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                The {product.name} is a top-tier choice in the {product.category} category. 
                Our automated systems tracked this price and specs from official sources to ensure you get the most accurate data.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a 
                  href={product.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 group"
                >
                  <ShoppingCart size={20} className="group-hover:scale-110 transition-transform" />
                  Buy on Amazon
                </a>
              </div>

              {/* Key Specs Quick View */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-4">Key Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {specs.map((spec) => (
                    <div key={spec.label}>
                      <span className="block text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">{spec.label}</span>
                      <span className="block text-sm font-medium text-slate-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Pros and Cons Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center gap-2">
                <Check className="text-emerald-500" /> Reasons to Buy
              </h3>
              <ul className="space-y-4">
                {pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-3 text-emerald-800">
                    <div className="mt-1 bg-emerald-200 rounded-full p-1"><Check size={12} className="text-emerald-700" /></div>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-rose-50 border border-rose-100 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-rose-900 mb-6 flex items-center gap-2">
                <X className="text-rose-500" /> Reasons to Avoid
              </h3>
              <ul className="space-y-4">
                {cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-3 text-rose-800">
                    <div className="mt-1 bg-rose-200 rounded-full p-1"><X size={12} className="text-rose-700" /></div>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
