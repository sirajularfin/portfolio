import React, { PropsWithChildren } from 'react';
import styles from './styles';
import { ScaledSize } from '../../theme/sizes';

export interface IProps {
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

	// Enable debug mode to see the container's boundaries
	debug?: boolean;
}

const Container: React.FC<PropsWithChildren<IProps>> = ({ children, debug, ...props }) => {
	const classes = styles(props);
	const enableDebug = debug ? { outline: '1px solid black' } : {};
	return <div style={{...classes, ...enableDebug}}>{children}</div>;
};

export default Container;
