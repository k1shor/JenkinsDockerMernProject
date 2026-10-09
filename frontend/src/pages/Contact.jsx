import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
    return (
        <>
            <Grid container padding={'50px'}>
                <Grid size={{ xs: 12, md: 6 }} bgcolor={'#bbcc00'} p={5}>
                    <Typography variant='h4' textAlign={'left'}
                        sx={{ textDecoration: 'underline' }} fontWeight={'bold'}
                    >
                        OUR Store
                    </Typography>
                    <Typography variant='h5'>Lagankhel</Typography>
                    <Typography variant='h5'>Phone: 01-5423889</Typography>
                    <Typography variant='h6'>Email: info@ourstore.com.np</Typography>
                    <Typography variant='h6'>Website: www.ourstore.com.np</Typography>
                </Grid>



                <Grid size={{ xs: 12, md: 6 }} p={5} bgcolor={'#ccaa11'}>
                    <Typography variant='h4' textAlign={'left'}
                        sx={{ textDecoration: 'underline' }} fontWeight={'bold'}
                    >
                        Contact Form
                    </Typography>

                    <TextField label='E-mail' placeholder='Enter your email here' fullWidth required helperText='example: something@something.com' />
                    <TextField label='Subject' fullWidth />
                    <TextField multiline rows={4} fullWidth label='Message' />
                    <Button variant='contained' fullWidth color='secondary' >
                        Submit
                    </Button>

                </Grid>
                <Grid size={{ xs: 12 }}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.2360342965385!2d85.31829767533362!3d27.66589627620638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19000a4f32cf%3A0x53f71813950137ff!2sEvolve%20IT%20Hub!5e1!3m2!1sen!2snp!4v1762248365466!5m2!1sen!2snp"  height="450" style={{"border":"0"}} allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" width={'100%'}></iframe>
                </Grid>
            </Grid>
            <Box>

            </Box>
        </>
    )
}

export default Contact

// ant design, prime react, react bootstrap