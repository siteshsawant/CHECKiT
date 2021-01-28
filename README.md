# CHECKiT
Chrome Extension (To Detect Mobile Malicious Web Pages)
## Authors

* **[Sitesh Sawant]**
* **[Shivani Nevgi]**

# Reaserch Paper

DETECTING MOBILE MALICIOUS PAGES IN REAL TIME
1 Bandagale Priyanka S., 2 Nevgi Shivani A.,
3 Sawant Sitesh M., 4 Sharma Pratiksha A.
1Assistant Professor, Dept. of Information Technology, Finolex Academy of Management and Technology,
Ratnagiri, India
234Student, Dept. of Information Technology, Finolex Academy of Management and Technology, Ratnagiri,
India
Email: 1priyanka.bandagale@famt.ac.in, 2
shivaninevgi@gmail.com,
3
sawantsitesh21.ss@gmail.com, 4
sharmapratiksha446@gmail.com
Abstract: The Mobile webpages are different from desktop webpages. The attacker can easily deploy
different types of malwares on mobile devices, by using a feature like drive-by-download. To detect this
type of webpages we are purposing intelligent and feasible solutions based on classification and
association data mining algorithm. This algorithm is used to classify malicious pages and alert users.
The classification is done based on the URL of the webpage and the content of the webpage like the
number of iframes. By using classification & association technique the accuracy of the system is
increased. We also create a browser extension to detect a malicious webpage in real-time.
Index terms: Malicious; URL; Detection System, iframes, webpage
I. INTRODUCTION
Malicious means having mal (having bad intension) intention to harm or to steal any information.
Malicious website is a site that attempts to install malware on your Mobile devices. Malware is a
software that will disturb your computer, steal your personal information or in the worst scenario you
will gain total control of your system. Now a day number of malicious websites are used to host exploit
kits. Exploit kits force the visitor's browser to identify security vulnerabilities that can be exploited
without user interaction. Malicious URL's are created with malicious purpose which can be content in
the spam or phishing messages, or even improve its ranking in search engines like Google, yahoo by
using black-hat SEO techniques.
With the increasing population, the number of mobile devices used by peoples is also increasing. As the
shape and size of mobile devices reduced, the shape and size of webpages are also reduced. Along with
this, the number of attacks through mobile webpages is also increased. This is due to the compactness
of mobile webpages and features like easy access to the user's contact and location. The attackers are
taking advantage of this feature by installing malware, spyware, and mad-ware and gray ware on user
devices through webpages.
The desktop malicious webpages can be detected easily as compare to mobile malicious pages. As it is 
difficult to detect them in mobile devices so they can be dangerous for user's devices. The existing
systems and techniques also not accurately detect this type of malicious webpages due to the attackers
are using newer techniques to create this type of mobile malicious webpages. The majority of the system
based on desktop webpages and also detects and block malicious pages manually.
In this paper, we purpose a system named as Detecting mobile malicious pages in real-time. This system
uses a hybrid analysis to detect mobile malicious pages more accurately. This system first target the
URL of webpages performs all the security checks achieved by static analysis. For this we collect 10000
malicious URL's from well-known services like Google safe browsing and phishtank.com, then we
apply data mining techniques to develop the system. Also, the system has some dynamic parts like no
of iframes, etc. When users access any webpage, the system fetches that webpage URL and detects
malicious webpages dynamically if they malicious then the system gives alert messages in real-time to
the user.
Figure 1: Mobile Malicious Page Detection System
This section describes the proposed systems of Mobile Malicious Webpage Detection in real-time. This
model focuses on classifying malicious webpages based on checking features of webpages, Blacklist.
Selected features of a website or webpage can be used to classify a genuine and malicious webpage.
These selected features include URLs, Domain Identity, page style, Number of iframes, etc. This system
focuses on only URL and No of iframes. Features of URL are checked by different criteria like
Keywords present in URL, adding a prefix or suffix, redirecting using symbol "//", Special symbols
present in URL, etc. These features are checked using a set of rules to classify the Malicious Webpages
and alert the user in real-time.
 II. PROPOSED SYSTEM
The proposed system focuses on identifying the features that differentiate phishing websites from
legitimate websites. To identify these features, we analyze the dataset of legitimate as well as malicious
websites. Based on the analysis fourteen features were defined by performing association rule mining
to effectively determine the legitimate and malicious URL.

