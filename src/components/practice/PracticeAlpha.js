import React, { useState, useEffect } from "react";

const PracticeAlpha = () => {
  var a = "abcdabcaba";
  const [no, setNo] = useState({});

  function countAllCharacters(str) {
    var a = str.split("");
    var obj = {};
    console.log(a);
    a.forEach(function (s) {
      //console.log("obj check", s);
      if (obj[s]) {
        // console.log("sa", obj[s]);
        obj[s] = obj[s] + 1;
      } else {
        // console.log((obj[s] = 1));
        obj[s] = 1;
      }
    });
    return obj;
  }

  // console.log(countAllCharacters("banana"));

  return <div></div>;
};

export default PracticeAlpha;
