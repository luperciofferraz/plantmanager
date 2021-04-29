import React from 'react';
import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {

    title: string;

}

export function Button({ title, ...rest } :ButtonProps) {

    return (
      <>
      </>

  );
}