1. URL-BASED CLASSIFICATION
In URL-Based Classification features differentiating Malicious and Legitimate URLs are focused by
performing association mining on the input data set (1200 malicious URLs and 200 legitimate URLs).
We found four major features as a result which are as follows,
Feature 1: Length of the host URL
Research- Using input data set (1200 malicious URLs and 200 legitimate URLs), hostname length is
analyzed for malicious and legitimate URLs. The average length of the hostname in a malicious URL is
found greater than 25 characters. The average length of the hostname in the legitimate URL is found to
be 20 characters
Working-URL mainly consists of three elements such as network protocol, hostname, and path. In this,
we fetched the URL and extracted the hostname and hostname length is examined.
Fig 2.1.1 Length of Host of Malicious URL
Fig 2.1.2 Length of Host of Legitimate URL
Rule- 𝑹𝟏 = {𝒊𝒇 𝒍𝒆𝒏𝒈𝒕𝒉(𝒉𝒐𝒔𝒕) > 𝟐𝟎 → 𝑴𝒂𝒍𝒊𝒄𝒊𝒐𝒖𝒔 𝑼𝑹𝑳 , 𝒆𝒍𝒔𝒆 𝑳𝒆𝒈𝒊𝒕𝒊𝒎𝒂𝒕𝒆 𝑼𝑹𝑳}
Feature 2: Number of slashes in URL
Research- Using input data set (1200 phishing URLs and 200 legitimate URLs), the number of the slash
is analyzed for malicious and legitimate URLs. The average number of slashes in malicious URL is
found to be greater than or equal to five and the average slash in legitimate URL is found to be three.
Working-The attacker tries to trick web users by mimicking the doubtful URL that looks legitimate.
One way to do so can be adding slashes in the URL. So we consider the number of slashes in URLs as
a feature of identification and examines the number of slashes in legitimate and malicious URLs.
Figure 2.1.3 No of Slash in Malicious URL
Figure 2.1.4 No of Slash in Legitimate URL
Rule- 𝑹𝟐 = {𝒊𝒇 𝑺𝒍𝒂𝒔𝒉 𝒊𝒏 𝑼𝑹𝑳 ≥ 𝟓 → 𝑴𝒂𝒍𝒊𝒄𝒊𝒐𝒖𝒔 𝑼𝑹𝑳, 𝒆𝒍𝒔𝒆 𝑳𝒆𝒈𝒊𝒕𝒊𝒎𝒂𝒕𝒆 𝑼𝑹𝑳}
Feature 3: Dots in the hostname of the URL
Research- Using input data set (1200 phishing URLs and 200 legitimate URLs), the number of dots in
hostname is analyzed for malicious and legitimate URLs. The presence of dots in both malicious and
legitimate URLs are analyzed. The result shows that the malicious URL has more than four dots and the
number of dots in the legitimate URL is almost three
Working-This feature verifies the presence of dots in the hostname of the URL. However malicious
URLs usually have many dots to make users believe that they are genuine pages.
Figure 2.1.5 No of Dots in Malicious URL
Figure 2.1.6 No of Dots in Legitimate URL
Rule- 𝑹𝟑 = {𝒊𝒇 𝑫𝒐𝒕𝒔 𝒊𝒏 𝑼𝑹𝑳 > 𝟒 → 𝑴𝒂𝒍𝒊𝒄𝒊𝒐𝒖𝒔 𝑼𝑹𝑳, 𝒆𝒍𝒔𝒆 𝑳𝒆𝒈𝒊𝒕𝒊𝒎𝒂𝒕𝒆 𝑼𝑹𝑳}
Feature 4: Special Characters
The URL is unique. The identity of the legitimate website is obtained from the hostname of the URL.
The hostname in the URL of the legitimate and malicious dataset (1200 phishing URLs and 200
legitimate URLs) is analyzed for understanding the presence of special characters in the data sets. While
analyzing, it was found that 77.75 % of malicious URLs are with special characters.
Rule- R4 = {𝒊𝒇 (𝑺𝒑𝒆𝒄𝒊𝒂𝒍 𝑪𝒉𝒂𝒓𝒂𝒄𝒕𝒆𝒓 𝒊𝒏 𝑼𝑹𝑳) → 𝑴𝒂𝒍𝒊𝒄𝒊𝒐𝒖𝒔 𝑼𝑹𝑳 , 𝒆𝒍𝒔𝒆 𝑳𝒆𝒈𝒊𝒕𝒊𝒎𝒂𝒕𝒆 𝑼𝑹𝑳}
Feature 5: IP address & Transport Layer Security
The legitimate websites are addressed by their hostname. In the dataset (1200 phishing URLs and 200
legitimate URLs), the hostname in the URL is analyzed for the presence of an IP address. It was found
that 9.4 % of malicious URLs contained an IP address.
The URL uses Transport Layer Security to determine whether the URL is protected. The presence of
HTTPs protocol is required when delicate information is transferred across the network. Therefore the
existence of Transport Layer Security is analyzed for the input\ URL. On analyzing the dataset, 99.16
% of URLs were found without transport layer security.
Rule- R5 = {𝒊𝒇 (𝑰𝑷 𝒂𝒅𝒅𝒓𝒆𝒔𝒔 𝒊𝒏 𝑼𝑹𝑳) → 𝑴𝒂𝒍𝒊𝒄𝒊𝒐𝒖𝒔 𝑼𝑹𝑳 , 𝒆𝒍𝒔𝒆 𝑳𝒆𝒈𝒊𝒕𝒊𝒂𝒕𝒆 𝑼𝑹𝑳 }
 R6 = {𝒊𝒇 𝒑𝒓𝒐𝒕𝒐𝒄𝒐𝒍 = ! https → 𝑴𝒂𝒍𝒊𝒄𝒊𝒐𝒖𝒔 𝑼𝑹𝑳 , 𝒆𝒍𝒔𝒆 𝑳𝒆𝒈𝒊𝒕𝒊𝒎𝒂𝒕𝒆 𝑼𝑹𝑳}
