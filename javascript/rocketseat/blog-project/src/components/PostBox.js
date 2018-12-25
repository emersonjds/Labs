import React, { Fragment } from "react";

const PostBox = props => {
  return (
    <Fragment>
      {props.post &&
        props.post.map(pst => (
          <div className="box" key={pst.id}>
            <div className="headerBox">
              <div className="avatar">
                <img src={pst.avatarImg} />
              </div>
              <div className="user-data">
                <p>{pst.nome}</p>
                <small>{pst.post_time}</small>
              </div>
            </div>
            <hr />
            <div className="text">{pst.text_content}</div>
          </div>
        ))}
    </Fragment>
  );
};

export default PostBox;
