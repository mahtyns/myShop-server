import React from 'react'
import { NewsletterFormInput, NewsletterFormInputContainer, NewsletterFormInputWrapper, NewsletterModuleGeneralContainer } from '../../styling/newsletterModuleStyling'
import { SharedCTAButton, SharedParagraph, SharedTitle } from '../../styling/sharedStyling'

const NewsletterModule = () => {
  return (
    <NewsletterModuleGeneralContainer>
      <SharedTitle>Newsletter</SharedTitle>
      <SharedParagraph>
        Join our newsletter list and never miss anything. Get a welcome discount on your
        first purchase.
      </SharedParagraph>
      <NewsletterFormInputWrapper>
        <NewsletterFormInputContainer>
          <NewsletterFormInput placeholder='Name' />
        </NewsletterFormInputContainer>
      </NewsletterFormInputWrapper>
      <NewsletterFormInputWrapper>
        <NewsletterFormInputContainer>
          <NewsletterFormInput placeholder='Email' />
        </NewsletterFormInputContainer>
      </NewsletterFormInputWrapper>
      <SharedCTAButton>Subscribe</SharedCTAButton>
    </NewsletterModuleGeneralContainer>
  )
}

export default NewsletterModule