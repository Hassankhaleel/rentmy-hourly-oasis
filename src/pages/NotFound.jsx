import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="text-8xl font-bold text-primary mb-4">404</div>
        <h1 className="text-3xl font-bold text-foreground mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;