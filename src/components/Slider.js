import {
  Text,
  Slider as CSlider,
  SliderTrack,
  SliderFilledTrack,
  Box,
  SliderThumb,
} from '@chakra-ui/react';

export const Slider = ({ title, value, onChange }) => {
  return (
    <Box>
      <Text fontSize="xl" fontWeight="extrabold">
        {title}
      </Text>
      <CSlider
        defaultValue={value}
        min={0}
        max={1}
        step={0.1}
        onChange={onChange}
      >
        <SliderTrack bg="red.100">
          <Box position="relative" right={10} />
          <SliderFilledTrack bg="tomato" />
        </SliderTrack>
        <SliderThumb boxSize={8}>
          <Box>
            <Text>{value}</Text>
          </Box>
        </SliderThumb>
      </CSlider>
    </Box>
  );
};
