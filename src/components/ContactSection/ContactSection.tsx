"use client";

import styles from "./ContactSection.module.css";
import { sendEmail } from "../../../actions/sendEmail";

import SubmitButton from "../SubmitButton/SubmitButton";
import toast from "react-hot-toast";
import { useState } from "react";
import Label from "../Label/Label";
import Image from "next/image";
import Img from '../../../public/images/discovery.png'
import RotatingText from "../RotatingText/RotatingText";
import ContentPadding from "../ContentPadding/ContentPadding";

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
      <ContentPadding>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.lableContainer}>
              <Label text='// Contact Us //' />
            </div>
            <h2>
              Best ways to <span className={styles.highlight}>Contact</span> us:
            </h2>
            <p className={styles.topText}>
              Feel free to contact us any time. We will glady answer any
              questions you have. We can&#39;t wait to hear from you!
            </p>
          </div>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <div className={styles.rtContainer}>
                <RotatingText text='Home stretch ...' />
              </div>
              <div className={styles.imgContainer}>
                <Image src={Img} alt='image' fill className={styles.img} />
              </div>
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
                    <label htmlFor='currentWebsiteUrl'>
                      Current Website URL
                    </label>
                    <input
                      id='currentWebsiteUrl'
                      type='text'
                      name='currentWebsiteUrl'
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
      </ContentPadding>
    </section>
  );
};
export default ContactSection;
