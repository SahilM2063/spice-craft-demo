import React from "react";

const MapSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="section-title text-spice-dark-brown mb-3">
            Our Location
          </h2>
          <p className="subtitle mb-6">Visit us</p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg h-[300px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3651.1929223547845!2d72.36991177533672!3d23.77614347865288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDQ2JzM0LjEiTiA3MsKwMjInMjEuMCJF!5e0!3m2!1sen!2sin!4v1744461518094!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SpiceCraft Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
