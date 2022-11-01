import { NextPage } from "next";

interface ErrorProps {
  statusCode: number | undefined;
}

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <div className="py-4 sm:py-8 md:py-12 lg:py-14 xl:py-12 2xl:py-28">
      <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 md:max-w-3xl lg:max-w-4xl lg:px-0 xl:max-w-5xl 2xl:max-w-6xl">
        <h1 className="text-center text-5xl font-bold tracking-tight text-white sm:text-6xl sm:tracking-tight lg:text-[4rem] xl:text-[6rem] xl:tracking-tight 2xl:text-[6.5rem]">
          {statusCode}
        </h1>
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
