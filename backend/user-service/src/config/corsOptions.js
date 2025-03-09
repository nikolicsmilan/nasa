const allowedOrigins = require("./allowedOrigins");

/*
The 'origin' parameter is a reserved name,
and it actually contains the value of the Origin header found in the HTTP request.
This value is the domain or URL from which the request originated.
The origin is sent by the browser for every HTTP request
that comes from a different domain (e.g., from a frontend application,
if the API runs on a different domain).
*/

/*
This callback function expects two parameters:

The first parameter: The error (if any). If no error occurred,
this will be null, and if there is an error
(for example, the request origin is not allowed),
an error object should be passed.

The second parameter: This is the boolean value
that determines whether the origin is allowed.
If the origin is allowed, then true, if not, then false.
*/

/*
The callback is a parameter that you pass to the origin function
(and you don't have to define it).
The CORS middleware's operation is controlled in the background by the cors library itself,
and when you get to the point
where you need to check the origin to validate a request,
it asynchronously calls the callback with the parameters you passed.
You use the callback to approve or reject the request, but its operation is
hidden in the details of the CORS library.
*/

/*
The name 'corsOptions' is not reserved, so you can choose
any other name for it.
*/
const corsOptions = {
    origin: (origin, callback) => {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    optionsSuccessStatus: 200,
  };
  
  module.exports = corsOptions;