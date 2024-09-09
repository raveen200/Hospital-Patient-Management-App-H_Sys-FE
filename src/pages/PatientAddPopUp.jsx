import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import propTypes from "prop-types";

const PatientAddPopUp = ({ isOpen, setIsOpen }) => {
  const handleClose = () => {
    setIsOpen(false);
    reset();
  };

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <Card className="w-96">
            <CardHeader>
              <CardTitle>Register a New Patient</CardTitle>
              <CardDescription>Let&apos;s Get You Started</CardDescription>
            </CardHeader>

            <form onSubmit={handleSubmit(onSubmit)}>
              <CardContent>
                <div className="grid w-full max-w-sm items-center mt-4 gap-1.5">
                  <Label htmlFor="text">Name</Label>
                  <Input
                    {...register("name")}
                    type="text"
                    id="name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                  <Label htmlFor="int">Age</Label>
                  <Input
                    {...register("age")}
                    type="text"
                    id="age"
                    placeholder="Age"
                    required
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                  <Label htmlFor="text">Mobile Number</Label>
                  <Input
                    {...register("firstName")}
                    type="text"
                    id="phoneNumber"
                    placeholder="Mobile Number"
                    required
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                  <Label htmlFor="int">NIC</Label>
                  <Input
                    {...register("nic")}
                    type="text"
                    id="nic"
                    placeholder="NIC"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="secondary"
                  className="mr-4"
                  onClick={handleClose}
                >
                  Close
                </Button>
                <Button type="submit">Submit</Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      )}
    </div>
  );
};

PatientAddPopUp.propTypes = {
  isOpen: propTypes.bool,
  setIsOpen: propTypes.func,
};

export default PatientAddPopUp;
