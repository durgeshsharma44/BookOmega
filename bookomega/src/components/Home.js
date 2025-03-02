import React from 'react'
import Carousel from './Carousel'
import Subject from './Subject'
import Footer from './Footer'
import styled from 'styled-components'

// Styled component for better control of alignment and styling
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
`;

const AboutSection = styled.div`
  margin-top: 40px;
  padding: 20px;
  max-width: 800px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export default function Home() {
    return (
        <div>
            <Carousel />
            <Subject />
            <ContentWrapper>
                <AboutSection>
                    <h5>About BookSwap</h5>
                    <p>Your trusted platform to buy and sell second-hand books. Find books at affordable prices and give your old books a new home.</p>
                </AboutSection>
            </ContentWrapper>
            <Footer />
        </div>
    )
}


