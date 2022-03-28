'use strict';

const {officeScraper, description} = require('../lib/scraper');
let offices = []

let officesURL = ['https://www.iit.edu/directory?title=&organization_type=All&title_1=&page=0', 'https://www.iit.edu/directory?title=&organization_type=All&title_1=&page=1','https://www.iit.edu/directory?title=&organization_type=All&title_1=&page=2', 'https://www.iit.edu/directory?title=&organization_type=All&title_1=&page=3','https://www.iit.edu/directory?title=&organization_type=All&title_1=&page=4', 'https://www.iit.edu/directory?title=&organization_type=All&title_1=&page=5',
   'https://www.iit.edu/directory?title=&organization_type=All&title_1=&page=6', 'https://www.iit.edu/directory?title=&organization_type=All&title_1=&page=7',
   'https://www.iit.edu/directory?title=&organization_type=All&title_1=&page=8', 'https://www.iit.edu/directory?title=&organization_type=All&title_1=&page=9',
   'https://www.iit.edu/directory?title=&organization_type=All&title_1=&page=10', 'https://www.iit.edu/directory?title=&organization_type=All&title_1=&page=11',
   'https://www.iit.edu/directory?title=&organization_type=All&title_1=&page=12'];

let descriptionURL = ['https://afrotc.iit.edu/','https://www.iit.edu/rotc',
   'https://www.iit.edu/leadership-studies', 'https://www.iit.edu/crs',
   'http://ethics.iit.edu/', 'https://www.iit.edu/computing',
   'https://www.iit.edu/els', 'https://www.iit.edu/fdsn',
   'https://web.iit.edu/gaa', 'https://web.iit.edu/human-resources',
   'https://www.iit.edu/science-letters', 'https://www5.iit.edu/nrotc/',
   'https://www.iit.edu/community-affairs', 'https://www.iit.edu/marketing-communications',
   'https://research.iit.edu/orcpd','https://research.iit.edu/osrp',
   'https://web.iit.edu/general-counsel', 'https://www.iit.edu/president',
   'https://www.iit.edu/provost','https://www.iit.edu/registrar',
   'https://www.iit.edu/title-ix', 'https://web.iit.edu/procurement-services',
   'https://www.iit.edu/ras', 'https://web.iit.edu/student-employment/welcome',
   'https://www.iit.edu/shwc', 'https://web.iit.edu/ugaa', 'https://web.iit.edu/wiser']

officeScraper(officesURL);
console.log('\n\n')
description(descriptionURL);