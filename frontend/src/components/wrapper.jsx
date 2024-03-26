import Container from "react-bootstrap/Container";

const Wrapper = ({ children }) => {
  return(
  <div className='d-flex flex-column min-vh-100'>
    <div className='border-bottom'>
      <nav class="navbar">
        <div class="container">
          <a class="navbar-brand" href="/">
            Chat
          </a>
          <button type="button" class="btn btn-outline-primary">Выйти</button>
        </div>
      </nav>
    </div>

    <Container className='flex-grow-1 mt-3'>
    {children}
    </Container>

    <footer class="border-top border-secondary py-1 text-center">
      Footer
    </footer>
  </div>
  );
};

export default Wrapper;
  