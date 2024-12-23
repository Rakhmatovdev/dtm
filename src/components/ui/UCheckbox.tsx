import React from "react";
import { Checkbox } from "antd";
import { Controller } from "react-hook-form";

interface AppProps {
  className?: string;
  disabled?: boolean;
  name: string;
  control: any;
}

const UCheckbox: React.FC<AppProps> = ({
  control,
  name,
  ...other
}) => {
  return (
    <Controller
     name={name}
     control={control}
      render={({ field: { onChange, value } }) => (
        <Checkbox onChange={onChange}
        value={value}
        {...other}/>
      )}
    />
  );
};
export default UCheckbox;
