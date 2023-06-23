import "bootstrap/dist/css/bootstrap.css";
export default ({ Component, pageProps }) => {
  //WHEN TRYING TO NAVIGATE next by deafult is rendering the componenet inside
  //his own app component.
  //so we are running it over
  //we are doing it beacsue global bootstrap css can be import only to app
  return <Component {...pageProps} />;
};
