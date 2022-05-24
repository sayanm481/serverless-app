exports.handler = async (event, context, callback) => {
    console.log(event);
    return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/javascript',
    },
    body: `subscriberID=${event.queryStringParameters.subscriberID}\nsiteID=${event.queryStringParameters.siteID}`,
    };
  };

 