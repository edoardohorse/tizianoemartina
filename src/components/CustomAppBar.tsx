"use client"

import React, {useEffect, useRef, useState} from 'react';
import Toolbar from "@mui/material/Toolbar";
import {AppBar, Box, Button, IconButton, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import data from "@/data/data.json";
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import {useInView, useMotionValueEvent, useScroll} from "framer-motion";
import clsx from "clsx";


type AppBarProps = {}

const navItems = [data.doveecome, data.perChiVieneDaFuori, data.neiDintorni]
const drawerWidth = 240;


const CustomAppBar = (props: AppBarProps) => {
	const [heroInView, setHeroInView] = useState(true)
	const { scrollY } = useScroll()

	useMotionValueEvent(scrollY, "change", (latest) => {
		if(latest > 0){
			setHeroInView(false)
		}
		else{
			setHeroInView(true)
		}

	})
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const goTo = (id: string) => {
		// @ts-ignore
		const y = document?.getElementById(id)?.getBoundingClientRect()?.top + window?.pageYOffset - 80
		//@ts-ignore
		window.scrollTo({behavior: 'smooth', top: y})
	}

	//@ts-ignore
	const container = document?.body;

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<List>
				{navItems.map((item) => (
					<ListItem key={item.id} disablePadding>
						<ListItemButton sx={{ textAlign: 'center' }} onClick={()=>goTo(item.id)}>
							<ListItemText primary={item.title} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<>
			<AppBar position="fixed" className={clsx(heroInView &&'appbar--transparent')}>
				<Toolbar id="back-to-top-anchor" sx={{justifyContent: 'right'}}>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{mr: 2, display: {sm: 'none'}}}
					>
						<MenuIcon/>
					</IconButton>
					<Box sx={{display: {xs: 'none', sm: 'block'}}}>
						{navItems.map((item) => (
							<Button key={item.id} sx={{color: '#fff'}} onClick={() => goTo(item.id)}>
								{item.title}
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>

			<nav>
				<Drawer
					anchor={'right'}
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: {xs: 'block', sm: 'none'},
						'& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
					}}
				>
					{drawer}
				</Drawer>
			</nav>
		</>
	)
}


export default CustomAppBar;