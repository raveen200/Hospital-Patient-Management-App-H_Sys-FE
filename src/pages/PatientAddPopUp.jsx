import { Button } from "../components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Controller, useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import propTypes from "prop-types";
import { addPatientAction } from "../redux/actions/PatientAction";
import { useDispatch, useSelector } from "react-redux";

const PatientAddPopUp = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    setIsOpen(false);
    reset();
  };

  const { register, handleSubmit, reset, control } = useForm();

  const onSubmit = (data) => {
    const patient = {
      name: data.name,
      age: Number(data.age),
      nic: data.nic,
      phoneNumber: data.phoneNumber,
      updatedOn: new Date(),
      gender: Number(data.gender),
    };

    // console.log(patient);

    dispatch(addPatientAction(patient));
    handleClose();
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
                  <Label htmlFor="int">Gender</Label>
                  <Controller
                    name="gender"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <RadioGroup
                        {...field}
                        onValueChange={(value) => field.onChange(value)}
                      >
                        <div className="flex items-center mt-2 space-x-2">
                          <RadioGroupItem value="1" id="r1" />
                          <Label htmlFor="r1">Male</Label>
                        </div>
                        <div className="flex items-center mb-2 space-x-2">
                          <RadioGroupItem value="2" id="r2" />
                          <Label htmlFor="r2">Female</Label>
                        </div>
                      </RadioGroup>
                    )}
                  />
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                  <Label htmlFor="text">Mobile Number</Label>
                  <Input
                    {...register("phoneNumber")}
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
