import React from "react";

export interface ChildrenProps {
  children: React.ReactNode;
}

export interface IError extends Error {
  response: { data: { message: string } };
}
export type TDeleted = {
  is_deleted: boolean | string;
  delete_id: boolean | string | null;
};
export type TExamA = {
  category: string | null |number,
  topics:any,
  start_time: string | number,
  end_time: string | number,
  total_questions: null | string | number,
  time_limit: string | number,
};
export type TCategorieD = {
  category_id: string;
  topic_name: string;
  file: File | null;
};

export type TPassword={
  oldPassword:string,
  newPassword:string,
  verifyPassword:string
}

export interface LoginData {
  username: string;
  email: string;
  password: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
  password_confirm: string;
}
