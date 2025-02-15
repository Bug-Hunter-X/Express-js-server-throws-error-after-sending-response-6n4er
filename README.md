# Express.js Server Error After Sending Response

This repository demonstrates a subtle bug in an Express.js server where an error is thrown after the response has already been sent.  The error is not caught by standard error handling mechanisms and might go unnoticed in production environments.

## Bug Description
The server handles a request, sends a response, then subsequently throws an error. This is problematic because the error will not be logged and may impact resource handling or other internal operations.

## How to Reproduce
1. Clone this repository.
2. Run `npm install` to install Express.js.
3. Run `node bug.js`.
4. Access the server using your browser at `http://localhost:3000`
5. The server will return a 'Hello World!' response then terminate with an uncaught exception after the response was sent. 

## Solution
The solution involves checking the status of the response object before attempting to write to it or throw any errors after the response has been sent to the client. 