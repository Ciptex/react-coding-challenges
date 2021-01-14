import React, { useState, PureComponent } from "react";
import RocketCore from './RocketCore';

export const FunctionalRocket = React.memo(() => {
  const [initialLaunchTime] = useState(Date.now());
  console.log(
    "If you see this message more than once, your FunctionalRocket keeps re-rendering 😬"
  );

  return <RocketCore initialLaunchTime={initialLaunchTime} />;
});

export class ClassRocket extends PureComponent {
  constructor() {
    super();

    this.state = {
      initialLaunchTime: Date.now(),
    };
  }

  render() {
    const { initialLaunchTime } = this.state;
    console.log(
      "If you see this message more than once, your ClassRocket keeps re-rendering 😬"
    );

    return <RocketCore initialLaunchTime={initialLaunchTime} />;
  }
}
