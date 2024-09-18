import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ROUTES } from "@/constants/Index";
import { Link, useNavigate } from "react-router-dom";
import { loginPatient } from "@/service/AuthService";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { Cookie } from "lucide-react";


export const description =
  "A simple login form with email and password. The submit button says 'Sign in'.";

export function LoginForm() {
  const navigate = useNavigate();


  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
     
      const response = await loginPatient(data);
      console.log(response);
      Cookies.set("token", response.data.accessToken, { path: "/" });
      Cookies.set("userEmail",data.email)
      navigate(ROUTES.Dashboard.path);
    } catch (error) {
      alert("An error occurred. Please try again.");
      console.error(error);
    }
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="denvo@example.com"
                {...register("email", { required: true })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                {...register("password", { required: true })}
                id="password"
                type="password"
                placeholder="********"
              />
            </div>

            <Button type="submit" className="w-full mt-4">
              Sign in
            </Button>
          </form>
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
