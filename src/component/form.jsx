import { useFormik } from "formik";

export default function Form() {
  function textVel(e) {
    console.log(e.target.value);
  }

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: ""
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <button type="submit">Submit</button>
      </form>
      <form>
        <label>
          <span>Ник</span>
          <input onInput={textVel} />
        </label>
        <div style={{ height: 40 }}></div>
        <label>
          <span> электронный адрес</span>
          <input type="email" />
        </label>
        <label>
          <span> пароль </span>
          <input type="password" />
        </label>
        <label>
          <span> </span>
          <input type="file" />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}
