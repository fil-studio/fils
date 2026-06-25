import { LinkIcon, PlayIcon, VideoIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { createVideoInput } from "./CreateVideoInput";

/**
 * Video File Schema
 * Document type for uploaded video files with thumbnail generation
 */
export const VideoFile = defineType({
  name: 'videoFile',
  type: 'document',
  title: 'Video File',
  description: 'Video File + Thumbnail',
  icon: VideoIcon,
  fields: [
    defineField({
      name: 'video',
      type: 'file',
      options: {
        accept: "video/mp4, video/webm"
      },
      icon: PlayIcon,
      description: 'Video File. Supported formats: MP4 & WebM',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Video Thumbnail',
      type: 'image',
      validation: Rule => Rule.required()
    })
  ],
  components: {
    input: createVideoInput({
      inputType: 'file',
      enableThumbnailGeneration: true
    })
  },
  preview: {
    select: {
      video: 'video',
      media: 'image'
    },
    prepare(selected) {
      const { video, media } = selected;

      // Just use the original filename from the asset if available
      const filename = video?.asset?._ref 
        ? video.asset._ref.split('-').slice(1, -1).join('-') 
        : 'No video';

      return {
        title: filename,
        media
      }
    }
  }
});

/**
 * Video URL Schema
 * Document type for external video URLs (e.g., Vimeo, YouTube)
 */
export const VideoURL = defineType({
  name: 'videoUrl',
  type: 'document',
  title: 'Video URL',
  description: 'External video URL + Thumbnail',
  icon: VideoIcon,
  fields: [
    defineField({
      name: 'video',
      type: 'url',
      icon: LinkIcon,
      description: 'Video URL (e.g., Vimeo, YouTube)',
      validation: Rule => Rule.required().uri({
        scheme: ['http', 'https']
      })
    }),
    defineField({
      name: 'image',
      title: 'Video Thumbnail',
      type: 'image',
      validation: Rule => Rule.required()
    })
  ],
  components: {
    input: createVideoInput({
      inputType: 'url',
      enableThumbnailGeneration: false // Can't generate from external URLs
    })
  },
  preview: {
    select: {
      video: 'video',
      media: 'image'
    },
    prepare(selected) {
      const { video, media } = selected;
      return {
        title: video || 'No URL',
        media
      }
    }
  }
});

/**
 * Video File Object Schema
 * Object type for use as a field in other schemas
 */
export const VideoFileObject = defineType({
  name: 'videoFileObject',
  type: 'object',
  title: 'Video with Thumbnail',
  fields: [
    defineField({
      name: 'video',
      type: 'file',
      title: 'File',
      options: {
        accept: "video/mp4, video/webm"
      }
    }),
    defineField({
      name: 'image',
      title: 'Thumbnail',
      type: 'image'
    })
  ],
  components: {
    input: createVideoInput({
      inputType: 'file',
      enableThumbnailGeneration: true
    })
  }
});

/**
 * Video URL Object Schema
 * Object type for use as a field in other schemas (URL version)
 */
export const VideoURLObject = defineType({
  name: 'videoUrlObject',
  type: 'object',
  title: 'Video URL with Thumbnail',
  fields: [
    defineField({
      name: 'video',
      type: 'url',
      title: "URL",
      description: "Paste your URL from Vimeo or similar here."
    }),
    defineField({
      name: 'image',
      title: 'Thumbnail',
      type: 'image'
    })
  ],
  components: {
    input: createVideoInput({
      inputType: 'url',
      enableThumbnailGeneration: false
    })
  }
});

export const VideoFileNoThumb = defineType({
  name: 'videoFileNoThumb',
  type: 'object',
  title: 'Video File',
  fields: [
    defineField({
      name: 'video',
      type: 'file',
      title: 'File',
      options: {
        accept: 'video/mp4, video/webm'
      }
    })
  ],
  components: {
    input: createVideoInput({
      inputType: 'file',
      enableThumbnailGeneration: false
    })
  },
  preview: {
    select: {
      video: 'video'
    },
    prepare(selected) {
      const { video } = selected as { video?: { asset?: { _ref?: string } } };
      const filename = video?.asset?._ref
        ? video.asset._ref.split('-').slice(1, -1).join('-')
        : 'No video';
      return {
        title: filename,
        media: PlayIcon
      }
    }
  }
});

export const VideoURLNoThumb = defineType({
  name: 'videoURLNoThumb',
  type: 'object',
  title: 'Video URL',
  fields: [
    defineField({
      name: 'video',
      type: 'url',
      title: "URL",
      description: "Paste your URL from Vimeo or similar here."
    })
  ],
  components: {
    input: createVideoInput({
      inputType: 'url',
      enableThumbnailGeneration: false
    })
  },
  preview: {
    select: {
      video: 'video'
    },
    prepare(selected) {
      const { video } = selected as { video?: string };
      return {
        title: video || 'No URL',
        media: LinkIcon
      }
    }
  }
});