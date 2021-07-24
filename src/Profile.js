import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import me1 from './Image/me1.jpg';
import './Hoidap.css';

import { FaBirthdayCake } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";

import { GrMail } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";

export default function Profile(props) {
    console.log('Profile');
    console.log(props.show);
    return (
        <Modal
            show={props.show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Body closeButton>
                <h4 >Bùi Thanh Sang</h4>
                <div className="sty_modal">


                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
                        <p className="p_proflie">
                            <FaBirthdayCake className="icon_profile" color="pink" />
                        23-03-2000
                    </p>
                        <p className="p_proflie">
                            <FaPhoneSquareAlt className="icon_profile" color="green" />
                        0862230300
                    </p>
                        <p className="p_proflie">
                            <GrMail className="icon_profile" color="rebeccapurple" />
                    ThanhSangBui23032k@gmail.com
                    </p>
                        <p className="p_proflie">
                            <FaFacebookSquare className="icon_profile" color="blue" />
                        https://www.facebook.com/ngeucici
                    </p>
                    </div>

                    <div className="centerText" style={{ flex: 1 }}>
                        <img style={{ borderRadius: '50%', height: 200, width: 200 }} src={me1} alt="Avatar" />
                    </div>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => {
                    props.setShow(false);
                }}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}