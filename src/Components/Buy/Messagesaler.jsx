import { Container, Row, Col, Table} from "react-bootstrap"

export default function Messagesaler() {
  return (
    <Container>
    <Row>
      <Col lg={7} md={7} className='mx-auto'>
        <h2 className="text-center text-muted">My Purchased Items</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Item Name</th>
              <th>Item Image</th>
              <th>Item Price</th>  
               </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td> </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  </Container>
)
}
