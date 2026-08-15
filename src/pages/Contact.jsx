import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),

  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),

  phone: yup.number().required("Phone Number is required"),

  comment: yup.string().required("Comment is required"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const {darkMode} = useContext(ThemeContext);
  return (
    <div className ={`container-fluid container-contact-hero ${darkMode ? "contact dark" : "contact"}`}>

      <div className="contact-title-hero">
        <h1>We Are Here To Help!</h1>
        <p>Feel free to contact me.</p>
      </div>

      <div className="contact-form-hero">

        <form onSubmit={handleSubmit(onSubmit)}>

          <input
            type="text"
            placeholder="Name"
            {...register("name")}
          />
          <p>{errors.name?.message}</p>

          <input
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>

          <input
            type="number"
            placeholder="Phone Number"
            {...register("phone")}
          />
          <p>{errors.phone?.message}</p>

          <textarea
            placeholder="Comment"
            cols={78}
            rows={3}
            {...register("comment")}
          />
          <p>{errors.comment?.message}</p>

          <button className="btn btn-danger" type="submit">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
};

export default Contact;