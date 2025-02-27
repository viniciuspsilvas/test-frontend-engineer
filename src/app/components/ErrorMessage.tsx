"use client";

const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg max-w-md text-center">
        <strong>Error:</strong> {message}
      </div>
    </div>
  );
};

export default ErrorMessage;