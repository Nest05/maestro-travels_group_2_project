import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>
        Welcome to <strong>Maestro Travels</strong> – Your Gateway to Kenya
        Adventures.
      </p>

      <h3>Our Mission</h3>
      <p>
        At Maestro Travels, we are passionate about showcasing the rich tapestry
        of tourist destinations that Kenya has to offer. Our mission is to
        inspire and guide travelers to explore the diverse landscapes, cultural
        treasures, and hidden gems that make Kenya a captivating destination.
      </p>

      <h3>What Sets Us Apart</h3>
      <ul>
        <li>
          <strong>User-Generated Content:</strong> We believe in the power of
          community. Not only can you explore curated travel destinations, but
          you can also contribute by adding your favorite spots and sharing your
          experiences with fellow travelers.
        </li>
        <li>
          <strong>Comprehensive Coverage:</strong> From breathtaking natural
          wonders to historical landmarks, bustling cities to tranquil retreats,
          our platform covers a wide array of travel destinations to suit every
          wanderer's taste.
        </li>
        <li>
          <strong>Interactive and Informative:</strong> Our platform goes beyond
          static information. Discover detailed insights, travel tips, and
          firsthand accounts from those who have explored the beauty of Kenya.
        </li>
      </ul>

      <h3>Meet The Team</h3>
      <p>
        Behind Maestro Travels is a dedicated team of travel enthusiasts who
        share a common goal – to make your travel experiences unforgettable.
        Learn more about the faces behind the scenes and their love for
        exploration.
      </p>
      <div className="main">
        <div className="my-container">
          <div className="team-image">
            <img src="https://rb.gy/oq9v9w" alt="Nestor" />
          </div>
          <div className="team">
            <p>Nestor Masinde</p>
            <p>Technical Lead</p>
          </div>
        </div>

        <div className="my-container">
          <div className="team-image">
            <img src="https://rb.gy/gi4gtz" alt="Naomie" />
          </div>
          <div className="team">
            <p>Naomie Jeruto</p>
            <p>UI/UX Developer</p>
          </div>
        </div>

        <div className="my-container">
          <div className="team-image">
            <img src="https://rb.gy/8h7549" alt="Ouma" />
          </div>
          <div className="team">
            <p>John Ouma</p>
            <p>Systems Engineer</p>
          </div>
        </div>

        <div className="my-container">
          <div className="team-image">
            <img src="https://rb.gy/9308mu" alt="Kimani" />
          </div>
          <div className="team">
            <p>John Kimani</p>
            <p>DevOps Engineer</p>
          </div>
        </div>

        <div className="my-container">
          <div className="team-image">
            <img src="https://rb.gy/tbhg0l" alt="Levis" />
          </div>
          <div className="team">
            <p>Levis Ngigi</p>
            <p>Release Engineer</p>
          </div>
        </div>

        <div className="my-container">
          <div className="team-image">
            <img
              src="https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Oliver"
            />
          </div>
          <div className="team">
            <p>Oliver Fadhil</p>
            <p>Back-End Developer</p>
          </div>
        </div>
      </div>

      <h3>How You Can Contribute</h3>
      <p>
        Maestro Travels thrives on the contributions of the travel community. If
        you have a favorite spot, a hidden gem, or an off-the-beaten-path
        destination that you'd like to share with the world, join us in building
        a comprehensive travel guide for Kenya. Your insights can inspire and
        guide fellow travelers on their journeys.
      </p>

      <h3>Connect With Us</h3>
      <p>
        We love connecting with our community! Follow us on social media for the
        latest updates, travel inspiration, and to be part of the conversation.
        Feel free to reach out with any questions, suggestions, or collaboration
        ideas.
      </p>
      <h3>Start Your Journey With Maestro Travels</h3>
      <p>
        Whether you're a seasoned traveler or planning your first adventure,
        Maestro Travels is here to be your companion in exploring the beauty and
        wonders of Kenya. Join us in discovering the extraordinary destinations
        that await you!
      </p>
      <p>Happy Exploring!</p>
    </div>
  );
}

export default About;
