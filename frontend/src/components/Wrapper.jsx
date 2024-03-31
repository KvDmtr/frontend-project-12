import { useTranslation } from 'react-i18next';
import Container from "react-bootstrap/Container";

const Wrapper = ({ children }) => {
  const { t } = useTranslation();
  return(
  <div className='d-flex flex-column min-vh-100'>
    <div className='border-bottom'>
      <nav className="navbar">
        <div className="container">
          <a className="navbar-brand" href="/">
            <div className='d-flex'>
              <p className='mb-0'>Chat</p>
              <i className="bi bi-messenger px-1"></i>
            </div>
          </a>
          <button type="button" className="btn btn-outline-primary d-none">{t('header.btn')}</button>
        </div>
      </nav>
    </div>

    <Container className='flex-grow-1 mt-3'>
    {children}
    </Container>

    <footer className="border-top border-secondary py-1 text-center">
      Footer
    </footer>
  </div>
  );
};

export default Wrapper;
  