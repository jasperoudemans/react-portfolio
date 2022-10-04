import MainProject from "../components/MainProject";
import ProfileSection from "../components/ProfileSection";
import Project from "../components/Project";

const Home = () => {
  return (
    <>
      <ProfileSection title="About Me" id="aboutMe">
        <div class="aboutMe">
          <p>
            Recent coding bootcamp graduate with newly developed skills in full
            stack web development seeking first opportunity in the field. I have
            an international and multicultural background having lived for 12
            years in Asia and 10 years in Europe. My education in visual arts
            helps me design an attractive user experience.
          </p>
          <br />
          <br />
        </div>
      </ProfileSection>

      <br />
      <br />

      <ProfileSection title="Projects" id="work">
        <div class="images">
          <MainProject
            title="toySRC Toy Exchange Platform"
            src="/images/toySRC-screenshot.png"
            alt="Screenshot of toySRC app"
            href="https://github.com/jasperoudemans/toy-src"
          />

          <div className="images2">
            <Project
              title="Restaurant Review App"
              src="/images/restaurantReview.png"
              alt="Screenshot of restaurant review app"
              href="https://github.com/jasperoudemans/baby-yelp"
            />

            <Project
              title="HTML Generator (CLI)"
              src="/images/HTMLGenerator.png"
              alt="Project3"
              href="https://github.com/jasperoudemans/team_profile_generator"
            />
          </div>

          <div className="images2">
            <Project
              title="Text Editor (PWA)"
              src="/images/textEditor.png"
              alt="Screenshot of text editor app"
              href="https://github.com/jasperoudemans/textEditor"
            />

            <Project
              title="Social Network API"
              src="/images/socialNetworkAPI.png"
              alt="Screeshot of social network api"
              href="https://github.com/jasperoudemans/social-media-backend-API"
            />
          </div>
        </div>
      </ProfileSection>
    </>
  );
};

export default Home;
