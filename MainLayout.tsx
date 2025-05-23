import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Helmet } from 'react-helmet';
import { Footer } from './Footer';
import { CustomerRepBanner } from './CustomerRepBanner';
import { Box, Container } from '@mantine/core';
import FloatingWhatsAppIcon from '../FloatingWhatsAppIcon';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Helmet>
        <title>Druk Handicraft | Best Handicraft, Arts in Nepal, Thangka, Buddha Statues & Himalayan Artifacts</title>
        <meta name="description" content="Shop the best handicraft, best arts in Nepal, thangka paintings, Buddha statues, copper and gold statues, and authentic Himalayan artifacts. Discover spiritual, religious, and artisan crafts from Bhutan and Nepal. Worldwide shipping." />
        <meta name="keywords" content="best handicraft, best arts in Nepal, thangka, thangka painting, buddha statue, copper statue, gold statue, Nepal handicraft, Bhutan handicraft, Himalayan art, artisan, handcrafted, religious statue, spiritual, decor, Buddhist, sculpture, artisan statue, traditional art, spiritual art, Nepal art, Tibetan art, Buddhist art, mandala, gifts, home decor, spiritual gifts" />
        <link rel="canonical" href="https://drukhandicraft.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drukhandicraft.com/" />
        <meta property="og:title" content="Druk Handicraft | Best Handicraft, Arts in Nepal, Thangka, Buddha Statues & Himalayan Artifacts" />
        <meta property="og:description" content="Shop the best handicraft, best arts in Nepal, thangka paintings, Buddha statues, copper and gold statues, and authentic Himalayan artifacts. Discover spiritual, religious, and artisan crafts from Bhutan and Nepal. Worldwide shipping." />
        <meta property="og:image" content="https://drukhandicraft.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://drukhandicraft.com/" />
        <meta name="twitter:title" content="Druk Handicraft | Best Handicraft, Arts in Nepal, Thangka, Buddha Statues & Himalayan Artifacts" />
        <meta name="twitter:description" content="Shop the best handicraft, best arts in Nepal, thangka paintings, Buddha statues, copper and gold statues, and authentic Himalayan artifacts. Discover spiritual, religious, and artisan crafts from Bhutan and Nepal. Worldwide shipping." />
        <meta name="twitter:image" content="https://drukhandicraft.com/og-image.jpg" />
      </Helmet>
      <Box style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
        <Navbar />
        <Container size="xl" style={{ width: '100%', padding: '0' }}> {/* Ensure banner is within container width */}
          <CustomerRepBanner />
        </Container>
        <Box component="main" style={{
          flex: 1,
          padding: '0 1rem', // Add some horizontal padding to main content
        }}>
          {children}
        </Box>
        <Footer />
        <FloatingWhatsAppIcon />
      </Box>
    </>
  );
}
