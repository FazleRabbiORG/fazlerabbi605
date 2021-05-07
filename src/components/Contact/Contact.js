import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SimpleParticlesBackground from "../ParticlesBackground/SimpleParticlesBackground";
import "./Contact.css";
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import BubblesParticlesBackground from "../ParticlesBackground/BubblesParticlesBackground";
const contactInfo = [
  {
    id: 1,
    title: "Phone",
    data: "+880 1789606059",
    icon: faPhone,
  },
  {
    id: 2,
    title: "Address",
    data: "Bogura, Bangladesh",
    icon: faMapMarkerAlt,
  },
  {
    id: 3,
    title: "Email",
    data: "fazlerabbi.dev92@gmail.com",
    icon: faEnvelope,
  },
];


const Contact = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {

          console.log(data)
          emailjs
          .send(
            "service_vcfyw08",
            "template_nqtebkq",
            data,
            "user_STyYcWYxWvbuylZibDf2A"
          )
          .then(
            (result) => {
              console.log("done", result.text);
            },
            (error) => {
              console.log("error", error.text);
            }
          );
        };
  return (
    <>
      <BubblesParticlesBackground />
      <section id="contact" className="contact section">
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <div className="section-title padd-15">
              <h2>Contact Me</h2>
              <hr />
            </div>
          </div>

          <div className="row">
            {contactInfo.map((info) => (
              <div key={info.id} className="contact-info-item padd-15">
                <div className="icon">
                  <FontAwesomeIcon icon={info.icon} />
                </div>
                <h4>{info.title}</h4>
                <p>{info.data}</p>
              </div>
            ))}
          </div>

          <div className="row">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="contact-form padd-15"
              
            >
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      className="form-control"
                      placeholder="Name*"
                    />
                    {errors.name && (
                      <span>This field is required</span>
                    )}
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      {...register("email", { required: true })}
                      type="text"
                      className="form-control"
                      placeholder="Email*"
                    />
                    {errors.email && (
                      <span>This field is required</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input
                      {...register("subject", { required: true })}
                      type="text"
                      className="form-control"
                      placeholder="Subject*"
                    />
                    {errors.subject && (
                      <span>This field is required</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea
                      {...register("message", { required: true })}
                      type="text"
                      className="form-control"
                      placeholder="Your Message..."
                    ></textarea>
                    {errors.message && (
                      <span>This field is required</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 padd-15">
                  <button
                    style={{
                      backgroundColor: "#222222",
                      border: "5px solid #ff4790",
                    }}
                    type="submit"
                    className="btn"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
