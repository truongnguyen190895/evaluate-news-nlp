function checkForUrl(url) {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      '((([a-zA-Z0-9$-_@.&+!*"(),]|%[0-9a-fA-F]{2})+(:([a-zA-Z0-9$-_@.&+!*"(),]|%[0-9a-fA-F]{2})+)?@)?' + // username:password
      "((([a-zA-Z0-9][-a-zA-Z0-9]*[a-zA-Z0-9])\\.)*[a-zA-Z0-9][-a-zA-Z0-9]*[a-zA-Z0-9]\\.?|((\\d{1,3}\\.){3}\\d{1,3})|\\[(IPv6:[0-9a-fA-F:]+|[0-9a-fA-F:]+)])" + // hostname or IPv4/IPv6
      "(:\\d{2,5})?" + // port
      '(\\/([a-zA-Z0-9$-_@.&+!*"(),]|%[0-9a-fA-F]{2})*)*' + // path
      '(\\?([a-zA-Z0-9$-_@.&+!*"(),;?]|%[0-9a-fA-F]{2})*)?' + // query string
      '(#([a-zA-Z0-9$-_@.&+!*"(),;?]|%[0-9a-fA-F]{2})*)?$' // fragment identifier
  );

  return pattern.test(url);
}

export { checkForUrl };
