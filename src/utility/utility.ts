function cls(classes: Array<string>): string{
	return classes.join(' ')
}

function a11yProps(index: number) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

export {
	cls,
	a11yProps
}