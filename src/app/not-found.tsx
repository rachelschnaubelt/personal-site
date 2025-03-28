import Heading from "./components/Heading/Heading";
import Button from "./components/Button/Button";

const NotFound = () => {

  return (
    <div className="not-found">
      <Heading text="404" />
      <Heading level={2} text="This page doesn't exist" />
      <Button link="/">Return to the homepage</Button>
    </div>
  );
}
 
export default NotFound;