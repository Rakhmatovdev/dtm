import React from "react";

export interface ChildrenProps {
  children: React.ReactNode;
}

export interface IError extends Error {
  response: { data: { message: string } };
}

export type TSearch = {
  text: string;
};

export type TLogin = {
  login: string;
  password: string;
};

export type TToken = {};

export type TDeleted = {
  is_deleted: boolean | string;
  delete_id: boolean | string | null;
};
export type TAdsD = {
  product: string;
  image_ru: string;
  image_en: string;
  id: number | string;
};

export type TBannerD = {
  product: string;
  image_ru: string;
  image_en: string;
  title: string;
  id: number | string;
};

export type TCategorieD = {
  title_ru: string;
  title_en: string;
  icon: string;
  id: string | number;
};

export type TCompanyD = {
  name: string;
  logo: string;
  callcenter: string;
  mail: string;
  address_ru: string;
  address_en: string;
  free_delivery: string;
  delivery_price: string;
  id: string | number;
};

export type TContactD = {
  title_ru: string;
  title_en: string;
  id: string | number;
};

export type TProductImageD={
  product:string,
  image:string,
  id:string | number
}

export type TProductD = {
  title_ru: string;
  title_en: string;
  price: number | null;
  description_ru: string;
  description_en: string;
  gender: string | null;
  discount_price: number | null;
  is_discounted: boolean;
  is_show_new_arrival: boolean;
  is_best_sellers: boolean;
  is_recommended: boolean;
  category: string | null;
  quantity: number | null;
};


export type TPersonalInfo={
  name:string,
  email:string,
  phone:string | number | null
}
export type TPassword={
  oldPassword:string,
  newPassword:string,
  verifyPassword:string
}

