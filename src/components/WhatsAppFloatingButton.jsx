import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloatingButton({
  phone = "+8801540791548",
  message = "Hi! I would like to chat.",
  size = "w-14 h-14 lg:w-20 lg:h-20", // default Tailwind size (56px)
  className = "",
}) {
  const normalizedPhone = phone.replace(/[^0-9]/g, "");
  const encodedMessage = encodeURIComponent(message);
  const href = `https://wa.me/${normalizedPhone}?text=${encodedMessage}`;

  return (
    <div className={`fixed right-6 lg:right-10 bottom-6 z-50 ${className} `}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={`flex items-center justify-center rounded-full shadow-lg bg-[#25D366]  border-2 border-white p-1 ${size} shadow-2xl shadow-black `}
      >
        <FaWhatsapp className="text-white text-4xl lg:text-5xl" />
      </a>
    </div>
  );
}
