import React, { PropsWithChildren } from 'react';
import { ScaledSize } from '../../theme/Size';
import styles from './styles';

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
}

const Container: React.FC<PropsWithChildren<IProps>> = ({ children, ...props }) => {
	const classes = styles(props);
	return <div style={classes}>{children}</div>;
};

export default Container;
