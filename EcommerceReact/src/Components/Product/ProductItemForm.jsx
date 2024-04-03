import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TextControlsExample(props) {
    return (
        <div>
            <Card.Text>{props.price} €</Card.Text>
            <div class="boutonadd">
                <Form.Control type="number" min="0"/>
                <Button variant="primary">Add</Button>
            </div>
        </div>
    );
  }
  
  export default TextControlsExample;