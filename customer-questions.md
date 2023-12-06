Question 1:
Hello,

I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:
- Records
- Indexing

I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking."

Cheers,
George


Hello George,

Welcome to Algolia!

A record is a collection of attributes stored in key-value format. For example an e-commerce store will have many products for sale, each of these products is a record. At a minimum these records will contain an attribute with the product name but will also usually include additional information about the product itself such as price, category, description, and images of the product.

An Index is a collection of records and indexing is the process of making those records available for searching. Algolia provides several methods to send your records to the Algolia servers and create an index. You can read more about these methods [here.](https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/)

Regarding your second question. The answer to this depends on your data set and what type of records you are indexing. Custom Ranking allows you to enhance or alter the default search experience. Details of the default ranking strategry can be found [here](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria/) but many businesses find it valuable to add additional ranking criteria. Using the e-commerce example from above some additional Custom Ranking attributes might be price, margin, popularity etc. Ultimately the choice depends on your business goals. Feel free to share some additional detail about your data set and I would be happy to provide suggestions.

Best,

Darrell

Question 2:
Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Regards,
Matt

Hello Matt,

I'm sorry to hear that the new dashboard designs don't meet your expectations. I've passed your feedback on to our product team, we are always working to improve our design and customer feedback plays a large role.

In the meantime, there are [programmatic ways to clear and delete an index](https://www.algolia.com/doc/api-reference/api-methods/clear-objects/) that might help your development. Alternatively, I find keeping a tab with my index open to be handy - clearing and deleting an index are just a click away under the manage index dropdown.

Please let me know if the programmatic alternative works for your use case, if so I'm happy to spend some time with you setting that up.

Best,

Darrell




Question 3:
Hi,

I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?

Regards,
Leo

Hi Leo,

I'm excited to hear that you're evaluating Algolia for your website. Algolia will help your website provide your users with a world class experience without the heavy development process required to create your own search experience. Development work required on your end is rather light; Algolia provides direct integrations with most popular hosting platforms and web frameworks. We also provide API clients for most popular languages to speed up your development work and offer pre-built UI Libraries for web and mobile devices.

At a high level the process is as follows: Import your data to Alogolia, Configure result relevance, build your search UI. Algolia provides a variety of tools and prebuilt widgets to make this process as easy as possible. We also provide you with a visual user interface to acheive most of these tasks through our portal without any code required.

Check out our getting [started guide](https://www.algolia.com/doc/guides/getting-started/what-is-algolia/) and let me know if I can answer any additional questions for you. While you do that I would love to hear more about your project; ie. What is your website and tech stack? With this detail I can provide more specific recommendations for you.

Best,

Darrell
