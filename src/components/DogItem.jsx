import React from "react";

const Loading = ({imgSrc, alt}) => {

    return (
      <img
        src={imgSrc}
        className="img-thumbnail w-25"
        alt={alt}
      />
    );
};

export default Loading;