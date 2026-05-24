import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 mt-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-black tracking-tighter text-slate-900 mb-4 block">
              TechTrove
            </Link>
            <p className="text-slate-500 max-w-sm mb-6">
              Your ultimate destination for automated, unbiased tech reviews. We help you find the best gadgets at the best prices.
            </p>
            <div className="flex items-center gap-4 text-slate-400 font-medium text-sm">
              <a href="#" className="hover:text-blue-500 transition-colors">Twitter</a>
              <a href="#" className="hover:text-pink-500 transition-colors">Instagram</a>
              <a href="#" className="hover:text-red-500 transition-colors">YouTube</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Categories</h4>
            <ul className="space-y-3">
              <li><Link href="/category/smartphones" className="text-slate-500 hover:text-blue-600 transition-colors">Smartphones</Link></li>
              <li><Link href="/category/laptops" className="text-slate-500 hover:text-blue-600 transition-colors">Laptops</Link></li>
              <li><Link href="/category/gaming" className="text-slate-500 hover:text-blue-600 transition-colors">Gaming</Link></li>
              <li><Link href="/category/accessories" className="text-slate-500 hover:text-blue-600 transition-colors">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-slate-500 hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-slate-500 hover:text-blue-600 transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-slate-500 hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/disclosure" className="text-slate-500 hover:text-blue-600 transition-colors">Affiliate Disclosure</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} TechTrove. All rights reserved.
          </p>
          <p className="text-slate-400 text-xs text-center md:text-right max-w-xl">
            TechTrove is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
          </p>
        </div>
      </div>
    </footer>
  );
}
