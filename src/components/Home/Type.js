import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          '{ "version" : "10.4.5.282",',
          '"age" : "28.9",',
          '"description" : "A fun-loving, curious & coding enthusiast 💻",',
          '"dependencies" : { "Coffee" : "Black" }',
          "console.log(me);",
          "return me;",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
        
      }}
    />
  );
}

export default Type;
