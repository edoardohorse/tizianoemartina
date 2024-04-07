'use client'
import React from 'react';
import {Button, Card, CardActions, CardContent, Grid, Typography} from "@mui/material";
import Banner from "@/components/Banner";

type PerChiVieneDaFuoriProps = {}


const PerChiVieneDaFuori = (props: PerChiVieneDaFuoriProps) => {


	return (
		<>
			<Banner title={"Per chi viene da fuori"}>

				<Typography fontSize={30} fontWeight={500} lineHeight={1.1}>Saremo lieti di ospitarvi la notte delle nozze e
					quella precedentei presso uno dei seguenti Hotel/B&B.</Typography>

				<Grid container spacing={2}>
					<Content/>
				</Grid>

				<Typography fontSize={35}>Nelle prossime settimane vi aggiorneremo riguardo la disposizione che abbiamo scelto
					per voi previa conferma della vostra presenza.</Typography>
			</Banner>
		</>

	)
}

const Content = () => {
	const go = (e: any) => {
		window.open(e.target?.dataset?.href, '_blank')
	}

	return <>

		<Grid item>
			<Card variant="outlined">
				<CardContent>
					<Typography fontSize={20} fontWeight={700}>
						Hotel Marconi Via Kennedy 5, Pietraperzia EN
					</Typography>
					<CardActions>
						<Button size="small" data-href={'https://maps.app.goo.gl/w2bjZwfpmty6jSZo7'} onClick={go}>Vai!</Button>
					</CardActions>
				</CardContent>
			</Card>
		</Grid>

		<Grid item>
			<Card variant="outlined">
				<CardContent>
					<Typography fontSize={20} fontWeight={700}>
						B&B Dante Via Dante 7, Barrafranca EN
					</Typography>
					<CardActions>
						<Button size="small" data-href={'https://maps.app.goo.gl/ujhBt41qYAJgG6Li9'} onClick={go}>Vai!</Button>
					</CardActions>
				</CardContent>
			</Card>
		</Grid>

		<Grid item>
			<Card variant="outlined">
				<CardContent>
					<Typography fontSize={20} fontWeight={700}>
						B&B La Primula bivio catena, Barrafranca EN
					</Typography>
					<CardActions>
						<Button size="small" data-href={'https://maps.app.goo.gl/eWEPFinkk6ttZ7DR6'} onClick={go}>Vai!</Button>
					</CardActions>
				</CardContent>
			</Card>
		</Grid>

		<Grid item>
			<Card variant="outlined">
				<CardContent>
					<Typography fontSize={20} fontWeight={700}>
						B&B Principe di Scalea 17-19, Via Principe Scalea, Barrafranca EN
					</Typography>
					<CardActions>
						<Button size="small" data-href={'https://maps.app.goo.gl/4H4oZLzKsiLmd4KKA'} onClick={go}>Vai!</Button>
					</CardActions>
				</CardContent>
			</Card>
		</Grid>
	</>
}


export default PerChiVieneDaFuori;