import React, {useState} from 'react';
import {motion, PanInfo} from 'framer-motion';

type CaptureGestureProps = {
	onLeft: ()=>void,
	onRight: ()=>void,
	children: React.ReactNode
}

const CaptureGesture = (props: CaptureGestureProps) => {
	const [touchStartX, setTouchStartX] = useState<{x: number, y: number}>({x: 0, y:0})

	const reset = ()=> setTouchStartX({x: 0, y:0})

	const onPanStart = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo)=>{
		setTouchStartX(info.point)
	}

	const onPanEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
		if(Math.abs(info.point.y - touchStartX.y) > 50) return reset()

		const amount = info.point.x - touchStartX.x
		const direction = Math.sign(amount)

		console.log('direction',direction === -1? 'to left': 'to right');
		console.log('touchStartX',touchStartX)
		console.log('touchEndX',info.point.x)
		console.log('amount',amount)

		if(Math.abs(amount) <= 50) return

		// pan to right (go left tab)
		if(direction === 1){
			props.onLeft()
		}
		// pan to left (go right tab)
		else{
			props.onRight()
		}

		reset()
	}

	return (
		<motion.div onPanStart={onPanStart} onPanEnd={onPanEnd} id={'capture'}>
			{props.children}
		</motion.div>
	);
};

export default CaptureGesture;