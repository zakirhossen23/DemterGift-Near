import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import UseFormInput from '@/components/components/UseFormInput';
import './css/style'


export default function Contact() {


    async function SendMessage() {
        let nameELM = document.getElementById("name").value;
        let emailELM = document.getElementById("email").value;
        let subjectELM = document.getElementById("subject").value;
        let messageELM = document.getElementById("message").value;
        var successMessage = document.getElementById("form-message-success");
        var warnMessage = document.getElementById("form-message-warning");
        successMessage.style.display = "none";
        warnMessage.style.display = "none";

        if (nameELM == "" || emailELM == "" || subjectELM == "" || messageELM == "") {
            warnMessage.style = "";
        }
        var templateParams = {
            to: 'steve.thijssen20@gmail.com',
            name: nameELM,
            email: emailELM,
            subject: subjectELM,
            message: messageELM
        };

        await emailjs.send('service_1xfas4j', 'template_usi1brl', templateParams, "QL-gzqg014Rd_QvMM")
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                successMessage.style = ""
            }, function (error) {
                warnMessage.style = "";
                console.log('FAILED...', error);
            });

    }

    return (
        <>
            <Row>
                <Col>
                    <section class="ftco-section">
                        <div class="container">

                            <div class="row justify-content-center">
                                <div class="col-md-10">
                                    <div class="wrapper">
                                        <div class="row no-gutters">
                                            <div class="col-md-6">
                                                <div class="contact-wrap w-100 p-lg-5 p-4">
                                                    <h3 class="mb-4">Send us a message</h3>
                                                    <div id="form-message-warning" style={{ "display": "none" }} class="mb-4">
                                                        Please try again!
                                                    </div>
                                                    <div id="form-message-success" style={{ "display": "none" }} class="mb-4">
                                                        Your message was sent, thank you!
                                                    </div>
                                                    <div id="contactForm" name="contactForm" class="contactForm">
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <div class="form-group">
                                                                    <input type="text" class="form-control" name="name" id="name" placeholder="Name" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-12">
                                                                <div class="form-group">
                                                                    <input type="email" class="form-control" name="email" id="email" placeholder="Email" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-12">
                                                                <div class="form-group">
                                                                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-12">
                                                                <div class="form-group">
                                                                    <textarea name="message" class="form-control" id="message" cols="30" rows="6" placeholder="Message"></textarea>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-12">
                                                                <div class="form-group">
                                                                    <input type="button" onClick={SendMessage} value="Send Message" class="btn btn-primary" />
                                                                    <div class="submitting"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 d-flex align-items-stretch">
                                                <div class="info-wrap w-100 p-lg-5 p-4 img">
                                                    <h3>Contact us</h3>
                                                    <p class="mb-4">We're open for any suggestion or just to have a chat</p>
                                                    <div class="dbox w-100 d-flex align-items-start">

                                                        <div class="text pl-3">
                                                            <p><span>Address:</span> De Puddingfabriek, Groningen, The Netherlands</p>
                                                        </div>
                                                    </div>

                                                    <div class="dbox w-100 d-flex align-items-center">

                                                        <div class="text pl-3">
                                                            <p><span>Email:</span> <a href="mailto:steve.thijssen20@gmail.com">steve.thijssen20@gmail.com</a></p>
                                                        </div>
                                                    </div>
                                                    <div class="dbox w-100 d-flex align-items-center">

                                                        <div class="text pl-3">
                                                            <p><span>Website</span> <a href="#">https://demetergift.com/</a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Col>
            </Row>
        </>
    )
}