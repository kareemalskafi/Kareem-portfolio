import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          '{ "version" : "1.0",',
          '"age" : "26.9",',
          '"description" : "Simple and happy-go-lucky person",',
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
