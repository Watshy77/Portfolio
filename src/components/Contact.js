// src/components/Contact.js
import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactContainer = styled.section`
  padding: 50px 20px;
  background-color: #333;
  color: white;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #555;
  border-radius: 5px;
  background-color: #444;
  color: white;
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #555;
  border-radius: 5px;
  background-color: #444;
  color: white;
  resize: none;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #ff66aa;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff3385;
  }
`;

const CircleToast = styled.div`
  background-color: #ff66aa;
  color: white;
  border-radius: 50%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  width: 100px;
  height: 100px;
  text-align: center;
`;

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_x2h6xzn',
            'template_mwmadbj',
            formData,
            '7JJ67XVtoOoUF5GD9'
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            toast(<CircleToast>Message envoyé!</CircleToast>, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }).catch((err) => {
            console.error('FAILED...', err);
            toast(<CircleToast>Échec de l'envoi!</CircleToast>, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        });

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <ContactContainer id="contact">
            <ContactTitle>Contactez-moi</ContactTitle>
            <ContactForm onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="email"
                    name="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <TextArea
                    name="message"
                    rows="5"
                    placeholder="Votre message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <SubmitButton type="submit">Envoyer</SubmitButton>
            </ContactForm>
            <ToastContainer />
        </ContactContainer>
    );
};

export default Contact;