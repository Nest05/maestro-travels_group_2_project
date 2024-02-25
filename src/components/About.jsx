import React, {useEffect} from "react";
import "./about.css";
import Comments from "./Comments";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function About() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div id="aboutTop">
      <div className="about">
        <div id="imageContainer7">
          <img src='https://cdn.pixabay.com/photo/2019/04/12/11/46/antelope-4121962_640.jpg' alt='Antelope'/>
        </div>
        <div id="about1">
          <h1>About Us</h1>
          <p>
            Welcome to <strong className="strong">Maestro Travels</strong> – Your Gateway to Kenya
            Adventures.
          </p>

          <h3>Our Mission</h3>
          <p>
            At Maestro Travels, we are passionate about showcasing the rich tapestry
            of tourist destinations that Kenya has to offer. <strong className="strong">Our mission is to
            inspire and guide travelers to explore the diverse landscapes, cultural
            treasures, and hidden gems that make Kenya a captivating destination.</strong>
          </p>
        </div>
        <div id="imageContainer8">
          <img src='https://cdn.pixabay.com/photo/2015/02/20/21/01/kenya-643631_640.png' alt='Kenyan flag on hand'/>
        </div>
        <div id="about2">
          <h3>What Sets Us Apart</h3>
          <ul>
            <li>
              <strong className="strong">User-Generated Content:</strong> We believe in the power of
              community. Not only can you explore curated travel destinations, but
              you can also contribute by adding your favorite spots and sharing your
              experiences with fellow travelers.
            </li>
            <li>
              <strong className="strong">Comprehensive Coverage:</strong> From breathtaking natural
              wonders to historical landmarks, bustling cities to tranquil retreats,
              our platform covers a wide array of travel destinations to suit every
              wanderer's taste.
            </li>
            <li>
              <strong className="strong">Interactive and Informative:</strong> Our platform goes beyond
              static information. Discover detailed insights, travel tips, and
              firsthand accounts from those who have explored the beauty of Kenya.
            </li>
          </ul>
        </div>
        <div id="about6">
        <div id="imageContainer9">
          <img src='https://cdn.pixabay.com/photo/2019/07/29/21/15/warrior-4371555_640.jpg' alt='Maasai warriors'/>
        </div>
        <div id="imageContainer10">
          <img src='https://cdn.pixabay.com/photo/2021/06/24/12/35/beach-6361126_640.jpg' alt='Maasai warriors'/>
        </div>
        <h3>Meet The Team</h3>
        <p>
          Behind Maestro Travels is a dedicated team of travel enthusiasts who
          share a common goal – <strong className="strong">to make your travel experiences unforgettable.</strong>
          Learn more about the faces behind the scenes and their love for
          exploration.
        </p>
      </div>
      <div id="main">
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
              src="https://rebrand.ly/wro83wn"
              alt="Oliver"
            />
          </div>
          <div className="team">
            <p>Oliver Fadhil</p>
            <p>Back-End Developer</p>
          </div>
        </div>
      </div>
      </div>
      <div className="about">
        <div id="about3">
          <h3>How You Can Contribute</h3>
          <p>
            Maestro Travels thrives on the contributions of the travel community. If
            you have a favorite spot, a hidden gem, or an off-the-beaten-path
            destination that you'd like to share with the world, <strong className="strong">join us in building
            a comprehensive travel guide for Kenya.</strong> Your insights can inspire and
            guide fellow travelers on their journeys.
          </p>
        </div>
        <div id="about4">
          <h3>Connect With Us</h3>
          <p>
            We love connecting with our community! <strong className="strong">Follow us on social media for the
            latest updates, travel inspiration, and to be part of the conversation.</strong>
            Feel free to reach out with any questions, suggestions, or collaboration
            ideas.
          </p>
        </div>
        <div id="about5">
          <h3>Start Your Journey With Maestro Travels</h3>
          <p>
            Whether you're a seasoned traveler or planning your first adventure,
            <strong className="strong">Maestro Travels is here to be your companion in exploring the beauty and
            wonders of Kenya.</strong> Join us in discovering the extraordinary destinations
            that await you!
          </p>
          <p>Happy Exploring!</p>
        </div>
        <Comments />
      </div>

    </div>
  );
}
export default About;

/* 
About images;

 - https://cdn.pixabay.com/photo/2019/04/12/11/46/antelope-4121962_640.jpg
 - https://cdn.pixabay.com/photo/2023/06/10/14/48/zebras-8054175_640.jpg
 - https://cdn.pixabay.com/photo/2020/04/02/07/38/hot-air-balloon-4993835_640.jpg
 - https://cdn.pixabay.com/photo/2021/06/24/12/36/hut-6361139_640.jpg
 - https://cdn.pixabay.com/photo/2021/06/24/12/35/beach-6361126_640.jpg
 - https://cdn.pixabay.com/photo/2015/08/30/15/43/palms-914351_1280.jpg
 - https://cdn.pixabay.com/photo/2019/07/29/21/15/warrior-4371555_640.jpg
 - https://cdn.pixabay.com/photo/2013/05/08/04/33/nairobi-109492_640.jpg
 - https://cdn.pixabay.com/photo/2013/07/30/15/06/kenya-168880_640.jpg


*/