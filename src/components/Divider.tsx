import React from 'react';
import clsx from "clsx";
import styles from "@/components/style/divider.module.css"

type dividerProps = {
	type: "odd"|"even",
	marginTop?: number,
	marginBottom?: number,
}


const Divider = (props: dividerProps)=>{

	return (
		/*<section className={styles.container}>
			<div className={styles.wave}/>
		</section>*/
		<div className={clsx(styles.divider, styles[props.type])}
		 style={
		 {marginTop:`${props.marginTop ?? 0}px`,marginBottom:`${props.marginBottom ?? 0}px`
		 }}/>
	)
}


export default Divider;