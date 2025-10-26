import { Link } from "react-router-dom";
import { User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/avatar/avatar";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-lg font-semibold">Logo</div>
        
        <Link 
          to="/settings"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <span className="text-sm font-medium">Jane</span>
          <Avatar className="h-9 w-9 cursor-pointer">
            <AvatarFallback className="bg-primary/10">
              <User className="h-5 w-5 text-primary" />
            </AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
