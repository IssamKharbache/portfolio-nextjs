"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { toast } from "sonner";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "phone",
    description: "(+212) 6 25 37 25 70",
  },
  {
    icon: <FaEnvelope />,
    title: "email",
    description: "issamkharbache2@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "address",
    description: "Meknes,Morroco",
  },
];

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitForm = async (data) => {
    data.subject = "Get in touch with client from portfolio";
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    try {
      setLoading(true);
      const res = await fetch(
        `
        ${baseUrl}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (res.ok) {
        setLoading(false);
        toast.success("Message sent successfully");
        setMessageSent(true);
        reset();
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Something went wrong");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 "
    >
      <div className="container mx-auto mt-24">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* FORM */}
          <div className="xl:h-[54%] order-2 xl:order-2">
            {messageSent ? (
              <div className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                <h3 className="text-4xl text-accent">Message received !</h3>
                <p> I will get in touch with you within 24h</p>
                <div className="flex items-center justify-center">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-32"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                    />
                  </svg>
                </div>
                <Link
                  href="/"
                  className="bg-accent text-black justify-center items-center text-center rounded-xl py-3 hover:bg-accent-hover hover:text-white duration-300"
                >
                  Home page
                </Link>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmitForm)}
                className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              >
                <h3 className="text-4xl text-accent">Let's Get in Touch !</h3>
                <p className="text-white/60">
                  Please fill out the form in order to get in touch with me, I
                  will reply as soon as possible.
                </p>

                {/* inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <Input
                      type="firstname"
                      placeholder="First name"
                      {...register("firstname", { required: true })}
                    />
                    {errors["firstname"] && (
                      <span className="text-sm text-red-400 rounded-lg">
                        First Name is required
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <Input
                      type="lastname"
                      placeholder="Last name"
                      {...register("lastname", { required: true })}
                    />
                    {errors["lastname"] && (
                      <span className="text-sm  text-red-400 rounded-lg">
                        Last Name is required
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <Input
                      type="email"
                      placeholder="Email address"
                      {...register("email", { required: true })}
                    />
                    {errors["email"] && (
                      <span className="text-sm  text-red-400 rounded-lg">
                        Email Address is required
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <Input
                      type="phone"
                      placeholder="Phone number"
                      {...register("phone", { required: true })}
                    />
                    {errors["phone"] && (
                      <span className="text-sm   text-red-400 rounded-lg">
                        Phone is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col">
                  <Textarea
                    {...register("message", { required: true })}
                    className="h-[200px]"
                    placeholder="Type your message here"
                  />
                  {errors["message"] && (
                    <span className="text-sm   text-red-400 rounded-lg">
                      Message is required
                    </span>
                  )}
                </div>

                {/* submit button */}
                <div className="flex items-end justify-center">
                  {loading ? (
                    <Button
                      disabled
                      type="submit"
                      size="md"
                      className="w-full md:max-w-[450px] text-[0px] md:text-lg  flex items-center gap-4 opacity-50 hover:bg-accent disabled:cursor-not-allowed"
                    >
                      Sending message Please wait...
                      <svg
                        aria-hidden="true"
                        className="w-8 h-8 text-gray-200 animate-spin fill-accent dark:text-gray-600 fill-"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      size="md"
                      className="w-full md:max-w-80"
                    >
                      Send message
                    </Button>
                  )}
                </div>
              </form>
            )}
          </div>
          {/* INFOS */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li className="flex items-center gap-6" key={index}>
                    <div className="w-[40px] h-[40px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[15px] xl:text-[28px]">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60 capitalize">{item.title}</p>
                      {item.title === "email" ? (
                        <Link
                          target="_blank"
                          href="mailto:issamkharbache2@gmail"
                          className="text-lg md:text-xl underline"
                        >
                          {item.description}
                        </Link>
                      ) : (
                        <h3 className="text-lg md:text-xl">
                          {item.description}
                        </h3>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
