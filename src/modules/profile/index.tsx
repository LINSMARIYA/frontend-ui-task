import { Button } from "@/components/ui/button";
import { Settings as SettingsIcon, User } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">Hello Jane</h1>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            How are you doing today? Would you like to share something with the community 😊
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/settings">
            <Button size="lg" className="gap-2">
              <SettingsIcon className="h-5 w-5" />
              Profile Settings
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="gap-2">
            <User className="h-5 w-5" />
            View Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
