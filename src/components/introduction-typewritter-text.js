import React from "react";

export default class introductionTypewriterText extends React.Component {
  render() {
    return (
      // Passing in text.
      <TypeWriter typing={1}>
        I am a software developer based in Atlanta, Georgia. I love building
        software using cutting-edge technologies and with best practices and
        paradigms in the fore-front.
      </TypeWriter>
    );
  }
}
