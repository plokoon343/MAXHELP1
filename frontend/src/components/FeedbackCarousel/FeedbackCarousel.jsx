import React from "react";

const FeedbackCarousel = () => {
  const feedbacks = [
    {
      name: "John Doe",
      feedback: "MaxHelp Enterprises has truly transformed our business. Their approach is innovative, reliable, and effective. Highly recommend them!",
      position: "CEO, Business Inc."
    },
    {
      name: "Jane Smith",
      feedback: "The services provided by MaxHelp were top-notch. Their team is professional and always available to assist. Great experience overall!",
      position: "Marketing Director, Company XYZ"
    },
    {
      name: "Alice Johnson",
      feedback: "I can't thank MaxHelp enough. Their business strategies have helped us grow rapidly. They really care about their clients' success!",
      position: "Founder, Tech Innovators"
    },
    {
      name: "Michael Brown",
      feedback: "Working with MaxHelp was an absolute pleasure. They really know how to drive business results. Our sales have increased significantly.",
      position: "Sales Manager, Retail Co."
    },
    {
      name: "Sarah Williams",
      feedback: "MaxHelp Enterprises exceeded all our expectations. Their innovative solutions helped streamline our operations and increase efficiency.",
      position: "Operations Lead, Global Corp"
    },
    {
      name: "David Green",
      feedback: "I’m extremely impressed with MaxHelp’s service. They’ve been an invaluable partner in our growth journey, providing exceptional advice and resources.",
      position: "Founder, Digital Solutions"
    },
    {
      name: "Emily Davis",
      feedback: "The team at MaxHelp is outstanding! They take the time to understand our needs and offer tailored solutions that drive real results. Highly recommend!",
      position: "Chief Marketing Officer, E-Commerce Ltd."
    }
  ];

  return (
    <div className="feedbackCarousel container mx-auto px-4 py-4">

      <div className="overflow-x-hidden">
        <div className="flex animate-marquee space-x-6 pb-4">
          {feedbacks.map((feedback, index) => (
            <div
              key={index}
              className="feedback-slide flex-shrink-0 w-[300px] p-6 border rounded-lg shadow-lg bg-white"
            >
              <p className="text-gray-700 text-lg mb-4">"{feedback.feedback}"</p>
              <p className="font-bold text-black">{feedback.name}</p>
              <p className="text-gray-500">{feedback.position}</p>
            </div>
          ))}
          {/* Duplicate feedback items for continuous scrolling effect */}
          {feedbacks.map((feedback, index) => (
            <div
              key={`duplicate-${index}`}
              className="feedback-slide flex-shrink-0 w-[300px] p-6 border rounded-lg shadow-lg bg-white"
            >
              <p className="text-gray-700 text-lg mb-4">"{feedback.feedback}"</p>
              <p className="font-bold text-black">{feedback.name}</p>
              <p className="text-gray-500">{feedback.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackCarousel;
