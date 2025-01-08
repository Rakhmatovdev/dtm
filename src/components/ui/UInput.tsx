import React from "react";
import { Input } from "antd";
import { Controller } from "react-hook-form";

interface AppProps {
  className?: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  value?: string | number;
  suffix?:any,
  name: string;
  control: any;
  required?: boolean;
}

const UInput: React.FC<AppProps> = ({
  type,
  control,
  name,
  ...other
}) => {
  return (
    <Controller
     name={name}
     control={control}
      render={({ field: { onChange, value } }) => (
        <Input
          onChange={onChange}
          value={value}
          type={type?type:"text"}
          {...other}
        />
      )}
    />
  );
};
export default UInput;
