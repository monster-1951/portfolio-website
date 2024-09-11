import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "../ui/button";
const Head = () => {
  return (
   <div className="glass flex justify-between px-3">
    <GiHamburgerMenu className="mt-2"/>
    <span className="my-auto">Web Development By Shiva Shankar</span>
    <span>
      <Button>Contact</Button>
    </span>
   </div>
  );
};

export default Head;
