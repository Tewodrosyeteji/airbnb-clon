"use client";

import { useState, useCallback } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterStore from "@/app/hooks/useRegisterStore";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Modal from "./Modal";

const RegisterModal = () => {
  const registerStore = useRegisterStore();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/register", data)
      .then(() => registerStore.onClose())
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerStore.isOpen}
      title="register"
      onClose={registerStore.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel="submit"
    />
  );
};

export default RegisterModal;
