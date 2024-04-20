import React from 'react';
import data from '@/data/data.json'
import Banner from "@/components/Banner";
import Link from "@mui/material/Link";
import styles from "@/components/style/gallery.module.css"
import CameraIcon from '@mui/icons-material/Camera';

type GalleryProps = {}


const Gallery = (props: GalleryProps) => {

	return (
		<Banner title={data.gallery.title} id={data.gallery.id} background={data.gallery.background}>
			<div className={styles.wrapper}>
				<p className={styles.description}>{data.gallery.description}</p>
				<Link href={data.gallery.link} className={styles.link} target={"_blank"}><CameraIcon/> Album</Link>
			</div>
		</Banner>
	)
}


export default Gallery;