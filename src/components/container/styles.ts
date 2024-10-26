import { CSSProperties } from 'react';
import { IProps } from '.';

const styles = (styles: IProps): CSSProperties => ({
    // Background
    backgroundColor: styles.backgroundColor,

    // Size
    height: styles.height,
    width: styles.width,

    // Padding
    padding: styles.padding,
    paddingBottom: styles.paddingBottom,
    paddingLeft: styles.paddingLeft,
    paddingRight: styles.paddingRight,
    paddingTop: styles.paddingTop,

    // Margin
    margin: styles.margin,
    marginBottom: styles.marginBottom,
    marginLeft: styles.marginLeft,
    marginRight: styles.marginRight,
    marginTop: styles.marginTop,

    // Flexbox
    display: styles.flex ? 'flex' : 'block',
    flexDirection: styles.layout === 'horizontal' ? 'column' : styles.layout === 'vertical' ? 'row' : undefined,
    flexWrap: styles.layout === 'wrap' ? 'wrap' : 'nowrap',
    alignItems: styles.layout !== 'vertical' ? styles.alignY : styles.alignX,
    alignSelf: styles.alignSelf,
    justifyContent: styles.layout !== 'horizontal' ? styles.alignX : styles.alignY,
    rowGap: styles.verticalGapBetweenObjects,
    columnGap: styles.horizontalGapBetweenObjects,

    // Border
    borderWidth: styles.borderWidth,
    borderColor: styles.borderColor,
    borderRadius: styles.borderRadius,
    boxShadow: styles.boxShadow,
});

export default styles;