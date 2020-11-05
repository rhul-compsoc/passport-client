import React, { ReactNode } from 'react';
import { Footer as MaterialiseFooter } from 'react-materialize';

const Footer = () => (
  <MaterialiseFooter
    copyrights="© 2020 Computing Society at Royal Holloway, University of London"
    links={
      <ul>
        <li>
          <a className="grey-text text-lighten-3" href="https://github.com/rhul-compsoc/passport-client">passport on GitHub</a>
        </li>
        <li>
          <a className="grey-text text-lighten-3" href="https://github.com/rhul-compsoc/passport">passport-client on GitHub</a>
        </li>
      </ul>
    }
    moreLinks={<a className="grey-text text-lighten-4 right" href="https://computingsociety.co.uk/">computingsociety.co.uk</a>}
  >
    <h5>Computing Society</h5>
    <p>
      Compsoc exists to create a setting where like-minded computing enthusiasts can interact and socialise.
      Our core aim is to make the student experience more enjoyable for those with even the slightest interest.
    </p>
  </MaterialiseFooter>
)

export {
  Footer
}
