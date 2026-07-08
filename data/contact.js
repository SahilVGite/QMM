export const hero = {
  image: "/images/hero-contact.jpg",
};

export const heading = "GOT INQUIRIES";
export const subheading =
  "For inquiries, partnerships, or liquidity provision solutions, please contact us.";

export const fields = [
  { name: "name", label: "YOUR NAME", type: "text", required: true, half: true },
  {
    name: "email",
    label: "EMAIL ADDRESS",
    type: "email",
    required: true,
    half: true,
  },
  { name: "subject", label: "SUBJECT", type: "text", required: true, half: false },
  {
    name: "message",
    label: "MESSAGES",
    type: "textarea",
    required: true,
    half: false,
  },
];

export const submitLabel = "SUBMIT MESSAGES";
