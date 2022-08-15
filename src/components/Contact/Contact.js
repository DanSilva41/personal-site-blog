import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '@common/Button';
import PageHeader from '@common/PageHeader';
import useForm from '@src/hooks/useForm';

import {
  ContactBox,
  ContactForm, ContactWrapper,
  LeftContent
} from './Contact.style';

function Contact() {
  const { formData, errors, handleInput, handleSubmit, isFormValid } = useForm();
  const formId = `${process.env.FORMSPREE_FORM_ID}`;

  return (
    <ContactWrapper id="contact">
      <PageHeader>Get In Touch</PageHeader>
      <ContactBox>
        <LeftContent>
          <FontAwesomeIcon size={'5x'} icon="handshake" />
          <h3>Thank you</h3>
          <p>Do you have any doubts?</p>
        </LeftContent>
        <ContactForm
          id="personal-contact-form"
          noValidate
          action={`https://formspree.io/f/${formId}`}
          method="POST"
        >
          <label className="label__email">
            <span>Email</span>
            <input
              className={errors._replyto && 'invalid'}
              onChange={handleInput}
              value={formData.email}
              id="email"
              name="_replyto"
              type="email"
              required
              placeholder="example@gmail.com"
            />
          </label>
          <label className="label__name">
            <span>Name</span>
            <input
              className={errors.name && 'invalid'}
              onChange={handleInput}
              value={formData.name}
              name="name"
              type="text"
              required
              placeholder="John Doe"
            />
          </label>
          <label className="label__message">
            <span>Message</span>
            <textarea
              className={errors.message && 'invalid'}
              onChange={handleInput}
              value={formData.message}
              name="message"
              required
              placeholder="Hey there!"
            />
          </label>

          <Button
            disabled={!isFormValid}
            className="submit__btn"
            onClick={handleSubmit}
            as="button"
            type="submit"
            value="send"
          >
            <FontAwesomeIcon icon="paper-plane" /> Submit
          </Button>
        </ContactForm>
      </ContactBox>
    </ContactWrapper>
  );
}
export default Contact;
