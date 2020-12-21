import { useState } from "react";
import './ImageInput.css';

function ImageInput(props) {
  const [image, setImage] = useState(props.default);
  return (
    <label
      className="ImageInputCont"
      style={props.style}
    >
      <input
        className="ImageInput"
        type="file"
        accept="image/*"
        onChange={(e) => {
          // e.preventDefault();
          setImage(URL.createObjectURL(e.target.files[0]));
        }}
      />
      <div className="ImageInputButton">
        Change Image
      </div>
      <img
        className="ImageInputPreview"
        src={image}
        alt="Preview"
      />
    </label>
  );
}

export default ImageInput;