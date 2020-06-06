import Config from '../Config';

export const GA_TRACKING_ID = Config.GA_TRACKING_ID;

// console.log('GA_TRACKING_ID', GA_TRACKING_ID);

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  if (GA_TRACKING_ID === '') {
    console.log('utils/GA#pageview pageview url', url);
    return;
  }
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  if (GA_TRACKING_ID === '') {
    console.log('utils/GA#event tracking event triggered');
    return;
  }
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
