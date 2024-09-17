// src/components/Card.js
const Card = ({ title, description, icon }) => {
  return (
    <div className="text-white p-6 m-2 rounded-lg shadow-lg flex flex-col items-center justify-center text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <div className="text-xl font-bold mb-2">{title}</div>
      <div>{description}</div>
    </div>
  );
}

export default Card;
