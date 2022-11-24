// https://create-react-app.dev/docs/measuring-performance/

// https://github.com/GoogleChrome/web-vitals#send-the-results-to-google-analytics

// https://www.typescriptlang.org/docs/handbook/2/classes.html

import {onLCP, onFID, onCLS} from 'web-vitals';

export public class ReportWebVitals{

    public constructor() {
        onCLS(console.log);
        onFID(console.log);
        onLCP(console.log);
    }


    public reportWebVitals() {
    return reportWebVitals(sendToAnalytics);
}

public reportWebVitals(f:Function) {
    return f;
    }
    
    export public sendToAnalytics(metric) {
  const body = JSON.stringify(metric);
  const url = 'https://example.com/analytics';

  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body);
  } else {
    fetch(url, { body, method: 'POST', keepalive: true });
  }
}

// ReportWebVitals reportWebvitals = new ReportWebVitals();

// reportwebVitals.reportWebVitals(sendToAnalytics);

// https://stackoverflow.com/questions/49068350/error-ts2304-cannot-find-name-ga
// declare let ga: Function;
declare let ga: (string,string, string) => void; 

export sendToAnalytics({ id, name, value }) {
  ga("send", "event", {
    eventCategory: "Web Vitals",
    eventAction: name,
    eventValue: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    eventLabel: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate
  });
}

// reportwebVitals.reportWebVitals(sendToAnalytics);

} // end class


