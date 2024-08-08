import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';

import { NumberInputProps } from './Types';
import Wrapper from './Wrapper';

export type IProps = NumberInputProps;

const NumberInput: React.FC<IProps> = ({
  id,
  state,
  size = 'medium',
  min,
  max,
  value,
  placeholder,
  disabled,
  overwrite = false,
  readOnly,
  autoFocus,
  onChange,
  onBlur,
  valuePrefix,
  valueSuffix,
  prefix,
  suffix,
  prefixIcon,
  onPrefixIcon,
  suffixIcon,
  onSuffixIcon,
  message,
}) => {
  const [isFocused, setFocused] = useState(false);

  return (
    <Wrapper
      {...{
        size,
        state,
        isFocused,
        disabled,
        prefix,
        suffix,
        prefixIcon,
        onPrefixIcon,
        suffixIcon,
        onSuffixIcon,
        message,
      }}
    >
      <IMaskInput
        {...{ id, placeholder, disabled, readOnly, autoFocus, overwrite }}
        value={String(value || '')}
        type='tel'
        onAccept={(value: string) => onChange && onChange(value)}
        onFocus={() => setFocused(true)}
        onBlur={e => {
          setFocused(false);
          onBlur && onBlur(e);
        }}
        unmask
        lazy={false}
        autofix={false}
        mask={`${valuePrefix || ''}amount${valueSuffix || ''}`}
        blocks={{
          amount: {
            mask: Number,
            min,
            max,
            scale: 2,
            radix: '.',
            normalizeZeros: true,
          },
        }}
        autoComplete='off'
        autoCorrect='off'
        autoCapitalize='off'
        spellCheck='false'
      />
    </Wrapper>
  );
};

export default NumberInput;
