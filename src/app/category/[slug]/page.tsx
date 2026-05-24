"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Filter, ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import { fetchProducts, fetchCategories } from "@/lib/data";

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const [products, setProducts] = useState<any[]>([]);
  const [categoryName, setCategoryName] = useState<string>("Category");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const cats = await fetchCategories();
      const currentCat = cats.find((c: any) => c.slug === resolvedParams.slug);
      setCategoryName(currentCat?.name || resolvedParams.slug);

      const prods = await fetchProducts(resolvedParams.slug);
      setProducts(prods);
      setLoading(false);
    }
    loadData();
  }, [resolvedParams.slug]);

  return (
    <>
      <Header />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight size={14} />
            <span className="text-slate-900 font-medium">{categoryName}</span>
          </nav>

          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-2">
                {categoryName}
              </h1>
              <p className="text-slate-500">
                Automated reviews and price tracking for the best {categoryName.toLowerCase()}.
              </p>
            </div>
            
            <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
              <Filter size={18} />
              Filter & Sort
            </button>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
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
          ) : (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-700 mb-2">No products found</h3>
              <p className="text-slate-500">We are currently scraping more products for this category. Check back soon!</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
