import React from "react";

export default function Message({ msg }) {
  return !msg ? <div>Propriedade nao passada</div> : <div>{msg}</div>;
}
