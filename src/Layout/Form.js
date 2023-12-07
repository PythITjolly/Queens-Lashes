import "../App.css";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import "../Styles/Form.css";

export default function Contact() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleClick = () => {
    setShowSuccessMessage(true);
  };

  return (
    <>
      <div className="form">
        <section className="formulario-contenedor">
          <Form className="f1" action="/contacto" method="post">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="descripcionFormulario">Name</Form.Label>
              <Form.Control type="text" placeholder="" name="name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="descripcionFormulario">
                Phone Number
              </Form.Label>
              <Form.Control type="text" placeholder="" name="phone" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="descripcionFormulario">
                Email address
              </Form.Label>
              <Form.Control type="email" placeholder="" name="email" required />
            </Form.Group>

            <Form.Group className="input-group mb-3">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Options
              </label>
              <select className="form-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="1">Trips</option>
                <option value="2">Gastronomy</option>
                <option value="3">Adventures</option>
                <option value="4">Other</option>
              </select>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="descripcionFormulario">Enquiry</Form.Label>
              <Form.Control as="textarea" rows={3} name="enquiry" required />
            </Form.Group>
            <div className="botoneEnviar">
              {showSuccessMessage ? (
                <p>
                  Your message has been successfully sent. We look forward to
                  connecting with you soon.
                </p>
              ) : null}
              <button
                className="btn btn-primary descripcionFormulario"
                type="button"
                onClick={handleClick}
              >
                Submit
              </button>
            </div>
          </Form>
        </section>
      </div>
    </>
  );
}
