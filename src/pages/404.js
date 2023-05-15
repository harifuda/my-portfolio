import * as React from "react";
import "../style/site.scss";

const ErrorPage = () => {
  return (
    <main>
      <div className="errorM">
        <h1 class="font-black">404</h1>
      </div>
    </main>
  );
};

export default ErrorPage;

export const Head = () => <title>404</title>;
