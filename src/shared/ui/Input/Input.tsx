import { classNames } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readOnly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readOnly,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaterPosition] = useState(0);

  const isCaretVisible = isFocused && !readOnly;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaterPosition(e.target.value.length);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (e: any) => {
    setCaterPosition(e?.target?.selectionStart || 0);
  };

  useEffect(() => {
    if (!autofocus) return;
    setIsFocused(true);
    if (ref.current !== null) {
      ref.current.focus();
    }
  }, [autofocus]);

  return (
    <div className={classNames(cls.InputWrapper, { [cls.readOnly]: readOnly }, [className])}>
      {placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
      <div className={cls.caretWrapper}>
        <input
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.input}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          ref={ref}
          readOnly={readOnly}
          {...otherProps}
        />
        {isCaretVisible && (
          <span className={cls.caret} style={{ left: `${caretPosition * 9}px` }} />
        )}
      </div>
    </div>
  );
});
