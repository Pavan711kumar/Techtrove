"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import { fetchProducts, fetchCategories } from "@/lib/data";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    async function loadData() {
      const prods = await fetchProducts();
      const cats = await fetchCategories();
      setProducts(prods);
      setCategories(cats);
    }
    loadData();
  }, []);

  return (
    <>
      <Header />
      
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-24 lg:pt-24 lg:pb-32">
          {/* Animated Background Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-brand-blue/40 to-brand-purple/40 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
          
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-8"
            >
              <Sparkles size={16} />
              <span>AI-Powered Automated Gadget Reviews</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-6"
            >
              Discover Your Next <br />
              <span className="text-gradient">Favorite Gadget.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10"
            >
              We automatically track, compare, and review the latest tech from top brands so you don't have to. Real specs, real prices, zero bias.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/deals" className="px-8 py-4 rounded-full bg-slate-900 text-white font-medium hover:bg-blue-600 transition-all hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2 w-full sm:w-auto justify-center">
                Explore Top Deals <ArrowRight size={18} />
              </Link>
              <Link href="/category/smartphones" className="px-8 py-4 rounded-full bg-white text-slate-900 font-medium border border-slate-200 hover:border-blue-200 hover:bg-blue-50 transition-all w-full sm:w-auto justify-center text-center">
                Browse Categories
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Trending Section */}
        <section className="py-20 bg-slate-50/50">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Trending Now</h2>
              <Link href="/deals" className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1">
                View all <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.slice(0, 4).map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  slug={product.slug}
                  price={product.price}
                  image={product.image}
                  brand={product.brand}
                  rating={product.rating}
                  buyUrl={product.buyUrl}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-12 text-center">Shop by Category</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {categories.map((category: any, i: number) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/category/${category.slug}`} className="group flex flex-col items-center p-6 rounded-3xl glass-card hover:border-blue-200 transition-all">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${category.color} flex items-center justify-center text-3xl mb-4 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      {category.icon}
                    </div>
                    <span className="font-semibold text-slate-800">{category.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
