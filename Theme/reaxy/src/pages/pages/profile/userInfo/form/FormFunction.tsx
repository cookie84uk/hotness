import { IUserInfoFormInputs } from "@config/models";
import Swal from "sweetalert2";

export const defaultValues: IUserInfoFormInputs = {
  firstName: "",
  salutation: "",
  gender: "",
  email: "",
  country: "",
  state: "",
  address: "",
  lastName: "",
  phone: "",
  code: "",
};

export const commonSubmitFunction = async (
  data: IUserInfoFormInputs,
  errors: any,
  setError: any,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  reset: any
) => {
  setLoading(true);

  Object.keys(errors).forEach((field) => {
    setError(field as keyof IUserInfoFormInputs, {
      type: "manual",
      message: "",
    });
  });

  await new Promise((resolve) => setTimeout(resolve, 1000));

  let hasErrors = false;

  if (data.firstName.trim() === "") {
    setError("firstName", {
      type: "manual",
      message: "First name cannot be empty",
    });
    hasErrors = true;
  }

  if (data.lastName.trim() === "") {
    setError("lastName", {
      type: "manual",
      message: "Last name cannot be empty",
    });
    hasErrors = true;
  }

  if (data.email.trim() === "") {
    setError("email", {
      type: "manual",
      message: "Email cannot be empty",
    });
    hasErrors = true;
  }

  if (data.phone === "") {
    setError("phone", {
      type: "manual",
      message: "Phone cannot be empty",
    });
    hasErrors = true;
  }

  if (data.code === "") {
    setError("code", {
      type: "manual",
      message: "Code cannot be empty",
    });
    hasErrors = true;
  }

  if (data.country.trim() === "") {
    setError("country", {
      type: "manual",
      message: "Country cannot be empty",
    });
    hasErrors = true;
  }

  if (hasErrors) {
    setLoading(false);
    return;
  }

  Swal.fire({
    icon: "success",
    html:`<div class="form_swall">Message sent successfully! </div>`,
    showConfirmButton: false,
    timer: 1500,
    showClass: {
      popup: "animate__animated animate__fadeInUp animate__faster",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutDown animate__faster",
    },
  });

  reset(defaultValues);
  setLoading(false);
};
