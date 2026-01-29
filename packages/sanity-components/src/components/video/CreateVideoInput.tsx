import { FileInputProps, ObjectInputProps } from 'sanity';
import { VideoAndThumb } from './VideoAndThumb';

export interface VideoInputOptions {
  /** Enable thumbnail generation feature */
  enableThumbnailGeneration?: boolean;
  /** Support URL input instead of file upload */
  inputType?: 'file' | 'url';
}

export function createVideoInput(options: VideoInputOptions = {}) {
  const {
    enableThumbnailGeneration = true,
    inputType = 'file'
  } = options;

  return function VideoInput(props: FileInputProps | ObjectInputProps) {
    return (
      <VideoAndThumb 
        props={props as ObjectInputProps}
        isURL={inputType === 'url'}
        enableThumbnailGeneration={enableThumbnailGeneration}
      />
    );
  };
}