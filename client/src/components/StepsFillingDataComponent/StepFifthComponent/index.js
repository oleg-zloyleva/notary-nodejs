import React, { useState } from 'react';
import styled from 'styled-components';
import ImageUploading from 'react-images-uploading';

import { ButtonComponent } from '../../ButtonComponent';
import { StepWrapperComponent } from '../StepWrapperComponent';
import { ButtonWrapperComponent } from '../ButtonWrapperComponent';
import img from '../../../assets/svg/arrow-right.svg';
import trash from '../../../assets/svg/trash.svg';
import update from '../../../assets/svg/update.svg';
import './style.css';

const ItemWrapper = styled('div')`
  overflow: hidden;
  width: 104px;
  height: 150px;
  border-radius: 10px;
  position:relative;
  margin: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
`;

const ImageWrapper = styled(ItemWrapper)`
  background-image: url("${(props) => props.thumb}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const ImageControlsWrapper = styled('div')`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  align-items: center;
`;

const IndexCounterWrapper = styled('div')`
  flex: 1;
  padding-left: 16px;
  color: #777777;
`;

const ControlButton = styled('button')`
  margin: 0;
  padding: 0;
  border: none;
  background: unset;
  cursor:pointer;
  &:focus{
    outline: none;
  }
`;

const AddImgButtonWrapper = styled(ControlButton)`
  height: 100%;
  background: #D1D1D6;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
`;

const StepFifthComponent = () => {
  const [images, setImages] = useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  return (
    <StepWrapperComponent width={600}>
      <h2>Відскановані документи</h2>
      <p>
        Будь ласка,завантажте відскановану ID картку, або у випадку паперового паспорту - усі заповнені сторінки, а також ідентифікаційні код
      </p>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >

        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">

            {imageList.map((image, index) => (
              <ImageWrapper key={index} thumb={image.data_url}>
                <ImageControlsWrapper>
                  <IndexCounterWrapper>{index + 1}</IndexCounterWrapper>
                  <ControlButton onClick={() => onImageUpdate(index)}><img src={update} alt="" /></ControlButton>
                  <ControlButton onClick={() => onImageRemove(index)}><img src={trash} alt="" /></ControlButton>
                </ImageControlsWrapper>
              </ImageWrapper>
            ))}

            <ItemWrapper>
              <AddImgButtonWrapper
                style={isDragging ? { color: 'red' } : null}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here
              </AddImgButtonWrapper>
            </ItemWrapper>
          </div>
        )}

      </ImageUploading>
      <ButtonWrapperComponent>
        <ButtonComponent colors="secondary">
          Продовжити <img src={img} alt="" />
        </ButtonComponent>
      </ButtonWrapperComponent>
    </StepWrapperComponent>
  );
};

export { StepFifthComponent };
