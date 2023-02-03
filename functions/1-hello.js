// domain/.netlify//functions/1-hello

// exports is common js syntax
// netlify expects name to be handler

// returns a promise

// event has info about the request

// in body always return a string
// body: JSON.stringify(myObject)

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: "Now Then our second example",
  };
};

//  localhost:8888/.netlify/functions/1-hello
