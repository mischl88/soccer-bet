"use client";

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { Box, Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react'

import { IRoute } from '@/types/navigation'

interface SidebarLinksProps {
  routes: IRoute[]
}

export function SidebarLinks ({ routes }: SidebarLinksProps) {
  const pathname = usePathname()

  const activeColor = useColorModeValue('gray.700', 'white')
  const inactiveColor = useColorModeValue(
    'secondaryGray.600',
    'secondaryGray.600'
  )
  const activeIcon = useColorModeValue('brand.500', 'white')
  const textColor = useColorModeValue('secondaryGray.500', 'white')
  const brandColor = useColorModeValue('brand.500', 'brand.400')

  const activeRoute = (routeName: string) => {
    return pathname === routeName;
  }

  const createLinks = (routes: IRoute[]) => {
    return routes.map((route, index: number) => {
        return (
          <Link key={index} href={route.layout + route.path}>
              {route.icon ? (
                <Box>
                  <HStack
                    spacing={
                      activeRoute(route.path.toLowerCase()) ? '22px' : '26px'
                    }
                    py='5px'
                    ps='10px'
                  >
                    <Flex w='100%' alignItems='center' justifyContent='center'>
                      <Box
                        color={
                          activeRoute((route.layout + route.path).toLowerCase())
                            ? activeIcon
                            : textColor
                        }
                        me='18px'
                      >
                        {route.icon}
                      </Box>
                      <Text
                        me='auto'
                        color={
                          activeRoute((route.layout + route.path).toLowerCase())
                            ? activeColor
                            : textColor
                        }
                        fontWeight={
                          activeRoute((route.layout + route.path).toLowerCase())
                            ? 'bold'
                            : 'normal'
                        }
                      >
                        {route.name}
                      </Text>
                    </Flex>
                    <Box
                      h='36px'
                      w='4px'
                      bg={
                        activeRoute((route.layout + route.path).toLowerCase())
                          ? brandColor
                          : 'transparent'
                      }
                      borderRadius='5px'
                    />
                  </HStack>
                </Box>
              ) : (
                <Box>
                  <HStack
                    spacing={
                      activeRoute((route.layout + route.path).toLowerCase()) ? '22px' : '26px'
                    }
                    py='5px'
                    ps='10px'
                  >
                    <Text
                      me='auto'
                      color={
                        activeRoute((route.layout + route.path).toLowerCase())
                          ? activeColor
                          : inactiveColor
                      }
                      fontWeight={
                        activeRoute((route.layout + route.path).toLowerCase())
                          ? 'bold'
                          : 'normal'
                      }
                    >
                      {route.name}
                    </Text>
                    <Box h='36px' w='4px' bg='brand.400' borderRadius='5px' />
                  </HStack>
                </Box>
              )}
          </Link>
        )
    })
  }

  return <>{createLinks(routes)}</>
}

export default SidebarLinks
