import { Container } from "../../Container.styled";
import { Header, Link } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cart">Shopping Cart</Link>
        </nav>
      </Header>
    </Container>
  );
};
