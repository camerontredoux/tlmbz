import { NextPage } from "next";

interface ErrorProps {
  statusCode: number | undefined;
}

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <div className="hero-padding">
      <div className="hero-width">
        <h1 className="hero-title">{statusCode}</h1>
        <h2 className="text-center">Something went wrong...</h2>
      </div>
    </div>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
