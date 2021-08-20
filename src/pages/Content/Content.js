import React, { useState } from 'react';
import {
  Button,
  Image,
  Box,
  Text,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import { fileSize } from 'helpers';
import { DataTable, FileInfo, ButtonFile, Slider } from 'components';
import { postImage } from 'services';
import './../../app.css';
import { ModalImg } from 'components/ModalImg';

const INITIAL_THRESHOLD = 0.7;

export const Content = () => {
  const [threshold, setThreshold] = useState(INITIAL_THRESHOLD);
  const [table, setTable] = useState([]);
  const [isGeneratingTable, setIsGeneratingTable] = useState(false);
  const [fileData, setFileData] = useState({});
  const [image, setImage] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleThresholdChange = value => {
    setThreshold(Number(value));
  };

  const handleImage = (dataURI, file) => {
    setFileData({
      name: file.name,
      fileSize: fileSize(file),
      type: file.type,
      fileFormat: file.type.split('/')[1],
    });
    setImage(dataURI);
  };

  const postTable = () => {
    setIsGeneratingTable(true);
    postImage(fileData.fileFormat, image.split(',')[1])
      .then(({ data }) => {
        setTable(data);
        setIsGeneratingTable(false);
      })
      .catch(err => {
        alert('something went wrong');
        console.log(err);
      });
  };

  return (
    <div className="contentContainer">
      <Flex direction="column" align="center">
        <Flex justify="center" align="center" wrap="wrap" marginTop="5">
          <Flex align="center">
            <Image
              src={'https://www.flokzu.com/assets/img/logo_fkz.png'}
              className="flokzuLogo"
            />
            <Text fontWeight="extrabold" color="#4c4c4c" fontSize="4xl">
              Flokzu
            </Text>
          </Flex>
          <Image
            src={
              'https://app.cogniflow.ai/static/media/logo_cogniflow.7ec25585.svg'
            }
            width="300px"
            objectFit="contain"
          />
        </Flex>
        <Text
          fontSize="4xl"
          fontWeight="extrabold"
          align="center"
          marginTop="5"
          marginBottom="5"
        >
          Flokzu AI Form Parser
        </Text>
        <ButtonFile onImageLoaded={handleImage} />
      </Flex>
      <Flex justify="space-evenly" wrap="wrap">
        <Flex
          direction="column"
          align="center"
          wrap="wrap"
          className="imageDataBox"
        >
          {image && (
            <>
              <ModalImg img={image} isOpen={isOpen} onClose={onClose} />
              <Image
                src={image}
                alt="Uploaded image"
                boxSize="300px"
                objectFit="contain"
                onClick={onOpen}
                cursor="pointer"
              />
              <Box>
                <FileInfo fileData={fileData} />
                {isGeneratingTable && (
                  <Text
                    mb="2"
                    color="red.400"
                    fontWeight="bold"
                    fontSize="14px"
                  >
                    This process might take several minutes...
                  </Text>
                )}
                <Button
                  onClick={postTable}
                  colorScheme="purple"
                  variant="solid"
                  isFullWidth
                  size="md"
                  isLoading={isGeneratingTable}
                  marginBottom="5"
                >
                  Generate table
                </Button>
              </Box>
            </>
          )}
        </Flex>
        {Object.keys(table).length > 0 && (
          <Box className="tableDataBox">
            <Slider
              title="Confidence Threshold"
              value={threshold}
              onChange={handleThresholdChange}
            />
            <DataTable rows={table.rows} threshold={threshold} />
          </Box>
        )}
      </Flex>
    </div>
  );
};
