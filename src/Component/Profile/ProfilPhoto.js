import React from "react";
import photoProfil from "./photo.jpg";

function Photo() {
  return (
    <div>
      <img
        className="img-thumbnail  float-start"
        src={photoProfil}
        alt={"photo de profil"}
        width={300}
        height={300}
      />
    </div>
  );
}

export default Photo;
