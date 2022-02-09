import React, { useEffect, useState } from "react";

import "./Detail.css";
import "./Quotes.css"

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

//Components
import MainFooter from "../components/Footers/MainFooter";
import MainNav from "../components/Navbars/MainNav";
import { Button } from "primereact/button";
import { useForm, Controller } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Dialog } from "primereact/dialog";
import { classNames } from "primereact/utils";

//Api
import { getProduct, postQuote } from "../api/api";
import { useParams } from "react-router-dom";

export default function Quotes() {
  const params = useParams();
  const [product, setProduct] = useState();
  const [specs, setSpecs] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const defaultValues = {
    name: "",
    email: "",
    idnumber: "",
    type: null,
    accept: false,
  };

  const options = [
    { name: "Cedula Ciudadanía" },
    { name: "Tarjeta de Identidad" },
    { name: "Cedula Extranjería" },
  ];

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    setFormData(data);
    postQuote(params.id, data);
    setShowMessage(true);

    reset();
  };

  const getFormErrorMessage = (name) => {
    return (
      errors[name] && <small className="p-error">{errors[name].message}</small>
    );
  };

  const dialogFooter = (
    <div className="flex justify-content-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => setShowMessage(false)}
      />
    </div>
  );

  useEffect(() => {
    var _specs = [];
    getProduct(params.id).then((res) => {
      setProduct(res.data);
      for (const spec of res.data.specs) {
        _specs.push(
          <div class="border-top border-bottom" key={spec.value}>
            <b>{spec.name}: </b>
            {spec.value}
          </div>
        );
      }
      setSpecs(_specs);
    });
  }, [params.id]);

  return (
    <div className="app">
      <MainNav />
      <div
        class="modal fade bg-white"
        id="templatemo_search"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="w-100 pt-1 mb-5 text-right">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form
            action=""
            method="get"
            class="modal-content modal-body border-0 p-0"
          >
            <div class="input-group mb-2">
              <input
                type="text"
                class="form-control"
                id="inputModalSearch"
                name="q"
                placeholder="Search ..."
              />
              <button
                type="submit"
                class="input-group-text bg-success text-light"
              >
                <i class="fa fa-fw fa-search text-white"></i>
              </button>
            </div>
          </form>
        </div>
      </div>

      <section class="bg-light">
        <div class="container py-5">
          <div class="row py-3">
            <div class="col-lg-5 mx-5 text-center">
              <h1 class="mb-5">Send a Quote</h1>
              <p>Dron de {product ? product.name : "Loading..."}</p>
              <p>
                <b>Category: </b>
                {product ? product.category : "Loading..."}
              </p>
              <div className="form-demo">
                <Dialog
                  visible={showMessage}
                  onHide={() => setShowMessage(false)}
                  position="center"
                  footer={dialogFooter}
                  showHeader={false}
                  breakpoints={{ "960px": "80vw" }}
                  style={{ width: "30vw" }}
                >
                  <div className="flex justify-content-center text-center flex-column pt-6 px-3">
                    <i
                      className="pi pi-check-circle mb-5"
                      style={{ fontSize: "5rem", color: "var(--green-500)" }}
                    ></i>
                    <h5>Quote Successful!</h5>
                    <p style={{ lineHeight: 1.5, textIndent: "1rem" }}>
                      Your quote is registered under name <b>{formData.name}</b>. Please check <b>{formData.email}</b> for quote details.
                    </p>
                  </div>
                </Dialog>

                <div className="flex justify-content-center">
                  <div className="cardq">
                    <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                      <div className="field mt-2">
                        <span className="p-float-label">
                          <Controller
                            name="name"
                            control={control}
                            rules={{ required: "Name is required." }}
                            render={({ field, fieldState }) => (
                              <InputText
                                id={field.name}
                                {...field}
                                autoFocus
                                className={classNames({
                                  "p-invalid": fieldState.invalid,
                                })}
                              />
                            )}
                          />
                          <label
                            htmlFor="name"
                            className={classNames({ "p-error": errors.name })}
                          >
                            Name*
                          </label>
                        </span>
                        {getFormErrorMessage("name")}
                      </div>
                      <div className="field mt-2">
                        <span className="p-float-label p-input-icon-right">
                          <i className="pi pi-envelope" />
                          <Controller
                            name="email"
                            control={control}
                            rules={{
                              required: "Email is required.",
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message:
                                  "Invalid email address. E.g. example@email.com",
                              },
                            }}
                            render={({ field, fieldState }) => (
                              <InputText
                                id={field.name}
                                {...field}
                                className={classNames({
                                  "p-invalid": fieldState.invalid,
                                })}
                              />
                            )}
                          />
                          <label
                            htmlFor="email"
                            className={classNames({
                              "p-error": !!errors.email,
                            })}
                          >
                            Email*
                          </label>
                        </span>
                        {getFormErrorMessage("email")}
                      </div>
                      <div className="field mt-2">
                        <span className="p-float-label">
                          <Controller
                            name="type"
                            control={control}
                            render={({ field }) => (
                              <Dropdown
                                id={field.name}
                                value={field.value}
                                onChange={(e) => field.onChange(e.value)}
                                options={options}
                                optionLabel="name"
                              />
                            )}
                          />
                          <label htmlFor="type">ID type</label>
                        </span>
                      </div>
                      <div className="field mt-2">
                        <span className="p-float-label">
                          <Controller
                            name="idnumber"
                            control={control}
                            rules={{ required: "ID is required." }}
                            render={({ field, fieldState }) => (
                              <InputText
                                id={field.name}
                                {...field}
                                autoFocus
                                className={classNames({
                                  "p-invalid": fieldState.invalid,
                                })}
                              />
                            )}
                          />
                          <label
                            htmlFor="idnumber"
                            className={classNames({ "p-error": errors.name })}
                          >
                            ID Number*
                          </label>
                        </span>
                        {getFormErrorMessage("idnumber")}
                      </div>
                      <Button type="submit" label="Submit" icon="pi pi-check" autoFocus />
                    </form>
                  </div>
                </div>
              </div>
              <a href="/shop">
                <Button
                  label="Back"
                  icon="pi pi-arrow-left"
                  className="p-button-text mt-5"
                />
              </a>
            </div>
            <div class="col-lg-4 my-5 text-center">
              <img
                className="rounded-lg detail-img my-5"
                src={product ? product.photoUrl : "invalid url"}
                alt="Drone image"
              />
            </div>
          </div>
        </div>
      </section>
      <MainFooter />
    </div>
  );
}
