import { useForm } from "react-hook-form";

const CheckoutForm = ({ handleSubmitOrder, total }) => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    handleSubmitOrder(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input
        className="form-control mb-2"
        placeholder="Nombre"
        {...register("name", { required: "El nombre es obligatorio" })}
      />
      {errors.name && (
        <p style={{ color: "red" }}>{errors.name.message}</p>
      )}

      <input
        className="form-control mb-2"
        placeholder="Teléfono"
        {...register("phone", { required: "El teléfono es obligatorio" })}
      />
      {errors.phone && (
        <p style={{ color: "red" }}>{errors.phone.message}</p>
      )}

      <input
        className="form-control mb-2"
        placeholder="Email"
        type="email"
        {...register("email", {
          required: "El email es obligatorio",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Email inválido"
          }
        })}
      />
      {errors.email && (
        <p style={{ color: "red" }}>{errors.email.message}</p>
      )}

      <h4 className="mb-4">
        Total a pagar: ${total}
      </h4>

      <button className="btn btn-success" type="submit">
        Finalizar compra
      </button>

    </form>
  );
};

export default CheckoutForm;