"use client";

import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./ContactSection.module.css";
import { sendEmail } from "../../../../actions/sendEmail";

import SubmitButton from "../SubmitButton/SubmitButton";
import toast from "react-hot-toast";
import { useState } from "react";

const ContactSection = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    senderEmail: "",
    companyName: "",
    currentWebsiteUrl: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <SectionHeading
          labelText='Contact'
          headingText='Get in Touch'
          copyText="Let's start a conversation about your web projects"
        />
        <div className={styles.bottom}>
          <div className={styles.left}>
            <h3 className={styles.heading}>
              We&#39;re dedicated to building impressive websites for your
              business.
            </h3>
          </div>
          <div className={styles.right}>
            <form
              className={styles.form}
              action={async (formData) => {
                const { data, error } = await sendEmail(formData);

                if (error) {
                  toast.error(error);
                  return;
                }
                toast.success("Email sent successfully!");
                setInputs({
                  firstName: "",
                  lastName: "",
                  senderEmail: "",
                  companyName: "",
                  currentWebsiteUrl: "",
                  message: "",
                });
              }}
            >
              <div className={styles.namesContainer}>
                <div className={styles.labelInputBox}>
                  <label htmlFor='firstName'>
                    First Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    id='firstName'
                    name='firstName'
                    type='text'
                    value={inputs.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.labelInputBox}>
                  <label htmlFor='lastName'>
                    Last Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    id='lastName'
                    name='lastName'
                    type='text'
                    value={inputs.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className={styles.everythingElse}>
                <div className={styles.labelInputBox}>
                  <label htmlFor='email'>
                    Email <span className={styles.required}>*</span>
                  </label>
                  <span>So we can respond. We won&#39;t send you spam.</span>
                  <input
                    id='senderEmail'
                    type='email'
                    name='senderEmail'
                    value={inputs.senderEmail}
                    onChange={handleChange}
                    required
                    maxLength={500}
                  />
                </div>
                <div className={styles.labelInputBox}>
                  <label htmlFor='companyName'>Company Name</label>
                  <input
                    id='companyName'
                    type='text'
                    name='companyName'
                    value={inputs.companyName}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.labelInputBox}>
                  <label htmlFor='currentWebsiteUrl'>Current Website URL</label>
                  <input
                    id='currentWebsiteUrl'
                    type='text'
                    name='url'
                    value={inputs.currentWebsiteUrl}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.labelInputBox}>
                  <label htmlFor='message'>
                    Message <span className={styles.required}>*</span>
                  </label>
                  <span>No solicitations, please.</span>
                  <textarea
                    id='message'
                    name='message'
                    maxLength={5000}
                    value={inputs.message}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.btnBtnContainer}>
                <SubmitButton />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
