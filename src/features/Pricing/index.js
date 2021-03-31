import { Container, Grid } from '@material-ui/core'
import React from 'react'
import trans from '../../util/trans'
import PriceCard from './components/PriceCard'

const Pricing = () => {
    return (
        <Container>
            <Grid container justify="space-between" spacing={2}>
                <Grid item xs={3}>
                    <PriceCard name={trans('basic')} price="200" priceTerm={trans('one-time-payment')} inclusions={['Setup', '5 support calls']} background="#57A3D0" />
                </Grid>
                <Grid item xs={4}>
                    <PriceCard name={trans('premium')} price="800" priceTerm={trans('one-time-payment')}   inclusions={['Setup', 'one year support']} background="#C0C4C8"/>
                </Grid>
                <Grid item xs>
                    <PriceCard name={trans('lifetime')} price="9,500" priceTerm={trans('one-time-payment')}   inclusions={['Dedicated technician', 'Unlimited support']} background="#E0E4E8"/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Pricing
