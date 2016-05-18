import React, { Component } from 'react';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon,
} from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  VKShareButton,
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const VKIcon = generateShareIcon('vk');

export default class Social extends Component {
  render() {
    const shareUrl = 'https://dadjokebot.com';
    const title = 'Dadjokebot';

    return (
      <div className="social-icons-bar">
        <div className="social-media">
          <FacebookShareButton
            url={shareUrl}
            title={title}
            className="share-button">
            <FacebookIcon
              size={32}
              round />
          </FacebookShareButton>

          {/*<FacebookShareCount
            url={shareUrl}
            className="share-count">
            {count => count}
          </FacebookShareCount>*/}
        </div>

        <div className="social-media">
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="share-button">
            <TwitterIcon
              size={32}
              round />
          </TwitterShareButton>

          {/*<div className="share-count">
            &nbsp;
          </div>*/}
        </div>

        <div className="social-media">
          <GooglePlusShareButton
            url={shareUrl}
            className="share-button">
            <GooglePlusIcon
              size={32}
              round />
          </GooglePlusShareButton>

          {/*<GooglePlusShareCount
            url={shareUrl}
            className="share-count">
            {count => count}
          </GooglePlusShareCount>*/}
        </div>

        <div className="social-media">
          <LinkedinShareButton
            url={shareUrl}
            title={title}
            className="share-button">
            <LinkedinIcon
              size={32}
              round />
          </LinkedinShareButton>

          {/*<LinkedinShareCount
            url={shareUrl}
            className="share-count">
            {count => count}
          </LinkedinShareCount>*/}
        </div>

        <div className="social-media">
          <VKShareButton
            url={shareUrl}
            className="share-button">
            <VKIcon
              size={32}
              round />
          </VKShareButton>

          {/*<div className="share-count">
            &nbsp;
          </div>*/}
        </div>
      </div>
    );
  }
}