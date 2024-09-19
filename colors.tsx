import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

export default function ColorButtonsScreen() {
  return (
    <StyledView className="flex-1 justify-center items-center space-y-4">
      {/* Button 1 - Red */}
      <StyledTouchableOpacity className="bg-red-500 h-8 w-8 rounded-full items-center justify-center">
        <StyledText className="text-white text-sm">Red</StyledText>
      </StyledTouchableOpacity>

      {/* Button 2 - Yellow */}
      <StyledTouchableOpacity className="bg-yellow-500 h-8 w-8 rounded-full items-center justify-center">
        <StyledText className="text-black text-sm">Yellow</StyledText>
      </StyledTouchableOpacity>

      {/* Button 3 - Blue */}
      <StyledTouchableOpacity className="bg-blue-500 h-8 w-8 rounded-full items-center justify-center">
        <StyledText className="text-white text-sm">Blue</StyledText>
      </StyledTouchableOpacity>

      {/* Button 4 - Green */}
      <StyledTouchableOpacity className="bg-green-500 h-8 w-8 rounded-full items-center justify-center">
        <StyledText className="text-white text-sm">Green</StyledText>
      </StyledTouchableOpacity>

      {/* Button 5 - Brown */}
      <StyledTouchableOpacity className="bg-brown-500 h-8 w-8 rounded-full items-center justify-center">
        <StyledText className="text-white text-sm">Brown</StyledText>
      </StyledTouchableOpacity>
    </StyledView>
  );
}
