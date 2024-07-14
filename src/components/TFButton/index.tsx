import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export type ButtonShape = 'Default' | 'Circle';
export type IconPosition = 'Left' | 'Right';
export type ButtonSize = 'XS' | 'SM' | 'BASE' | 'LG' | 'XL';
export type ButtonStyle = 'Primary' | 'Ghost' | 'Borderless';

export interface TFButtonProps {
  icon?: ReactNode;
  iconPosition?: IconPosition;
  iconSize?: string;
  iconColor?: string;
  shape?: ButtonShape;
  size: ButtonSize;
  buttonStyle: ButtonStyle;
  textColor?: string;
  title?: string;
  children?: ReactNode | string;
  // Loại bỏ các thuộc tính không tương thích và thêm các thuộc tính tương thích với TouchableOpacity
  onPress?: () => void;
  disabled?: boolean;
  className?: string;
}

export const buttonSizes: Record<ButtonSize, string> = {
  XS: 'text-xs leading-4 font-medium px-3 py-2',
  SM: 'text-sm leading-4 font-medium px-3.5 py-2.5',
  BASE: 'text-sm leading-5 font-medium px-4 py-2.5',
  LG: 'text-base leading-6 font-medium px-4 py-2.5',
  XL: 'text-base leading-6 font-medium px-6 py-3.5',
};

export const circleButtonSizes: Record<ButtonSize, string> = {
  XS: 'p-2',
  SM: 'p-2.5',
  BASE: 'p-3',
  LG: 'p-3.5',
  XL: 'p-4',
};

export const buttonStyles: Record<ButtonStyle, string> = {
  Primary:
    'disabled:bg-tf-surface-DISABLED disabled:text-tf-color-250 transition-all bg-tf-action-primary-300 text-tf-color-100 hover:bg-tf-action-primary-400 focus-visible:border-tf-surface-FOCUSRING rounded-full outline-none hover:shadow-sm focus-visible:border-2',
  Ghost:
    'disabled:text-tf-color-250 disabled:border-tf-surface-DISABLED transition-all text-tf-color-700 border-tf-action-primary-400 hover:bg-tf-action-primary-50 focus-visible:border-tf-surface-FOCUSRING rounded-full bg-transparent outline-none border border-inset hover:shadow-sm focus-visible:border-2',
  Borderless:
    'disabled:text-tf-color-250 transition-all text-tf-color-700 border-tf-action-primary-400 hover:bg-tf-action-primary-50 focus-visible:border-tf-surface-FOCUSRING rounded-full bg-transparent outline-none focus-visible:border-2',
};

export const TFButton: React.FC<TFButtonProps> = ({
  iconPosition = 'Left',
  shape = 'Default',
  icon,
  size,
  buttonStyle,
  iconSize = 'w-6',
  iconColor,
  children,
  textColor,
  ...props
}) => {
  const iconStyles = clsx(iconColor, iconSize);
  const buttonShapeSizes = shape === 'Circle' ? circleButtonSizes : buttonSizes;
  const iconPaddingLeft = 'pl-2';
  const iconPaddingRight = 'pr-2';
  const hasIconAndChildren = icon && children;
  let paddingStyle = '';
  if (hasIconAndChildren) {
    paddingStyle = iconPosition === 'Left' ? iconPaddingLeft : iconPaddingRight;
  }
  return (
    <TouchableOpacity
      {...props}
      className={clsx(
        buttonStyles[buttonStyle],
        buttonShapeSizes[size],
        props.className,
      )}>
      <View className="flex items-center justify-center">
        {icon && iconPosition === 'Left' && (
          <View className={iconStyles}>{icon}</View>
        )}

        {typeof children === 'string' ? (
          <Text className={clsx(paddingStyle, textColor)}>{children}</Text>
        ) : (
          <View className={clsx(paddingStyle)}>{children}</View>
        )}
        {icon && iconPosition === 'Right' && (
          <View className={iconStyles}>{icon}</View>
        )}
      </View>
    </TouchableOpacity>
  );
};
