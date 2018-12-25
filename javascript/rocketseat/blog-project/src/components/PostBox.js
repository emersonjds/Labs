import React, { Fragment } from "react";

const PostBox = props => {
  return (
    <Fragment>
      <div className="box">
        <div className="headerBox">
          <div className="avatar">
            <img src="https://avatarfiles.alphacoders.com/693/thumb-69307.png" />
          </div>
          <div className="user-data">
            <p>Teste</p>
            <small>ha 3min atrás</small>
          </div>
        </div>
        <hr />
        <div className="text">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </div>
      </div>
    </Fragment>
  );
};

export default PostBox;
