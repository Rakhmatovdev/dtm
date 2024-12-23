import React from 'react';
import { Select } from 'antd';
import { Controller } from 'react-hook-form';

interface AppProps {
  options: { value: string; label: string }[];
  className?:string
  placeholder?:string
  name: string;
  control: any;
}

const USelect: React.FC<AppProps> = ({  name,control,options,...other}) => (
  <Controller
  name={name}
  control={control}
  render={({ field: { onChange, value } }) => (
     <Select
    showSearch
    optionFilterProp="label"
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    onChange={onChange}
    value={value}
    options={options}
    {...other}
  />
  )}
  />
);

export default USelect;
