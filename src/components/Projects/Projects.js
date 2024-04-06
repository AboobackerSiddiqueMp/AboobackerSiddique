import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import olx from "../../Assets/Projects/olx.png"
import media from "../../Assets/Projects/musicPlayer.jpg"
import netflix from "../../Assets/Projects/netflix.png"
import ecart from "../../Assets/Projects/e cart.jpg"
import news from "../../Assets/Projects/newsinshorts-clone-script-slider.webp"
import music from "../../Assets/Projects/A-Pandora-app-clone.jpg"
import book from "../../Assets/Projects/bookmart.png"
import projectfair from "../../Assets/Projects/projectfair.png"









function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="Bookmart-MERN,Stripecheckout"
              description="
              Our MERN-based bookstore allows users to securely authenticate, browse, and purchase books. Sellers can list books for sale, manage inventory, and track sales. Integrated Stripe checkout enables seamless payments, while community features foster engagement and recommendations"
              ghLink="https://github.com/AboobackerSiddiqueMp/bookmart"
              demoLink="https://bookmart-nu.vercel.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectfair}
              isBlog={false}
              title="Project maneger-MERN"
              description="
              Welcome to Project Fair, a MERN-based platform for showcasing, managing, and sorting projects. With robust authentication and authorization features, users can securely access and present their projects. Seamlessly navigate and organize projects to find inspiration and collaboration opportunities easily  "
              ghLink="https://github.com/AboobackerSiddiqueMp/projectfair"
              demoLink="https://projectfair-teal.vercel.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={olx}
              isBlog={false}
              title="OLX Clone-React,Firebase,node"
              description="
              Introducing OLX Clone: your streamlined marketplace for seamless buying and selling. Built with React, Node.js, and Firebase, OLX Clone offers secure authentication, effortless listings, and smooth transactions. Experience direct communication, personalized recommendations, and a world of possibilities. Join OLX Clone today!"
              ghLink="https://github.com/AboobackerSiddiqueMp/olx-clone"
              demoLink="https://olx-clone-eta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={media}
              isBlog={false}
              title="Media Player-react,node"
              description="
              Introducing your go-to Media Player app, powered by React and Redux. Effortlessly manage songs, create custom playlists, and enjoy smooth video playback. Stay organized with easy categorization and responsive design. Download now for a seamless media experience!"
              ghLink="https://github.com/AboobackerSiddiqueMp/mediaplayer"
              demoLink="https://mediaplayer-gamma.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflic clone-React"
              description="Introducing your React-based Netflix Clone: powered by TMDB API for seamless streaming. Explore diverse genres, watch trailers, and personalize your movie nights effortlessly. With a vast library at your fingertips, find the perfect film in just a click. Elevate your entertainment experience today with our intuitive platform."
              ghLink="https://github.com/AboobackerSiddiqueMp/Netflix-Clone1"
              demoLink="https://aboobackersiddiquemp.github.io/Netflix-Clone1/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecart}
              isBlog={false}
              title="E-Cart-React,node,mongo db"
              description="Introducing our Node.js and MongoDB project: a versatile e-commerce platform facilitating seamless shopping experiences. Users can browse, purchase securely via Razorpay, and manage carts, while admins maintain inventory effortlessly. With robust features and intuitive design, streamline your online retail operations effortlessly. Explore the future of e-commerce with our dynamic solution today!"

              ghLink="https://github.com/AboobackerSiddiqueMp/ShoppingCart"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="NEWS app-react"
              description="Proficient in developing dynamic web applications, I've created a React-powered News App integrated with the News API. Users can access and explore the latest headlines across various categories, enhancing their news consumption experience. Skilled in frontend development, I prioritize user experience and interface design to deliver intuitive and engaging applications."
              ghLink="https://github.com/AboobackerSiddiqueMp/news-dply"

              demoLink="https://www.linkedin.com/feed/update/urn:li:activity:7153836641659293696/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="chat bot-python,sql"
              description="Designed and implemented a Python Flask-based chatbot integrated with SQL database functionality. Leveraging natural language processing techniques, the chatbot detects user emotions and provides personalized song recommendations. Proficient in backend development, I utilized Flask and SQL to create a responsive and interactive chatbot experience, enhancing user engagement and satisfaction."
              ghLink="https://github.com/AboobackerSiddiqueMp/music-recommendation-app"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
