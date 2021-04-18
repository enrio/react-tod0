import { Container, Row, Button, Col } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row className="row">
        <Col xs={12}>
          <h1>My New React Bootstrap SPA</h1>
          <Button>Look, I'm a button!</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
