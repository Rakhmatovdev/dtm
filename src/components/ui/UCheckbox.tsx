import React from "react";
import {Checkbox} from "antd";
import {Controller, Control} from "react-hook-form";

interface UCheckboxProps {
    className?: string;
    disabled?: boolean;
    name: string;
    control: Control<any>;
}

const UCheckbox: React.FC<UCheckboxProps> = ({
                                                 control,
                                                 name,
                                                 className,
                                                 disabled,
                                                 ...other
                                             }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({field: {onChange, value}}) => (
                <Checkbox
                    className={className}
                    disabled={disabled}
                    checked={value} // React-hook-form's value determines if it's checked
                    onChange={(e) => onChange(e.target.checked)} // Pass only `checked` value
                    {...other}
                />
            )}
        />
    );
};

export default UCheckbox;
