import React from "react";

export interface ChildrenProps{
    children:React.ReactNode,
}

export interface IError extends Error {
    response:{data:{message:string}}
}