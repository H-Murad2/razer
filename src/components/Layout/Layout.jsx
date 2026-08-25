import Header from '../inc/Header';
import Footer from '../inc/Footer';

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col justify-between">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;