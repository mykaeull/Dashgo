import {
  Input as ChakraInput,
  FormControl,
  FormLabel,
  InputProps as ChakraInputPorps,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";
import { forwardRef } from "react";

interface InputProps extends ChakraInputPorps {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase = ({ name, label, error = null, ...rest }: InputProps, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900",
        }}
        size="lg"
        ref={ref}
        {...rest}
      />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
