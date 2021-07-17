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
    link: 'https://engineering.salesforce.com'
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
  {
    name: 'Teradata',
    link: 'https://www.teradata.com/Blogs'
  },
  {
    name: 'ACI worldwide',
    link: 'https://www.aciworldwide.com/blog'
  },
  {
    name: 'Smartsheet',
    link: 'https://www.smartsheet.com/content-center'
  },
  {
    name: 'Zuora',
    link: 'https://community.zuora.com/t5/Engineering-Blog/bg-p/engineering-blog'
  },
  {
    name: 'Outsystems',
    link: 'https://medium.com/outsystems-engineering'
  },
  {
    name: 'Coupa',
    link: 'https://www.coupa.com/blog/technology-innovation'
  },
  {
    name: 'Cyclane',
    link: 'https://blog.fivenines.com/'
  },
  {
    name: 'Elastic Search',
    link: 'https://www.elastic.co/blog/category/engineering'
  },
  {
    name: 'Zoom',
    link: 'https://medium.com/zoom-developer-blog'
  },
  {
    name: 'DeepMind',
    link: 'https://deepmind.com/blog'
  },
  {
    name: 'SailPoint',
    link: 'https://medium.com/sailpointtechblog'
  },
  {
    name: 'JustWorks',
    link: 'https://justworks.com/blog/categories/engineering'
  },
  {
    name: 'Collibra',
    link: 'https://www.collibra.com/blog'
  },
  {
    name: 'Salesloft',
    link: 'https://medium.com/salesloft-engineering/tagged/engineering'
  },
  {
    name: 'Talkdesk',
    link: 'https://engineering.talkdesk.com'
  },
  {
    name: 'Zoominfo',
    link: 'https://engineering.zoominfo.com/'
  },
  {
    name: 'Pipedrive',
    link: 'https://medium.com/pipedrive-engineering'
  },
  {
    name: 'FullContact',
    link: 'https://www.fullcontact.com/blog/engineering/'
  },
  {
    name: 'Datorama',
    link: 'https://engineering.datorama.com/'
  },
  {
    name: 'Egnyte',
    link: 'https://www.egnyte.com/blog/tag/engineering/'
  },
  {
    name: 'SmartBear',
    link: 'https://smartbear.com/blog/'
  },
  {
    name: 'Couchbase',
    link: 'https://blog.couchbase.com/'
  },
  {
    name: 'Asana',
    link: 'https://blog.asana.com/category/eng'
  },
  {
    name: 'Mendix',
    link: 'https://developers.mendix.com/community-blog/'
  },
  {
    name: 'Fastly',
    link: 'https://www.fastly.com/blog/engineering'
  },
  {
    name: 'Databricks',
    link: 'https://databricks.com/blog/category/engineering'
  },
  {
    name: 'Zaloni',
    link: 'https://www.zaloni.com/blogs-news/'
  },
  {
    name: 'PagerDuty',
    link: 'https://www.pagerduty.com/eng/'
  },
  {
    name: 'SocialBakers',
    link: 'https://medium.com/socialbakers-engineering'
  },
  {
    name: 'Nintex',
    link: 'https://www.nintex.com/blog/'
  },
  {
    name: 'SimilarWeb',
    link: 'https://similarweb.engineering/'
  },
  {
    name: 'Looker',
    link: 'https://medium.com/looker-engineering'
  },
  {
    name: 'Centrify',
    link: 'https://www.centrify.com/blog/'
  },
  {
    name: 'Namely',
    link: 'https://medium.com/namely-labs'
  },
  {
    name: 'GFI Software',
    link: 'https://techtalk.gfi.com'
  },
  {
    name: 'DataStax',
    link: 'https://datastax.medium.com/'
  },
  {
    name: 'Gusto',
    link: 'https://engineering.gusto.com/'
  },
  {
    name: 'Walkme',
    link: 'https://medium.com/walkme-engineering'
  },
  {
    name: 'Datadog',
    link: 'https://www.datadoghq.com/blog/engineering/'
  },
  {
    name: 'InVision',
    link: 'https://engineering.invisionapp.com/'
  },
  {
    name: 'Intercom',
    link: 'https://www.intercom.com/blog/engineering/'
  },
  {
    name: 'Exponent',
    link: 'https://blog.tryexponent.com'
  },
  {
    name: 'Nextroll',
    link: 'https://tech.nextroll.com/blog'
  },
  {
    name: '8thlight',
    link: 'https://8thlight.com/blog'
  },
  {
    name: 'Doordash',
    link: 'https://doordash.engineering'
  },
  {
    name: '500px',
    link: 'https://developers.500px.com'
  },
  {
    name: '99designs',
    link: 'https://99designs.com/blog/engineering/'
  },
  {
    name: 'Addepar',
    link: 'https://medium.com/build-addepar'
  },
  {
    name: 'Affinity',
    link: 'https://build.affinity.co'
  },
  {
    name: 'AWS',
    link: 'https://aws.amazon.com/blogs/aws/'
  },
  {
    name: 'Upgrad',
    link: 'https://engineering.upgrad.com'
  },
  {
    name: 'Universe',
    link: 'https://engineering.universe.com'
  },
  {
    name: 'Vertabelo',
    link: 'https://www.vertabelo.com/blog'
  },
  {
    name: 'Swift',
    link: 'https://developer.apple.com/swift/blog/'
  },
  {
    name: 'Rust',
    link: 'https://blog.rust-lang.org'
  },
  {
    name: 'RocksDB',
    link: 'https://rocksdb.org/blog/'
  },
  {
    name: 'React Native',
    link: 'https://reactnative.dev/blog/'
  },
  {
    name: '.NET',
    link: 'https://devblogs.microsoft.com/dotnet/'
  },
  {
    name: 'React',
    link: 'https://reactjs.org/blog'
  },
  {
    name: 'Laravel',
    link: 'https://laravel-news.com/blog/'
  },
  {
    name: 'Chrome',
    link: 'https://developer.chrome.com/blog/'
  },
  {
    name: 'Chromium',
    link: 'https://blog.chromium.org'
  },
  {
    name: 'Android',
    link: 'https://developer.android.com/'
  },
  {
    name: 'Google',
    link: 'https://developers.googleblog.com/'
  },
  {
    name: 'Kotlin',
    link: 'https://blog.jetbrains.com/kotlin/'
  },
  {
    name: 'Tumblr',
    link: 'https://engineering.tumblr.com'
  },
  {
    name: 'Twitch',
    link: 'https://blog.twitch.tv/tagged/engineering'
  },
  {
    name: 'TrueCar',
    link: 'https://www.drivenbycode.com/'
  },
  {
    name: 'Trivago',
    link: 'https://tech.trivago.com/'
  },
  {
    name: 'Wise',
    link: 'https://medium.com/transferwise-engineering'
  },
  {
    name: 'Trello',
    link: 'https://tech.trello.com'
  },
  {
    name: 'Trackmaven',
    link: 'http://engineroom.trackmaven.com/'
  },
  {
    name: 'Tinder',
    link: 'https://tech.gotinder.com'
  },
  {
    name: 'Timescale',
    link: 'https://blog.timescale.com/'
  },
  {
    name: 'Netlify',
    link: 'https://www.netlify.com/tags/engineering/'
  },
  {
    name: 'Algolia',
    link: 'https://www.algolia.com/blog/engineering'
  },
  {
    name: 'Redis',
    link: 'https://redislabs.com/blog/tech-blog'
  },
  {
    name: 'Apache',
    link: 'https://blogs.apache.org/foundation/'
  },
  {
    name: 'Nginx',
    link: 'https://www.nginx.com/blog/'
  },
  {
    name: 'Nintendo',
    link: 'https://developer.nintendo.com/'
  },
  {
    name: 'ELECTRONIC ARTS',
    link: 'https://www.ea.com/technology'
  },
  {
    name: 'Activision',
    link: 'https://research.activision.com/'
  },
  {
    name: 'Ubisoft',
    link: 'https://montreal.ubisoft.com/en/tech-blog/'
  },
  {
    name: 'Unreal Engine',
    link: 'https://www.unrealengine.com/en-US/feed/tech-blog'
  },
  {
    name: 'Unity',
    link: 'https://blog.unity.com/technology'
  },
];

export default links;
