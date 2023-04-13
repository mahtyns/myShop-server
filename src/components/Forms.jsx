import React from 'react';
import { useState } from 'react';
import { ContactPageContainer, ContactPageMap, BrandInformationGeneralContainer, BrandContactDetailList, BrandContactDetailListItem, UserMessageContactFormContainer, UserMessageContactForm, UserMessageContactFormInput, UserMessageContactFormLabel } from '../styling/contactPageStyling';
import { SharedCTAButton, SharedTitle } from '../styling/sharedStyling';

const Forms = () => {

    const [contactFormMessage, setContactFormMessage] = useState({
        name: '',
        surname: '',
        mail: '',
        tel: '',
        msg: ''
    })

      const handleSubmit = () => {
        console.log(``);
    }


    return (
        <ContactPageContainer>
            <SharedTitle>Contact Info</SharedTitle>
            <BrandInformationGeneralContainer>
                <BrandContactDetailList>
                    <BrandContactDetailListItem>Location: City, Country</BrandContactDetailListItem>
                    <BrandContactDetailListItem>Telephone: <a href='tel:123-456-789'>123-456-789</a></BrandContactDetailListItem>
                    <BrandContactDetailListItem>Opening hours: 10:00-20:00</BrandContactDetailListItem>
                    <BrandContactDetailListItem>Contact us: <a href='mailto:mymail@myshop.com'>mymail@myshop.com</a></BrandContactDetailListItem>
                </BrandContactDetailList>
                <ContactPageMap>
                    <iframe src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.4692896589245!2d-3.6879925779192337!3d40.41521993201166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228a007be2e9b%3A0x79abeb55cc8dfa59!2sPalacio%20de%20Cristal!5e0!3m2!1sen!2ses!4v1646502283783!5m2!1sen!2ses'} allowFullScreen="" width={800} height={300} loading="lazy" ></iframe>
                </ContactPageMap>
            </BrandInformationGeneralContainer>
            <SharedTitle>Any questions?</SharedTitle>
            <UserMessageContactFormContainer>
                <UserMessageContactForm>
                    <UserMessageContactFormLabel>Your name</UserMessageContactFormLabel>
                    <UserMessageContactFormInput placeholder='Your name' required onChange={(e) => console.log(e.target.value)} />
                    <UserMessageContactFormLabel>Your surname</UserMessageContactFormLabel>
                    <UserMessageContactFormInput placeholder='Your surname' required onChange={(e) => console.log(e.target.value)} />
                    <UserMessageContactFormLabel>Your mail</UserMessageContactFormLabel>
                    <UserMessageContactFormInput placeholder='Your mail' type="mail" required onChange={(e) => console.log(e.target.value)} />
                    <UserMessageContactFormLabel>Your phone (optional)</UserMessageContactFormLabel>
                    <UserMessageContactFormInput placeholder='123456789' type="number" onChange={(e) => console.log(e.target.value)} />
                    <UserMessageContactFormLabel>Message</UserMessageContactFormLabel>
                    <UserMessageContactFormInput type="text" placeholder='Write your message here' required onChange={(e) => console.log(e.target.value)} />
                    <div>
                        <SharedCTAButton onClick={handleSubmit}>Send message</SharedCTAButton>
                    </div>
                </UserMessageContactForm>
                
            </UserMessageContactFormContainer>
            

        </ContactPageContainer>
    )
}


export default Forms
