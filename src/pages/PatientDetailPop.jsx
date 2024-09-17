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
import { FiEdit } from "react-icons/fi";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import propTypes from "prop-types";
import {
  updatePatientAction,
} from "../redux/actions/PatientAction";
import { useDispatch } from "react-redux";
import { useState } from "react";

const PatientDetailPop = ({
  isOpenEditWindow,
  handleModalClose,
  selectedPatient,
}) => {
  const dispatch = useDispatch();
  const handleClose = (isSubmitted = false) => {
    handleModalClose(isSubmitted);
    setEditBtnOn(false);
    reset();
  };


  const [editBtnOn, setEditBtnOn] = useState(false);

  const { register, handleSubmit, reset, control } = useForm();

  const onSubmit = async (data) => {
    try {
      const patient = {
        p_ID: selectedPatient.p_ID,
        name: data.name,
        age: data.age,
        nic: data.nic,
        phoneNumber: data.phoneNumber,
        updatedOn: new Date(),
        address: data.address,
        email: data.email,
        gender: Number(data.gender),
        medicalDeatils: data.medicalDeatils,
      };
  
      // console.log(patient);
  
      await dispatch(updatePatientAction(patient)).unwrap();
      handleClose(true);
    } catch (error) {
      console.error("Failed to update patient:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {isOpenEditWindow && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <Card className="w-96">
            <CardHeader>
              <CardTitle>
                {editBtnOn === false
                  ? "Review of Patient"
                  : "Edit Form of Patient"}
              </CardTitle>
              <div className="flex justify-between">
                <CardDescription>For Better Life</CardDescription>
                <FiEdit
                  size={22}
                  onClick={() => setEditBtnOn((prevState) => !prevState)}
                />
              </div>
            </CardHeader>

            <form onSubmit={handleSubmit(onSubmit)}>
              <CardContent>
                <div className="grid grid-rows-1 grid-flow-col justify-between w-full max-w-sm items-center mt-4 gap-1.5">
                  <Label htmlFor="text" className="">
                    Name
                  </Label>
                  {!editBtnOn && (
                    <Label
                      htmlFor="text"
                      className="text-zinc-500 text-xs mr-20"
                    >
                      {selectedPatient?.name || "No Data"}
                    </Label>
                  )}

                  {editBtnOn && (
                    <Input
                      {...register("name")}
                      type="text"
                      id="name"
                      placeholder="Name"
                      defaultValue={selectedPatient?.name}
                    />
                  )}
                </div>

                <div className="grid grid-rows-1 grid-flow-col justify-between  w-full max-w-sm items-center mt-4 gap-1.5">
                  <Label htmlFor="text" className="">
                    Age
                  </Label>
                  {!editBtnOn && (
                    <Label
                      htmlFor="text"
                      className="text-zinc-500 text-xs mr-20"
                    >
                      {selectedPatient?.age || "No Data"}
                    </Label>
                  )}

                  {editBtnOn && (
                    <Input
                      {...register("age")}
                      type="text"
                      id="age"
                      placeholder="Age"
                      defaultValue={selectedPatient?.age}
                    />
                  )}
                </div>
                <div className="grid grid-rows-1 grid-flow-col  w-full max-w-sm items-center mt-4 gap-1.5">
                  <Label htmlFor="int">Gender</Label>
                  <Controller
                    name="gender"
                    control={control}
                    defaultValue={String(selectedPatient?.gender)}
                    render={({ field }) => (
                      <RadioGroup
                        {...field}
                        value={field.value || selectedPatient?.gender}
                        onValueChange={(value) => field.onChange(value)}
                      >
                        <div className="flex items-center mt-2 space-x-4">
                          <RadioGroupItem value="1" id="r1" />
                          <Label htmlFor="r1">Male</Label>
                        </div>
                        <div className="flex items-center mb-2 space-x-4">
                          <RadioGroupItem value="2" id="r2" />
                          <Label htmlFor="r2">Female</Label>
                        </div>
                      </RadioGroup>
                    )}
                  />
                </div>

                <div className="grid grid-rows-1 grid-flow-col justify-between  w-full max-w-sm items-center mt-4 gap-1.5">
                  <Label htmlFor="text" className="">
                    Address
                  </Label>
                  {!editBtnOn && (
                    <Label
                      htmlFor="text"
                      className="text-zinc-500 text-xs mr-20"
                    >
                      {selectedPatient?.address || "No Data"}
                    </Label>
                  )}

                  {editBtnOn && (
                    <Input
                      {...register("address")}
                      type="text"
                      id="address"
                      placeholder="Address"
                      defaultValue={selectedPatient?.address}
                    />
                  )}
                </div>

                <div className="grid grid-rows-1 grid-flow-col justify-between   w-full max-w-sm items-center mt-4 gap-1.5">
                  <Label htmlFor="text" className="">
                    Mobile Number
                  </Label>
                  {!editBtnOn && (
                    <Label
                      htmlFor="text"
                      className="text-zinc-500 text-xs mr-20"
                    >
                      {selectedPatient?.phoneNumber || "No Data"}
                    </Label>
                  )}

                  {editBtnOn && (
                    <Input
                      {...register("phoneNumber")}
                      type="text"
                      id="phoneNumber"
                      placeholder="Address"
                      defaultValue={selectedPatient?.phoneNumber}
                    />
                  )}
                </div>

                <div className="grid grid-rows-1 grid-flow-col justify-between   w-full max-w-sm items-center mt-4 gap-1.5">
                  <Label htmlFor="text" className="">
                    NIC
                  </Label>
                  {!editBtnOn && (
                    <Label
                      htmlFor="text"
                      className="text-zinc-500 text-xs mr-20"
                    >
                      {selectedPatient?.nic || "No Data"}
                    </Label>
                  )}

                  {editBtnOn && (
                    <Input
                      {...register("address")}
                      type="text"
                      id="nic"
                      placeholder="NIC"
                      defaultValue={selectedPatient?.nic}
                    />
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="secondary"
                  className="mr-4"
                  onClick={() => handleClose()}
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

PatientDetailPop.propTypes = {
  isOpenEditWindow: propTypes.bool,
  handleModalClose: propTypes.func,
  reviewPatient: propTypes.number,
  selectedPatient: propTypes.object,
};

export default PatientDetailPop;
