
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Gift } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to Bella! 💄",
        description: "You've been subscribed to our newsletter. Check your email for a special welcome gift!",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-rose-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full mb-6">
            <Gift className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Join Our <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">Beauty Circle</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Be the first to know about new launches, exclusive offers, and beauty tips from our experts.
          </p>
          <div className="text-rose-300 mb-8">
            ✨ Get 15% off your first order when you subscribe ✨
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 py-3 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-gray-300 rounded-full focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
              required
            />
          </div>
          <Button 
            type="submit"
            className="bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Subscribe
          </Button>
        </form>

        <p className="text-sm text-gray-400">
          By subscribing, you agree to receive marketing emails from Bella. You can unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
