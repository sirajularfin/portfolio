import React, { CSSProperties, PropsWithChildren } from 'react';
import { ScaledSize } from '../../theme/Size';

interface Props {
	backgroundColor?: string;

	height?: ScaledSize;
	width?: ScaledSize;

	padding?: ScaledSize;
	paddingBottom?: ScaledSize;
	paddingLeft?: ScaledSize;
	paddingRight?: ScaledSize;
	paddingTop?: ScaledSize;

	margin?: ScaledSize;
	marginBottom?: ScaledSize;
	marginLeft?: ScaledSize;
	marginRight?: ScaledSize;
	marginTop?: ScaledSize;

	flex?: boolean;
	alignX?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
	alignY?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
	alignSelf?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
	layout?: 'vertical' | 'horizontal' | 'wrap';
	horizontalGapBetweenObjects?: ScaledSize;
	verticalGapBetweenObjects?: ScaledSize;

	border?: string;
	borderColor?: string;
	borderRadius?: ScaledSize;
	borderWidth?: ScaledSize;
	boxShadow?: string;
}

const Container: React.FC<PropsWithChildren<Props>> = ({ children, ...props }) => {
	const style: CSSProperties = {
		// Background
		backgroundColor: props.backgroundColor,

		// Size
		height: props.height,
		width: props.width,

		// Padding
		padding: props.padding,
		paddingBottom: props.paddingBottom,
		paddingLeft: props.paddingLeft,
		paddingRight: props.paddingRight,
		paddingTop: props.paddingTop,

		// Margin
		margin: props.margin,
		marginBottom: props.marginBottom,
		marginLeft: props.marginLeft,
		marginRight: props.marginRight,
		marginTop: props.marginTop,

		// Flexbox
		display: props.flex ? 'flex' : 'block',
		flexDirection: props.layout === 'horizontal' ? 'column' : props.layout === 'vertical' ? 'row' : undefined,
		flexWrap: props.layout === 'wrap' ? 'wrap' : 'nowrap',
		alignItems: props.layout !== 'vertical' ? props.alignY : props.alignX,
		alignSelf: props.alignSelf,
		justifyContent: props.layout !== 'horizontal' ? props.alignX : props.alignY,
		rowGap: props.verticalGapBetweenObjects,
		columnGap: props.horizontalGapBetweenObjects,

		// Border
		border: props.border,
		borderColor: props.borderColor,
		borderRadius: props.borderRadius,
		borderWidth: props.borderWidth,
		boxShadow: props.boxShadow,
	};

	return <div style={style}>{children}</div>;
};

export default Container;