2. CONTENT BASED CLASSIFICATION
Feature 1: URL of Anchor
An anchor is an element defined by the <a> tag. This feature is treated exactly as “Request URL”.
However, for this feature we examine:
If the <a> tags and the website have different domain names. This is similar to request URL feature.
If the anchor does not link to any webpage, e.g.:
<a href=“#”>
<a href=“#content”>
<a href=“#skip”>
<a href=“JavaScript ::void(0)”>
Rule- 𝒊𝒇 {
% of URL Of Anchor < 31% → 𝐿𝑒𝑔𝑖𝑡𝑖𝑚𝑎𝑡𝑒
% of URL Of Anchor ≥ 31% And ≤ 67% → Suspicious
Otherwise → Phishing
Feature 2: Links in <Meta>, <Script> and <Link> tags
Given that our investigation covers all angles likely to be used in the webpage source code, we find
that it is common for legitimate websites to use <Meta> tags to offer metadata about the HTML
document; <Script> tags to create a client side script; and <Link> tags to retrieve other web resources.
It is expected that these tags are linked to the same domain of the webpage.
RuleIF{
% of Links in " < Meta > "," < Script > " and " < Link>" < 17% → Legitimate
% of Links in < Meta > "," < Script > " and " < Link>" ≥ 17% And ≤ 81% → Suspicious
Otherwise → Phishing
Feature 3:Submitting Information to Email
Web form allows a user to submit his personal information that is directed to a server for processing. A
phisher might redirect the user’s information to his personal email. To that end, a server-side script
language might be used such as “mail()” function in PHP. One more client-side function that might be
used for this purpose is the “mailto:” function.
Rule: IF{
Using "mail()" or "mailto:" Function to Submit User Information → Phishing
Otherwise → Legitimate
3. PAGE RANK BASED CLASSIFICATION
In PAGE RANK BASED Classification Input URL is first classified with URL based classification
and then checked with the Top 1 Million Website URL Database provided by Alexa. This database
contains all the URLs starting from alphabet A to Z and 0 to 9. If the database contains this URL
means it is Legitimate otherwise it can be Malicious. This classification feature is added to increase
the accuracy of the result by URL based classification.
Figure 2.2.1 Tables of Alphabetical Data
Figure 2.2.2 Data stored in table
III. FUTURE WORK
After studying all the techniques related to the detection of mobile malicious webpages, we conclude
that using only static or dynamic analysis technique is useful but not able to detect malicious pages
accurately. So we will use a hybrid approach to detect mobile malicious webpages by checking its
URL as well as some of the page content, which will more accurately detect mobile webpages in realtime. This system can further develop to detect phishing attacks in the presence of embedded objects
like flash. Also various strategies for discovering malicious pages should be design further to improve
performance. The accuracy of the system can also be increased using new techniques
IV. REFERENCES
[1] CHAITRALI AMRUTKAR, YOUNG SEUK KIM, PATRICK TRATNOR, “Detecting Mobile
Malicious Webpages in Real Time,” IEEE Transaction on Mobile Computing,2016.Science and
Software Engineering, Volume 3, Issue 7, July 2013
[2] G. ASHOK KUMAR, A. VENU GOPAL, I. ABHILASH BALU, M. M. V. VAMSI, “Detecting
Mobile Malicious Webpages in Real Time,” International Journal of Engineering Research in
Computer Science and Engineering (IJERCSE) Vol 5,Issue 4, April 2018.
[3] M. ANANTHA RAMAN, R. ANIL KUMAR, S. GOWRI SHANKAR, P. DEVENDRAM,
“Detecting Malicious Web Pages in Real Time,” International Journal of Innovative Research in
Science, Engineering And Technology, vol. 7, Special Issue 2, March 2018.
[4] ABDULGANI ALI AHMED and NIK QUOSTHONI SUNAIDI, “Malicious Website Detection: A
Review,” International of Forensic Science And Criminal Investigation ISSN: 2476-1311, volume- 7
Issue 3 February 2018.
[5] DR. JITENDRA AGARWAL, DR. SHIKHA AGARWAL, ANURAG AWATHE, DR. SANJEEV
SHARMA, “Malicious Web Page Detection through Classification Technique: A Survey”, ILCST,
Vol.8, ISSUE 1, JAN-MARCH 2017.
[6] HEMALI SAMPAT, MANISHA SAHARKAR, AJAY PANDEY and HERAL LOPES,
“Detection Of Phishing Website Using Machine Learning,” International Research Journal of
Engineering and Technology (IRJET), Volume: 05 Issue: 03| Mar-2018.
[7] G. VASANTH KUMAR, U. SESHADRI, “Detection of Phished Websites,” International
Advanced Research Journal in Science, Engineering and Technology. Vol. 1, Issue 2, Octobe
