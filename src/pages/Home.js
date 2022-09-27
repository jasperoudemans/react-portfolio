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
            stack web development seeking first opportunity in the field. An
            international and multicultural background makes me highly
            adaptable, mentally flexible, and allows me to quickly integrate a
            new team, company, or environment.
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
            title="Travel Planner"
            src="/react-portfolio/images/travelPlanner.png"
            alt="Screenshot of travel planner app"
            href="https://github.com/jasperoudemans/travel-planner"
          />

          <div className="images2">
            <Project
              title="Restaurant Review App"
              src="/react-portfolio/images/restaurantReview.png"
              alt="Screenshot of restaurant review app"
              href="https://github.com/jasperoudemans/baby-yelp"
            />

            <Project
              title="HTML Generator (CLI)"
              src="/react-portfolio/images/HTMLGenerator.png"
              alt="Project3"
              href="https://github.com/jasperoudemans/team_profile_generator"
            />
          </div>

          <div className="images2">
            <Project
              title="Text Editor (PWA)"
              src="/react-portfolio/images/textEditor.png"
              alt="Screenshot of text editor app"
              href="https://github.com/jasperoudemans/textEditor"
            />

            <Project
              title="Social Network API"
              src="/react-portfolio/images/socialNetworkAPI.png"
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
