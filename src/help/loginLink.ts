const getLoginLink = () =>
  `${process.env.API_URL}/login/redirect?return=${encodeURIComponent(
    window.location.href
  )}`;


export {
  getLoginLink
}