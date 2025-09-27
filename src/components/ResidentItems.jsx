import React from "react";

const ResidentItems = () => {
  return (
    <div className="container mx-auto flex gap-4">
      <div className="w-2/3">
     {/* Hotel or Dorm Details  */}
      </div>
      <div className="w-1/3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116840.85510689842!2d90.21432789726559!3d23.773158399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf6de2c3b19b%3A0xeeef7eec6d1d012a!2sEasy%20Tech%20Solutions!5e0!3m2!1sen!2sbd!4v1758954788071!5m2!1sen!2sbd"
          width="400"
          height="750"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl"
        ></iframe>
      </div>
    </div>
  );
};

export default ResidentItems;
