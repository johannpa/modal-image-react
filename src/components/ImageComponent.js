import React, { useState } from "react";
import "../App.css";


function ImageComponent(props) {
  const [state, setState] = useState({ isOpen: false });

  const handleShowDialog = () => {
    setState({ isOpen: !state.isOpen });
    console.log("cliked");
  };

    return (
      <div>
        <img
          className="small"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg"
          onClick={handleShowDialog}
          alt="no image"
        />
        {this.state.isOpen && (
          <dialog
            className="dialog"
            style={{ position: "absolute" }}
            open
            onClick={this.handleShowDialog}
          >
            <img
              className="image"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg"
              onClick={this.handleShowDialog}
              alt="no image"
            />
          </dialog>
        )}
      </div>
    );
}


export default ImageComponent;