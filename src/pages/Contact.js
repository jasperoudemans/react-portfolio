import ProfileSection from "../components/ProfileSection";

const Contact = () => {
  return (
    <ProfileSection title="Contact me">
      <div className="aboutMe">
        <p>Contact me via email or LinkedIn at the links provided below</p>
        <p>View my portfolio projects on GitHub</p>
        <p>
          I am a self-motivated, natural problem solver who loves working on
          projects with a team, looking for an internship or junior developer
          position where I can learn.
        </p>
        <ul className="contact-info2">
          <li>
            <a href="mailto:jasperoudemans@gmail.com">
              jasperoudemans@gmail.com
            </a>
          </li>
          <li>
            <a href="https://github.com/jasperoudemans">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jasper-oudemans/">LinkedIn</a>
          </li>
        </ul>
      </div>
    </ProfileSection>
  );
};

export default Contact;
