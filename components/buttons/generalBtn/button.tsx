import React, {HTMLProps, FC} from 'react';
import NextLink, {LinkProps} from 'next/link';
import style from './button.module.scss';

interface Props{
  className : string
}

const button: FC<LinkProps & HTMLProps<HTMLAnchorElement> & Props> = ({as, href, replace, scroll, shallow, passHref, children, className, ...rest}) => (
  <NextLink
    as={as}
    href={href}
    passHref={passHref}
    replace={replace}
    scroll={scroll}
    shallow={shallow}
    legacyBehavior
  >
    <a className={className} {...rest}>
      {children}
    </a>
  </NextLink>
)

export default button;