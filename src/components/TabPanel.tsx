import styles from "@/components/style/doveecome.module.css";
import React from "react";

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

export type TPanel = {
	value: number;
	index: number;
	direction: number;
}

export default function TabPanel(props: TabPanelProps) {
	const {children, value, index, ...other} = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			className={styles.panel_wrapper}
			{...other}
		>
			{value === index && (
				<>{children}</>
			)}
		</div>
	);
}