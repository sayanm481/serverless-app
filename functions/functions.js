exports.handler = async (event, context, callback) => {
    console.log(`${event.queryStringParameters}`);
    return {
    statusCode: 200,
    body: `subscriberID=${event.queryStringParameters.subscriberID}<br/>siteID=${event.queryStringParameters.siteID}`,
    };
  };

 