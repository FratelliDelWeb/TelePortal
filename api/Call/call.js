const from = '+16402213496';
const accountSid = "AC4778cf86c941a7daa50da538f5c7a628";
const authToken = "1c011286de397265218b9ed1867370a8";
const client = require('twilio')(accountSid, authToken);
const VoiceResponse = require('twilio').twiml.VoiceResponse;
const url = "https://mirabillia-teleportal.herokuapp.com/api/call/request"


exports.makeCall = async (req, res, next) => {
    try{
        client.calls
        .create({
            url: url,
            to: '+393519907274',
            from: from
        })
        .then(call => {
            console.log(call)
            res.json({call: call})
        });
        console.log('ok')
    }catch(error){
        console.log(error)
        res.status(500).json({message: error.message})
    }
};

exports.addCallerID = async (req, res, next) => {
    try{
        client.validationRequests
        .create({friendlyName: 'Antonio Maretta', phoneNumber: '+393519907274'})
        .then(validation_request => console.log(validation_request.friendlyName));
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

exports.returnTwiml = async (req, res, next) => {
    console.log('genero twiml')
    const response = new VoiceResponse();
    const dial = response.dial();
    dial.number('+393923784332');
    res.send(response.toString());
}