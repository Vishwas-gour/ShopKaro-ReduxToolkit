import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import './css/payment.css'


function Payment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const cards = useSelector((state) => state.cartSlice.cards);
  const card = cards.find((key) => key.id == id);

  function handleForm(e) {
    e.preventDefault();
    navigate("/popup")

  }
  return (
    <div className='payment'>
      <h3 style={{ borderRadius: "20px", textAlign: "center", backgroundColor: "rgb(167, 167, 255)", padding: "1rem" }}>Product Price: ₹ {(card.price * card.quantity)}</h3>
      <Form>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We&apos;ll never share your email with anyone else.
          </Form.Text>
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Mobile No.</Form.Label>
          <Form.Control type="text" placeholder="Enter Mobile No" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Select payment method</Form.Label>

          <select className="form-select" style={{ marginBottom: "10px" }}>
            <option value="creditCard">Credit Card</option>
            <option value="debitCard">Debit Card</option>
            <option value="paypal">PayPal</option>
            <option value="paypal">Bank Transfer</option>
            <option value="paypal">Cash on Delivery</option>
          </select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I am not a Robot" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleForm}>
          Submit
        </Button>
      </Form>

    </div>
  );
}

export default Payment