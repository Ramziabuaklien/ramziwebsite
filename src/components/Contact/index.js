import React from 'react';
import {ContactContainer,ContactFormWrap,Icon,ContactForm,Form,FormLabel,FormH1,FormInput,
FormTextarea,FormButton} from './ContactElements';
const Contact = () => {
    return (
        <>
            <ContactContainer>
            <ContactFormWrap>
                <Icon to="/">RamziWebsite</Icon>
                <ContactForm>
                    <Form autocomplete="off" action="mailto:ramziabubussnies@gmail.com" method="post" encType="text/plain" >
                        <FormH1>Contact to my email</FormH1>
                        <FormLabel>Email</FormLabel>
                        <FormInput type="email" autocomplete="off" required name="Email" />
                        <FormLabel>Your Message</FormLabel>
                        <FormTextarea required name="Message" />
                        <FormButton type="submit">Submit</FormButton>
                    </Form>
                </ContactForm>
            </ContactFormWrap>
            </ContactContainer>
        </>
    )
}

export default Contact;
