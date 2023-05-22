import Header from 'homepage/header';
import Footer from 'homepage/footer';
const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};
export default Layout;
