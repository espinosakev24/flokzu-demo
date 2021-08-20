import React, { useRef, useState } from 'react';
import { Flex, Button, Input } from '@chakra-ui/react';

export const ButtonFile = ({ onImageLoaded }) => {
  const inputEl = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const onClickHandler = () => inputEl.current.click();

  const onChangeHandler = ({
    target: {
      files: [file],
    },
  }) => {
    const fileReader = new FileReader();
    setIsLoading(true);
    fileReader.addEventListener('load', ({ target: { result } }) => {
      onImageLoaded(result, file);
      setIsLoading(false);
    });
    fileReader.readAsDataURL(file);
  };

  return (
    <Flex marginBottom="5" w="100%" justify="center">
      <Button
        onClick={onClickHandler}
        colorScheme="teal"
        variant="outline"
        size="lg"
        isLoading={isLoading}
      >
        Upload image
      </Button>
      <Input
        id="camera"
        name="picuture"
        type="file"
        accept="image/*"
        capture="camera"
        onChange={onChangeHandler}
        display="none"
        ref={inputEl}
      />
    </Flex>
  );
};
