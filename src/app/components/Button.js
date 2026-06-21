import "./btn.css";

export default function Button({ title = "Read More" }) {
  return (
    <button className="custom-btn">
      {title}
    </button>
  );
}