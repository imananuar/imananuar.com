import { useState } from "react";

export default function MessageBox({ data, userId }: any) {
  // data.user === userId -> if user is sender

  const messageBoxStyle = {
    align: data.user === userId ? "ml-4 ml-auto text-right items-end" : "",
    border:
      data.user === userId
        ? "border border-green-400"
        : "border border-red-400",
    textColor: data.user === userId ? "text-green-400" : "text-red-400",
    padding: data.user === userId ? "pr-4" : "pl-4",
  };

  return (
    <>
      <div
        className={`my-2 mx-4 ${messageBoxStyle.align} rounded-md  `}
      >
        <div className={`${messageBoxStyle.border} rounded-lg py-2 inline-block`}>
          <p
            className={`px-4 text-base ${messageBoxStyle.padding} ${messageBoxStyle.textColor}`}
          >
            {data.message}
          </p>
        </div>
      </div>
    </>
  );
}
