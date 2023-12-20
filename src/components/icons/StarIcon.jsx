import React from 'react'

const StarIcon = ({ className, fill, stroke }) => {
	return (
		<svg className={className} fill={fill} stroke={stroke} viewBox="0 0 116 110" xmlns="http://www.w3.org/2000/svg">
			<path d="M111.381 38.5857L77.1637 33.6129L61.8678 2.60332C61.45 1.75429 60.7627 1.06699 59.9137 0.649214C57.7844 -0.401958 55.1969 0.474018 54.1322 2.60332L38.8363 33.6129L4.61936 38.5857C3.676 38.7205 2.8135 39.1652 2.15315 39.8391C1.35482 40.6596 0.914905 41.7635 0.930067 42.9082C0.945229 44.053 1.41423 45.1448 2.23401 45.9439L26.9905 70.0805L21.1416 104.163C21.0045 104.956 21.0922 105.771 21.3949 106.516C21.6976 107.262 22.2031 107.908 22.8541 108.381C23.5051 108.853 24.2756 109.134 25.0781 109.192C25.8807 109.249 26.6832 109.08 27.3947 108.704L58 92.6133L88.6053 108.704C89.4408 109.149 90.4112 109.297 91.341 109.136C93.686 108.731 95.2627 106.508 94.8584 104.163L89.0096 70.0805L113.766 45.9439C114.44 45.2836 114.885 44.4211 115.019 43.4777C115.383 41.1193 113.739 38.9361 111.381 38.5857V38.5857Z" />
		</svg>

	)
}

export default StarIcon