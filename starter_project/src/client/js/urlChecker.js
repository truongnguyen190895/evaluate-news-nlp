function checkForUrl(url) {
  const pattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

  return pattern.test(url);
}

export { checkForUrl };
