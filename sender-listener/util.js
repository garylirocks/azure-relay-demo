
exports.get_connection_info = () => {
  const connectionInfo = {};

  process.env['RELAY_CONNECRTION_STRING'].split(";").forEach(pair => {
    const [name, value] = pair.split(/=(?!$)/, 2); //NOTE the access key is base64 encoded, might end with a "="
    connectionInfo[name] = value;
  });

  return {
    ns: connectionInfo["Endpoint"].replace(/sb:\/\/(.*)\//, "$1"),
    path: process.env['HYCO_NAME'],
    keyrule: connectionInfo["SharedAccessKeyName"],
    key: connectionInfo["SharedAccessKey"],
  }
}
