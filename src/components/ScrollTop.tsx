"use client"

import {Box, Fab, Fade, useScrollTrigger} from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


export default function ScrollTop() {
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
	// @ts-ignore
		target: window,
		disableHysteresis: true,
		threshold: 100,
	});

	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		// @ts-ignore
			window.scrollTo({
				top: 0,
				behavior  :'smooth'
			});
	};

	return (

		<Fade in={trigger}>
			<Box
				onClick={handleClick}
				role="presentation"
				sx={{ position: 'fixed', bottom: 16, right: 16, zIndex:100 }}
			>
					<Fab color={"primary"} size="small" aria-label="scroll back to top">
						<KeyboardArrowUpIcon sx={{color:"#ffffff"}} />
					</Fab>
			</Box>
		</Fade>
	);
}