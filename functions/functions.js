exports.handler = async (event, context, callback) => ({
    statusCode: 200,
    body: `subscriberID=${event.queryStringParameters.subscriberID}<br/>siteID=${event.queryStringParameters.siteID}<br/>${event.queryStringParameters}`,
  });