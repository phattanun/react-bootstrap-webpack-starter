import React from 'react';
import Jumbotron from 'reactstrap/lib/Jumbotron';
import FadeInEntrance from '../../components/fadeInEntrance';

type OwnProps = any;
type Props = OwnProps;

function PageNotFound() {
  return (
    <FadeInEntrance>
      <Jumbotron>
        <h1>Sorry this page does not exists...</h1>
      </Jumbotron>
    </FadeInEntrance>
  );
}

PageNotFound.displayName = 'PageNotFound';

export default PageNotFound;
