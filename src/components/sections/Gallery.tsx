import React from 'react';
import data from '@/data/data.json'
import Banner from "@/components/Banner";
import styles from "@/components/style/gallery.module.css"

type GalleryProps = {}


const Gallery = (props: GalleryProps) => {

	return (
		<Banner title={data.gallery.title} id={data.gallery.id} background={data.gallery.background}
		        classtitle={styles.title}>
			<div className={styles.wrapper}>
				<p className={styles.description} dangerouslySetInnerHTML={{__html: data.gallery.description}}/>
				{/*<Link href={data.gallery.link} className={styles.link} target={"_blank"}><CameraIcon/> Album</Link>*/}
				<div className={styles.appBtns_wrapper}>

					<a className={styles.appBtns}
					   href='https://play.google.com/store/apps/details?id=net.bodas.android.wedshoots&pcampaignid=web_share&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
						<img width={150} height={58}
							alt='Disponibile su Google Play'
							src='https://play.google.com/intl/en_us/badges/static/images/badges/it_badge_web_generic.png'/></a>
					<a href="https://apps.apple.com/it/app/wedshoots/id660256196?itsct=apps_box_badge&amp;itscg=30200"
					   className={styles.appBtns}
					   style={{
						   display: "inline-block",
						   overflow: "hidden",
						   borderRadius: "13px"
					   }}><img width={150} height={58}
					           src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/it-it?size=250x83&amp;releaseDate=1373846400"
					           alt="Download on the App Store" style={{borderRadius: "13px"}}/></a>
				</div>
			</div>
		</Banner>
	)
}


export default Gallery;