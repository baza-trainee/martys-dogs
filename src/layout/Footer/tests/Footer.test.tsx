import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '../../../utils/test-utils';
import Footer from '../Footer';

describe('Footer component tests', () => {
  it('renders the logo', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const logo = screen.getByAltText('Best Friend logo');
    expect(logo).toBeInTheDocument();
  });

  it('contains navigation links', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const mainLink = screen.getByText(/Main/i);
    const aboutLink = screen.getByText(/About/i);
    const petsLink = screen.getByText(/Pets/i);

    expect(mainLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(petsLink).toBeInTheDocument();
  });

  it('displays contact information', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const emailContact = screen.getByText(/cityofgoodnessua@gmail.com/i);
    const phoneContact = screen.getByText(/\+380 95 053 60 09/i);

    expect(emailContact).toBeInTheDocument();
    expect(phoneContact).toBeInTheDocument();
  });
});


