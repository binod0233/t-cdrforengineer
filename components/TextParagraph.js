import "../styles/Social.module.css";
const TextParagraph = ({ centerAlign, family, content }) => {
  return (
    <div
      className="textParagraphP"
      style={{
        color: "#666666",
        textAlign: centerAlign ? "center" : "justify",
        fontSize: "18px",
        fontFamily: family,
      }}
    >
      {content}
    </div>
  );
};

export default TextParagraph;
