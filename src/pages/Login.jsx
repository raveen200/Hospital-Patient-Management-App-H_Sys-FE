import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ROUTES } from "@/constants/Index";
import { Link } from "react-router-dom";

export const description =
  "A simple login form with email and password. The submit button says 'Sign in'.";

export function LoginForm() {
  return (
    <div className="flex items-center pb-24 justify-center min-h-screen">
      <Card className="w-full h-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>

          <Button className="w-full mt-4">Sign in</Button>
          <div className="mt-4 text-center text-sm">
            <Link to={ROUTES.Sign_Up.path}>
              Don&apos;t have an account? <u> Sign in</u>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
