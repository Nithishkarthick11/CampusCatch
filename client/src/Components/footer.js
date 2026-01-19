import React from 'react'
import { Link, Stack, Typography } from '@mui/material'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

const Footer = () => {
    return (
        <Stack width="100%" sx={{ pt: '85px' }}>
            <Stack
                width="100%"
                height="130px"
                sx={{ backgroundColor: '#357ABD' }}
                py="10px"
                px="40px"
                justifyContent="center"
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    height="100%"
                    sx={{ borderTop: '3px solid #FFF' }}
                >
                    <Typography
                        fontSize="16px"
                        fontWeight="light"
                        color="white"
                        alignSelf="center"
                    >
                        ©  CampusCatch
                    </Typography>

                  
                </Stack>
              
            </Stack>
        </Stack>
    )
}

export default Footer
