import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  message: yup.string().min(10, "Message should be at least 10 characters").required("Please write a message"),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-brand">Contact Page</h1>
      <p className="text-gray-600">Get in touch with us.</p>

    </div>
  );
}
