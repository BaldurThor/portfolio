import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { usePathname } from "next/navigation";

const Header: React.FC = ({ title }) => {
  const pathname = usePathname().split('/');

  const pathNavItems = pathname.slice(0, -1);

  const navItems = pathNavItems.map((item) =>
    <Nav.Link href={"/".concat(item)} > {item}</Nav.Link >
  )

  return (
    <header className="border-bottom">
      <Navbar>
        <Container>
          {pathname.at(-1) ?
            <>
              <Navbar.Brand href="/">{title}</Navbar.Brand>
              <Nav className="me-auto">
                {navItems}
                <Nav.Link>{pathname.at(-1)}</Nav.Link>
              </Nav>
            </>
            : <Navbar.Brand>{title}</Navbar.Brand>}
        </Container>
      </Navbar>
    </header >
  );
};

export default Header;

