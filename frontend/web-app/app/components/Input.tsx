import { TextInput, HelperText, Label } from "flowbite-react";
import { useController, UseControllerProps } from "react-hook-form";

type Props = {
    label: string;
    type?: string;
    showlabel?: boolean;
} & UseControllerProps

const Input = (props: Props) => {
    const { field, fieldState } = useController({...props})

  return (
    <div className="mb-3 block">
        {props.showlabel && (
            <div className="mb-2 block">
                <Label htmlFor={field.name}>
                    {props.label}
                </Label>
            </div>
        )}
        <TextInput
            {...props}
            {...field}
            type={props.type || "text"}
            value={field.value || ""}
            placeholder={props.label}
            color={fieldState?.error ? "failure" : !fieldState.isDirty ? "" : "success"}
        />
        <HelperText color="failure">
            {fieldState?.error?.message as string}
        </HelperText>
    </div>
  )
};

export default Input;