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
            <AboutSection style={{ textAlign: 'center', margin: '0 auto', maxWidth: '800px' }}>
    <h5>About BookomegA</h5>
    <p>
        <b>Welcome to BookomegA</b>, where books find new homes and readers discover hidden treasures. We’re passionate about bringing together book lovers who are looking to buy and sell quality second-hand books in a sustainable and cost-effective way.
    </p>
    <p><b>Why Buy Second-Hand Books?</b></p>
    <p>
        In a world full of mass production, second-hand books offer a chance to give old stories a second life. When you buy second-hand, you're not just getting a good deal; you're contributing to a circular economy that reduces waste and encourages the reuse of valuable resources. Plus, many second-hand books are gently used, offering the same incredible stories at a fraction of the cost!
    </p>
    <p><b>Environmental Impact</b></p>
    <p>
        Every book you buy or sell helps reduce the demand for new paper, saving trees and reducing carbon footprints. By choosing second-hand books, you're actively helping to decrease the environmental impact of paper production and waste, making it a small but meaningful step toward a more sustainable world.
    </p>
    <p><b>Cost-Effective and Accessible</b></p>
    <p>
        Books can be expensive, especially for avid readers. Our platform offers an affordable alternative to buying new books, allowing readers to access their favorite titles or discover new ones at a lower cost. Plus, by selling your old books, you not only create space on your shelves but also earn some extra cash to put toward your next literary adventure.
    </p>
    <p><b>A Marketplace for Everyone</b></p>
    <p>
        Whether you’re a student looking for textbooks at a fraction of the price, a collector in search of rare editions, or someone who simply loves reading, our platform is designed to cater to all kinds of book lovers. We make it easy for you to buy, sell, or trade books and connect with a community that shares your love for literature.
    </p>
    <p><b>Support Local Communities</b></p>
    <p>
        By selling or buying second-hand books through our site, you're also supporting a local community of readers. Every transaction helps to keep books circulating, allowing more people to experience the joy of reading without the barriers of high costs or excessive waste.
    </p>
    <p><b>Join Us in Making a Difference</b></p>
    <p>
        We believe in the power of books to shape minds, enrich lives, and inspire change. Join us in our mission to make reading more affordable, sustainable, and accessible to all. Together, we can give every book the opportunity to be loved again.
    </p>
    <p>Happy reading!</p>
</AboutSection>

            </ContentWrapper>
            <Footer />
        </div>
    )
}


