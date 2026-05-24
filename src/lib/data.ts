import { createClient } from '@/utils/supabase/client';
import { dummyProducts, dummyCategories } from './dummyData';

export async function fetchCategories() {
  try {
    const supabase = createClient();
    const { data, error } = await supabase.from('categories').select('*');
    
    if (error) {
      // Supabase not configured yet, fallback silently
      return dummyCategories;
    }
    
    if (!data || data.length === 0) {
      console.log('No categories found in Supabase. Falling back to dummy data.');
      return dummyCategories;
    }
    
    return data;
  } catch (err) {
    // Network or configuration error, fallback silently
    return dummyCategories;
  }
}

export async function fetchProducts(categorySlug?: string) {
  try {
    const supabase = createClient();
    let query = supabase.from('products').select(`
      *,
      categories!inner(name, slug)
    `);

    if (categorySlug) {
      query = query.eq('categories.slug', categorySlug);
    }

    const { data, error } = await query;
    
    if (error) {
      // Supabase not configured yet, fallback silently
      return categorySlug 
        ? dummyProducts.filter(p => p.category.toLowerCase() === categorySlug.toLowerCase()) 
        : dummyProducts;
    }
    
    if (!data || data.length === 0) {
      console.log('No products found in Supabase. Falling back to dummy data.');
      return categorySlug 
        ? dummyProducts.filter(p => p.category.toLowerCase() === categorySlug.toLowerCase()) 
        : dummyProducts;
    }
    
    // Map Supabase product format to match our frontend format
    return data.map(p => ({
      id: p.id,
      name: p.name,
      slug: p.slug,
      brand: p.brand,
      price: p.price,
      image: p.images && p.images.length > 0 ? p.images[0] : 'https://via.placeholder.com/600',
      rating: p.performance_score ? p.performance_score / 20 : 4.5, // Convert 0-100 to 0-5
      buyUrl: p.buy_url,
      category: p.categories?.name || 'Uncategorized',
      specs: p.specs,
      pros: p.pros,
      cons: p.cons
    }));
  } catch (err) {
    // Network or configuration error, fallback silently
    return categorySlug 
      ? dummyProducts.filter(p => p.category.toLowerCase() === categorySlug.toLowerCase()) 
      : dummyProducts;
  }
}
