import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import type { GetProps } from 'antd';

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);
interface AppProps {
    ClassName?:string,
    Suffix?:boolean,
    EnterButton?:string | boolean ,
    placeholder?:string,
    size?:'small' | 'middle' | 'large' | undefined
    
  }

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);



const USearch: React.FC<AppProps> = ({ClassName,Suffix,EnterButton,placeholder,size}) => (
  <Space direction="vertical">
    <Search placeholder={placeholder} suffix={Suffix && suffix} onSearch={onSearch} enterButton={EnterButton} size={size}  className={ClassName}/>
  </Space>
);

export default USearch;