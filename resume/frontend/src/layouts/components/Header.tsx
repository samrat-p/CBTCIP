import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <section id="navbar" className="p-20">
      <div className="w-[90%] bg-white/30 glass rounded-3xl sticky top-0 ">
        <div className="flex gap-8 justify-center items-center ">
          <Button variant="ghost" className="text-base m-4">
            Projects
          </Button>
          <Button variant="ghost" className="text-base m-3">
            Contact
          </Button>
          <Button variant="ghost" className="text-base m-3">
            About
          </Button>
          <Button variant="ghost" className="text-base m-3">
            <FaGithub className="inline-block w-4 h-4 mr-2" />
            Open Source
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Header;
