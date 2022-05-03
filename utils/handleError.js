const handleError = (err, res) => {
    console.log(err);
    let error;
    [...Object.keys(err.errors)].forEach(el =>
        error = err.errors[el].properties?.message ?
            { ...error, [el]: err.errors[el].properties.message } :
            { ...error, [el]: err.errors[el].message }
    );
    res.status(200).json({
        "status": "failed",
        "error": error
    })
}

module.exports = handleError;