import React from 'react';
import svgRect from '@src/static/home_rect.svg';

import { HeroCard } from './HeroCard';
import { HomeWrapper, Intro } from './Home.style';

import Button from '@common/Button';
import IconLink from '@common/IconLink';
import { navigate } from 'gatsby';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = ({ social, owner }) => {

  const redirectToBlog = () => {
    navigate('blog');
  };

  return (
    <HomeWrapper id="home">
      <img className="svg-rect" src={svgRect} alt=""></img>

      <Intro>
        {/* <Parallax y={[50, -50]} className="home__text"> */}
        <div className="home__text">
          <p>Hello, I’m</p>
          <h1>{owner.name}</h1>
          <p className="adjust">{owner.occupation}</p>

          <div className="home__CTA">
            <Button className="cta" as="a" onClick={redirectToBlog}>
              Go to Blog
              <FontAwesomeIcon icon="chevron-circle-right" className="home__blog_icon"/>
            </Button>

            <div className="home__social">
              <IconLink
                label="github"
                icon={['fab', 'github']}
                href={"//github.com/" + social.github}
              />
              
              <IconLink
                label="twitter"
                icon={['fab', 'twitter']}
                href={"//twitter.com/" + social.twitter}
              />
              <IconLink
                label="codepen"
                icon={['fab', 'linkedin']}
                href={"//linkedin.com/in/" + social.linkedin}
              />
            </div>
          </div>
        </div>
        {/* </Parallax> */}
        <HeroCard ownerName={owner.name} />
      </Intro>

    </HomeWrapper>
  );
};

export default Home;
