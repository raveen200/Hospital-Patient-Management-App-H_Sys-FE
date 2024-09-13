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
  getPatientByIdAction,
  getPatientsAction,
  updatePatientAction,
} from "../redux/actions/PatientAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const PatientDetailPop = ({
  isOpenEditWindow,
  setIsOpenEditWindow,
  reviewPatient,
}) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    setIsOpenEditWindow(false);
    setEditBtnOn(false);
    reset();
  };

  const patientEditData = useSelector(
    (state) => state.patientsRedux?.patient || {}
  );

  useEffect(() => {
    if (reviewPatient !== null) {
      dispatch(getPatientByIdAction(reviewPatient));
    }
  }, [dispatch, reviewPatient]);

  const [editBtnOn, setEditBtnOn] = useState(false);

  const { register, handleSubmit, reset, control } = useForm();

  const onSubmit = async (data) => {
    const patient = {
      p_ID: patientEditData.p_ID,
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

    await dispatch(updatePatientAction(patient));
    dispatch(getPatientsAction());
    handleClose();
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
                      {patientEditData?.name || "No Data"}
                    </Label>
                  )}

                  {editBtnOn && (
                    <Input
                      {...register("name")}
                      type="text"
                      id="name"
                      placeholder="Name"
                      defaultValue={patientEditData?.name}
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
                      {patientEditData?.age || "No Data"}
                    </Label>
                  )}

                  {editBtnOn && (
                    <Input
                      {...register("age")}
                      type="text"
                      id="age"
                      placeholder="Age"
                      defaultValue={patientEditData?.age}
                    />
                  )}
                </div>
                <div className="grid grid-rows-1 grid-flow-col  w-full max-w-sm items-center mt-4 gap-1.5">
                  <Label htmlFor="int">Gender</Label>
                  <Controller
                    name="gender"
                    control={control}
                    defaultValue={String(patientEditData?.gender)}
                    render={({ field }) => (
                      <RadioGroup
                        {...field}
                        value={field.value || patientEditData?.gender}
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
                      {patientEditData?.address || "No Data"}
                    </Label>
                  )}

                  {editBtnOn && (
                    <Input
                      {...register("address")}
                      type="text"
                      id="address"
                      placeholder="Address"
                      defaultValue={patientEditData?.address}
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
                      {patientEditData?.phoneNumber || "No Data"}
                    </Label>
                  )}

                  {editBtnOn && (
                    <Input
                      {...register("phoneNumber")}
                      type="text"
                      id="phoneNumber"
                      placeholder="Address"
                      defaultValue={patientEditData?.phoneNumber}
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
                      {patientEditData?.nic || "No Data"}
                    </Label>
                  )}

                  {editBtnOn && (
                    <Input
                      {...register("address")}
                      type="text"
                      id="nic"
                      placeholder="NIC"
                      defaultValue={patientEditData?.nic}
                    />
                  )}
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

PatientDetailPop.propTypes = {
  isOpenEditWindow: propTypes.bool,
  setIsOpenEditWindow: propTypes.func,
  reviewPatient: propTypes.number,
};

export default PatientDetailPop;
