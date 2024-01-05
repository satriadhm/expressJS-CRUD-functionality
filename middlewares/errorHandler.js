function errorHandler(err, req, res, next) {
    console.error(err); // Log the error to the console

    // Set the response status code
    res.status(500);

    // Send the error message as the response
    res.send('Internal Server Error');
}

module.exports = errorHandler;
