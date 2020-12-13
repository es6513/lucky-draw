import { useForm } from "react-hook-form";
import { useMemo, useCallback } from "react";

function useRegisterForm(defaultValues) {
  const { register, handleSubmit, formState, errors } = useForm({
    mode: "all",
    defaultValues,
  });
  const onSubmit = useCallback((data) => {
    console.log(data);
  }, []);
  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    formState,
    errors,
  };
}

export default useRegisterForm;
