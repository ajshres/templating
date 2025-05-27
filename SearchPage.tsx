import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Title, Text, Space } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
// @ts-ignore
import { ProductGrid } from '../components/ProductGrid/ProductGrid';
// @ts-ignore
import { allProducts } from '../data/allProducts';
import Header from "../components/header";
import Footer from "../components/footer";
import '../assets/css/search-custom.css';

export function SearchPage() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const getQueryParam = () => new URLSearchParams(location.search).get('q') || '';
  
  const [searchQuery, setSearchQuery] = useState(getQueryParam());
  const [displayedQuery, setDisplayedQuery] = useState(getQueryParam());

  // Update search query when URL changes (e.g., from navbar search)
  useEffect(() => {
    const newQuery = getQueryParam();
    setSearchQuery(newQuery);
    setDisplayedQuery(newQuery);
  }, [location.search]);

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayedQuery(event.currentTarget.value);
  };

  const handleSearchSubmit = () => {
    navigate(`/search?q=${encodeURIComponent(displayedQuery.trim())}`);
  };

  const filteredProducts = allProducts.filter((product: any) => 
    searchQuery && (
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <>
      <Header showDashboardSpecificNav={false} />
      <Container size="xl" py="xl" className="mt-5">
      <div className="row justify-content-center mb-4">
        <div className="col-12 col-md-8 col-lg-6">
          <Title order={3} className="text-center mb-3" style={{ fontSize: '1.75rem' }}>Search Products</Title>
          <div className="d-flex justify-content-center align-items-center gap-2" style={{ maxWidth: '500px', margin: '0 auto' }}>
            <input
              type="text"
              className="form-control search-modern-input"
              placeholder="Search for products..."
              value={displayedQuery}
              onChange={handleSearchInputChange}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  handleSearchSubmit();
                }
              }}
              style={{
                borderRadius: '24px',
                height: '38px',
                fontSize: '0.95rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                border: '1.5px solid #d0d7de',
                flex: 1,
                paddingLeft: '1.1rem',
                paddingRight: '1.1rem',
                marginRight: '0.3rem',
                outline: 'none',
                transition: 'border 0.2s'
              }}
            />
            <button
              className="btn search-btn px-3"
              onClick={handleSearchSubmit}
              style={{
                borderRadius: '24px',
                height: '38px',
                backgroundColor: 'white',
                border: '1.5px solid #0d6efd',
                color: '#0d6efd',
                fontSize: '0.95rem',
                fontWeight: 500,
                boxShadow: '0 2px 8px rgba(13,110,253,0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '78px',
                transition: 'background 0.2s, color 0.2s, border 0.2s'
              }}
            >
              <IconSearch size={20} className="me-2" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>

      {searchQuery ? (
        <Text size="lg" mb="xl">
          {filteredProducts.length > 0 
            ? `${filteredProducts.length} result(s) for "${searchQuery}"`
            : `No results found for "${searchQuery}"`
          }
        </Text>
      ) : (
        <Text size="lg" mb="xl">
          Please enter a search term in the bar above.
        </Text>
      )}

      {searchQuery && filteredProducts.length > 0 && (
        <ProductGrid 
          products={filteredProducts} 
          cols={{ xs: 2, sm: 2, md: 3, lg: 4 }}
        />
      )}
      
      {!searchQuery && (
        <>
          <Space h="md" />
          <Text color="dimmed">Popular searches or featured products could be shown here.</Text>
        </>
      )}
    </Container>
      <Footer />
    </>
  );
}
