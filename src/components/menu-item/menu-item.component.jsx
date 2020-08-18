import React from 'react';
import { withRouter } from 'react-router-dom';

import {
    MenuItemContainer,
    Content,
    Title,
    Subtitle,
    BackgroundImage
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
        <Content>
            <Title>{title.toUpperCase()}</Title>
            <Subtitle>SHOP NOW</Subtitle>
        </Content>
    </MenuItemContainer >
)

export default withRouter(MenuItem);