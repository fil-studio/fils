import { ChevronDownIcon, ChevronRightIcon, DropIcon, WarningOutlineIcon } from '@sanity/icons';
import { Button, Card, Flex, Stack, Text } from '@sanity/ui';
import { useRef, useState } from 'react';
import { ObjectInputProps, set, useClient } from 'sanity';
import { buildFileUrl, getFile } from '@sanity/asset-utils';

export interface VideoAndThumbProperties {
  props: ObjectInputProps;
  isURL: boolean;
  enableThumbnailGeneration?: boolean;
}

export function VideoAndThumb(params: VideoAndThumbProperties) {
  const { props, isURL, enableThumbnailGeneration = true } = params;
  const client = useClient({ apiVersion: '2024-01-01' });

  // Get config from the client
  const sanityConfig = {
    projectId: client.config().projectId!,
    dataset: client.config().dataset!
  };

  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [warning, setWarning] = useState<string | null>(null);
  
  let url;
  const videoMsg = isURL ? 'video URL' : 'video file';
  
  if (isURL) {
    //@ts-ignore
    url = props.value ? props.value.video : "";
  } else {
    // is file
    const file = props.value && props.value.video && props.value.video.asset 
      ? getFile(props.value.video.asset, sanityConfig) 
      : null;
    url = file ? buildFileUrl(file.asset, sanityConfig) : "";
  }

  // Get all field members
  const fieldMembers = props.members.filter(member => member.kind === 'field');
  
  // URL/File Field
  const videoField = fieldMembers.filter(member => member.name === 'video');

  // Thumbnail Image Field
  const thumb = fieldMembers.filter(member => member.name === 'image');

  const generateFrame = async (video: HTMLVideoElement) => {
    // Clear any existing warnings
    setWarning(null);

    if (video.videoWidth && video.videoHeight) {
      try {
        const can = document.createElement('canvas');
        can.width = video.videoWidth;
        can.height = video.videoHeight;
        const ctx = can.getContext('2d');
        ctx?.drawImage(video, 0, 0);
        
        can.toBlob(async blob => {
          if (!blob) {
            setWarning('Failed to generate image from video frame');
            return;
          }
          try {
            // Use the studio's authenticated client
            const asset = await client.assets.upload('image', blob, {
              filename: `video-frame-${Date.now()}.png`,
              title: 'Generated from video frame'
            });

            // Create image reference
            const imageReference = {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: asset._id
              }
            };

            // Update your object with the new image
            props.onChange([
              set(imageReference, ['image'])
            ]);

          } catch (uploadError) {
            console.error('Failed to upload image:', uploadError);
            setWarning('Failed to upload generated frame to Sanity');
          }
        }, "image/png");
      } catch (error) {
        console.error('Error generating frame:', error);
        setWarning('Failed to generate frame from video');
      }
    } else {
      setWarning(`Video has no image data. Please make sure a ${videoMsg} is properly set and preview image is visible.`);
    }
  };

  const handleGenerateFromFrame = () => {
    if (videoRef.current) {
      generateFrame(videoRef.current);
    } else {
      setWarning(`Video element not found. Please make sure a ${videoMsg} is set and video preview unfolded.`);
    }
  };

  return (
    <Stack space={1}>
      <style>{` video { width: 100%; } `}</style>
      
      {/* Video field */}
      <>{props.renderDefault({
        ...props,
        members: videoField
      })}</>
      
      {/* Video preview */}
      {url && (
        <Card>
          <Stack space={2}>
            <Button
              mode="bleed"
              justify="flex-start"
              onClick={() => setIsOpen(!isOpen)}
              padding={2}
            >
              <Flex align="center" gap={2}>
                {isOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
                <Text size={1} weight="medium">
                  {isOpen ? 'Hide Preview' : 'Show Preview'}
                </Text>
              </Flex>
            </Button>
            
            {isOpen && (
              <Card padding={2} border>
                <video 
                  ref={videoRef} 
                  src={url} 
                  muted 
                  loop 
                  autoPlay 
                  controls 
                  crossOrigin="anonymous" 
                />
              </Card>
            )}
          </Stack>
        </Card>
      )}
      
      {/* Thumbnail field */}
      <>{props.renderDefault({
        ...props,
        members: thumb
      })}</>
      
      {/* Generate button */}
      {enableThumbnailGeneration && (
        <Button
          fontSize={[2, 2, 3]}
          icon={DropIcon}
          mode="ghost"
          tone="positive"
          text="Generate from Video Frame"
          onClick={handleGenerateFromFrame}
        />
      )}
      
      {/* Warning display */}
      {warning && (
        <Card padding={3} tone="caution" border>
          <Stack space={2}>
            <Text size={1} weight="medium">
              <WarningOutlineIcon style={{ marginRight: '8px' }} />
              Warning
            </Text>
            <Text size={1}>{warning}</Text>
          </Stack>
        </Card>
      )}
    </Stack>
  );
}