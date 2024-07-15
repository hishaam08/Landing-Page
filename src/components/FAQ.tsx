"use client";
import PlusIcon from "@/assets/icons/PlusIcon.svg";
import MinusIcon from "@/assets/icons/MinusIcon.svg";
import { useState } from "react";

const items = [
  {
    question: "What payment methods do you accept",
    answer:
      "We accept all major credit cards, PayPal, and various other payment methods dependind on your location. Please contact our support team for more information on accepted payment methods in your region.",
  },
  {
    question: "How does thte pricing work for teams",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have in your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "Can I change my plans later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use state-of-the-art encryption and comply with best industry practices to ensure that you data is stored securely and accessed only by authorized users",
  },
];

interface AccordianType {
  question: string;
  answer: string;
}

function Accordian({ question, answer }: AccordianType) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b py-7 border-white/30">
      <div
        className="flex items-center justify-betwee"
        onClick={() => {
          setOpen((s) => !s);
        }}
      >
        <span className="flex-1 text-lg font-bold cursor-pointer">
          {question}
        </span>{" "}
        {open ? <MinusIcon className="" /> : <PlusIcon />}
      </div>
      <div className={`${open ? "block" : "hidden"} mt-4`}>{answer}</div>
    </div>
  );
}

function FAQ() {
  return (
    <div className="text-white bg-gradient-to-b from-[#5d2ca8] to-black py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-5xl font-bold tracking-tighter text-center sm:text-6xl max-w-[675px] mx-auto">
          Frequently asked questions
        </h2>
        <div className="mt-12 max-w-[675px] mx-auto">
          {items.map(({ question, answer }, index) => (
            <Accordian key={index} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
