'use client'
import React from 'react';
import {Button, Card, CardActions, CardContent, Grid, Typography} from "@mui/material";
import Banner from "@/components/Banner";
import data from '@/data/data.json'
import Image from 'next/image'
import styles from "@/components/style/perchivienedafuori.module.css"

type PerChiVieneDaFuoriProps = {}


const PerChiVieneDaFuori = (props: PerChiVieneDaFuoriProps) => {


	return (
		<>
			<Banner title={"Per chi viene da fuori"} id={data.perChiVieneDaFuori.id}>

				<Typography fontSize={20} lineHeight={1.1}>Saremo lieti di ospitarvi la notte delle nozze e
					quella precedentei presso uno dei seguenti Hotel/B&B.<br/>Nelle prossime settimane vi aggiorneremo riguardo la disposizione che abbiamo scelto
					per voi previa conferma della vostra presenza.</Typography>
				<Grid container spacing={3} columnSpacing={{ xs: 1, sm: 2, md: 2 }} justifyContent={"center"} marginTop={2} marginBottom={2} >
					<Content/>
				</Grid>

			</Banner>
		</>

	)
}

const Content = () => {
	const go = (link: string) => {
		window.open(link, '_blank')
	}

	return <>
		{data.perChiVieneDaFuori.location.map((data,index)=>{
			return <Grid item key={index}>
				<Card elevation={3}>
					<CardContent className={styles.card}>
						<Typography fontSize={20} fontWeight={700}>
							<Image src={data.image} width={400} height={300} style={{objectFit:"cover"}} alt={'hotel_marconi'}/>

						</Typography>
						<CardActions>
							<Button size="small" variant="contained"
							        onClick={()=>go(data.map)}><span dangerouslySetInnerHTML={{__html: data.text}}/></Button>
						</CardActions>
					</CardContent>
				</Card>
			</Grid>
			})
		}
	</>
}


export default PerChiVieneDaFuori;