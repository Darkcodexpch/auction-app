import { Container, Row, Col} from "react-bootstrap"
import Items from "../Items/Items"
export default function Dashboard() {
  return (
    <Container>
      <Row>
        <Col md={12}>
        <Items/>
        </Col>
      </Row>
    </Container>
  )
}
