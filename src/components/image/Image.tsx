"use client";

import NextImage from 'next/image'

import { ComponentProps } from 'react'

import { Box } from '@chakra-ui/react'

interface ImageProps extends ComponentProps<typeof NextImage> {}

export const Image = ({ src, alt, ...rest }: ImageProps) => {
  return (
    <Box overflow="hidden" position="relative">
      <NextImage objectFit="cover" layout="fill" src={src} alt={alt} {...rest} />
    </Box>
  )
}
