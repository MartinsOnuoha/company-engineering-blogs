const links = [
  {
    name: 'Netflix',
    link: 'https://netflixtechblog.com'
  },
  {
    name: 'Facebook',
    link: 'https://engineering.fb.com'
  },
  {
    name: 'Twitter',
    link: 'https://blog.twitter.com/engineering'
  },
  {
    name: 'Cloudera',
    link: 'https://blog.cloudera.com/category/technical'
  },
  {
    name: 'LinkedIn',
    link: 'https://engineering.linkedin.com/blog'
  },
  {
    name: 'MalwareBytes',
    link: 'https://blog.malwarebytes.com'
  },
  {
    name: 'Reddit',
    link: 'https://redditblog.com/topic/technology'
  },
  {
    name: 'Google AI',
    link: 'https://ai.googleblog.com'
  },
  {
    name: 'LineCorp',
    link: 'https://engineering.linecorp.com/en/blog'
  },
  {
    name: 'Uber',
    link: 'https://eng.uber.com'
  },
  {
    name: 'Medium',
    link: 'https://medium.engineering'
  },
  {
    name: 'Instagram',
    link: 'https://instagram-engineering.com'
  },
  {
    name: 'Airbnb',
    link: 'https://medium.com/airbnb-engineering'
  },
  {
    name: 'Amazon',
    link: 'https://developer.amazon.com/blogs'
  },
  {
    name: 'ASOS',
    link: 'https://medium.com/asos-techblog'
  },
  {
    name: 'Baidu Research',
    link: 'https://research.baidu.com/Blog'
  },
  {
    name: 'Black Rock Engineering',
    link: 'https://medium.com/blackrock-engineering'
  },
  {
    name: 'BBC',
    link: 'https://medium.com/bbc-design-engineering'
  },
  {
    name: 'Booking.com',
    link: 'https://blog.booking.com'
  },
  {
    name: 'Cookpad',
    link: 'https://sourcediving.com'
  },
  {
    name: 'Coursera',
    link: 'https://blog.coursera.org'
  },
  {
    name: 'Dataiku',
    link: 'https://blog.dataiku.com'
  },
  {
    name: 'Dropbox',
    link: 'https://dropbox.tech'
  },
  {
    name: 'eBay',
    link: 'https://tech.ebayinc.com'
  },
  {
    name: 'Etsy',
    link: 'https://codeascraft.com'
  },
  {
    name: 'Eventbrite',
    link: 'https://www.eventbrite.com/engineering'
  },
  {
    name: 'Evernote',
    link: 'https://evernote.com/blog'
  },
  {
    name: 'FastMail',
    link: 'https://fastmail.blog/tag/open-technologies'
  },
  {
    name: 'Import.io',
    link: 'https://www.import.io/blog'
  },
  {
    name: 'Kaggle',
    link: 'https://medium.com/kaggle-blog'
  },
  {
    name: 'Mixpanel',
    link: 'https://mixpanel.com/blog'
  },
  {
    name: 'Pinterest',
    link: 'https://medium.com/@Pinterest_Engineering'
  },
  {
    name: 'Quora',
    link: 'https://quoraengineering.quora.com'
  },
  {
    name: 'RiotGames',
    link: 'https://technology.riotgames.com'
  },
  {
    name: 'Salesforce',
    link: 'https://developer.salesforce.com/blogs/engineering'
  },
  {
    name: 'Shopify',
    link: 'https://engineering.shopify.com'
  },
  {
    name: 'Strava',
    link: 'https://medium.com/strava-engineering'
  },
  {
    name: 'Yelp',
    link: 'https://engineeringblog.yelp.com'
  },
  {
    name: 'Digital Ocean',
    link: 'https://www.digitalocean.com/blog/tag/engineering/'
  },
  {
    name: 'Toptal',
    link: 'https://www.toptal.com/developers/blog'
  },
  {
    name: 'Workday',
    link: 'https://blog.workday.com/en-us/technology-innovation.html'
  },
  {
    name: 'Zoho',
    link: 'https://blog.zoho.com/'
  },
  {
    name: 'Tableau',
    link: 'https://engineering.tableau.com/'
  },
  {
    name: 'Splunk',
    link: 'https://www.splunk.com/en_us/blog/it.html'
  },
  {
    name: 'Cvent',
    link: 'https://www.cvent.com/en/blog/topic/technology'
  },
  {
    name: 'Veeam',
    link: 'https://www.veeam.com/blog/?filter-tag=best-practices'
  },
  {
    name: 'Docusign',
    link: 'https://www.docusign.com/blog/developers'
  },
  {
    name: 'Veeva',
    link: 'https://www.veeva.com/veeva-blog'
  },
  {
    name: 'Proofpoint',
    link: 'https://www.proofpoint.com/us/blog'
  },
  {
    name: 'Qualtrics',
    link: 'https://www.qualtrics.com/eng/'
  },
  {
    name: 'New Relic',
    link: 'https://newrelic.com/blog'
  },
  {
    name: 'Okta',
    link: 'https://developer.okta.com/blog/'
  },
  {
    name: 'Mulesoft',
    link: 'https://blogs.mulesoft.com/tag/engineering/'
  },
  {
    name: 'Microsoft',
    link: 'https://devblogs.microsoft.com/'
  },
  {
    name: 'Slack',
    link: 'https://slack.engineering'
  },
  {
    name: 'Twilio',
    link: 'https://www.twilio.com/blog'
  },
  {
    name: 'Anaplan',
    link: 'https://www.anaplan.com/blog'
  },
  {
    name: 'Stripe',
    link: 'https://stripe.com/blog/engineering'
  },
  {
    name: 'Adobe',
    link: 'https://medium.com/adobetech'
  },
  {
    name: 'SAP',
    link: 'https://blogs.sap.com/?category%5B%5D=76118&action=apply'
  },
  {
    name: 'ADP',
    link: 'https://tech.adp.com/blog/'
  },
  {
    name: 'SS&C',
    link: 'https://www.ssctech.com/blog'
  },
  {
    name: 'NetApp',
    link: 'https://blog.netapp.com/'
  },
  {
    name: 'Amdocs',
    link: 'https://www.amdocs.com/blog?field_category_target_id=2431&field_authors_target_id=All&field_blog_type_target_id=All'
  },
  {
    name: 'Dassault Systemes',
    link: 'https://blogs.3ds.com/uk/'
  },
  {
    name: 'AutoDesk',
    link: 'https://www.autodesk.com/blogs'
  },
  {
    name: 'Citrix Systems',
    link: 'https://www.citrix.com/blogs/'
  },
  {
    name: 'Akamai',
    link: 'https://blogs.akamai.com/'
  },
  {
    name: 'NortonLifeLock',
    link: 'https://www.nortonlifelock.com/blogs/gaming'
  },
  {
    name: 'EPAM Systems',
    link: 'https://anywhere.epam.com/blog'
  },
  {
    name: 'McAfee',
    link: 'https://www.mcafee.com/blogs/'
  },
];

export default links;
