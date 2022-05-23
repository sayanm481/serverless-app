exports.handler = async (props) => ({
    statusCode: 200,
    body: `subscriberID=${props.subscriberID}<br/>siteID=${props.siteID}`,
  });