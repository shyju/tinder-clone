import React from 'react'
import './SwipeButtons.css';

import { IconButton } from '@material-ui/core';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__repeat">
                <ReplayIcon fontSize="large"></ReplayIcon>
            </IconButton>
            <IconButton className="swipeButtons__left">
                <CloseIcon fontSize="large"></CloseIcon>
            </IconButton>
            <IconButton className="swipeButtons__star">
                <StarRateIcon fontSize="large"></StarRateIcon>
            </IconButton>
            <IconButton className="swipeButtons__right">
                <FavoriteIcon fontSize="large"></FavoriteIcon>
            </IconButton>
            <IconButton className="swipeButtons__lightning">
                <FlashOnIcon fontSize="large"></FlashOnIcon>
            </IconButton>
        </div>
    )
}

export default SwipeButtons
