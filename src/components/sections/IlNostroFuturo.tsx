'use client'
import React from 'react';
import Banner from "@/components/Banner";
import data from '@/data/data.json'
import styles from "@/components/style/ilnostrofuturo.module.css"


const X_OFFSET = 20
type IbanProps = {}


const IlNostroFuturo = (props: IbanProps) => {


	return (
		<>
			<Banner title={data.iban.title}
			        amoutInView={0.2}
			        classNameInView={styles.inview}
			        background={data.iban.image}
			        id={data.iban.id} classtitle={styles.title}>

				<p className={styles.description} dangerouslySetInnerHTML={{__html:data.iban.description}}></p>
				<p className={styles.iban}>{data.iban.iban}</p>

			</Banner>
		</>

	)
}


export default IlNostroFuturo;