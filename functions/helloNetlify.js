const axios = require("axios");

exports.handler = function(event, context, callback) {
    // your server-side functionality
    const parsed = JSON.parse(event.body)
    console.log("Name", parsed.name)
    axios({
        method: "post",
        url: "https://9e5f95b74fe16b84f8333f050ca63778.m.pipedream.net",
        data: { name: parsed.name }
    }).then((res) => {
        callback(null, {
            statusCode: 200,
            body: "Hello, Netlify!"
        })
    }).catch((err) => {
        console.log(err);
        callback(new Error("Something went wrong"));
    })

    
}