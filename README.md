# web-scraping-count-words
The script will accept two parameters. One URL and another a list of words. It will crawl the page in the URL and print how many times the given words are present on the page.


### Installation and setup:

* Navigate to a directory of choice on terminal. 
* Clone project using git clone `git clone https://github.com/raval-64/web-scraping-count-words.git` 
* Setup environment and install dependencies using `npm install`
* Then run command `node script.js --url=https://anatta.io --words=Sustainable,Growth,Anatta`
    * Out will look like ``` { anatta: 21, sustainable: 12, growth: 6 } ```