# System Design
- [System Design](#system-design)
  - [Design Fundamentals](#design-fundamentals)
  - [What are Design Fundamentals](#what-are-design-fundamentals)
  - [Client Server Model](#client-server-model)
  - [Network Protocols](#network-protocols)
    - [IP](#ip)
    - [TCP](#tcp)
    - [HTTP](#http)
  - [Storage](#storage)
    - [Databases](#databases)
  - [Latency and Throughput](#latency-and-throughput)
  - [Systems Availability](#systems-availability)
  - [Availability](#availability)
  - [Caching](#caching)
  - [Proxies](#proxies)
  - [Hashing](#hashing)
  - [Relational Databases](#relational-databases)
  - [Key Value Stores](#key-value-stores)
  - [Specialized Storage Paradigms](#specialized-storage-paradigms)
  - [Replication And Sharding](#replication-and-sharding)
  - [Leader Election](#leader-election)
  - [Peer-To-Peer Network](#peer-to-peer-network)

## Design Fundamentals
System designinterviews leads with systems and how to design the items. Once you consume all the content you will be able to tackle all the contents, and see in the next video.


## What are Design Fundamentals
What type of investigation, fundamentals knoweldge behind system design interviews.

Where a solution is either objectively correct or not. A worse being tacke, the client server model, netword and how machines communicate to properly design a system complex. The second category: key categories, trading up, design fundamentals, each key characteristics, that you have to be weell versed.

Have an assistance, catches, leader election, bread and butter, key characteristics. Fundamentals, 

Tech either as components really using zoom keeper. Using real life tools having design interview, To justify the interviewer. Between key parts and grocery fo design fundamentals, this comes to put you int he next steps. 
Next video informative and next ones.

## Client Server Model  
Ip Addressess as IP addressess. The expert when you in the browser find the dns. Http is a way to save and algoexpert servers, pack into packages. into the addreessess gets the request, would use the source address and 
use it to send in response. Servers are machiens called clients, a server usually listen for response in distinct ports. You have to specify which oport you want to communicate. IP address the appartment, the port as the apartment numbers. Most clients know which port to use
know what port to use. Mostly speaks to port 80. So here is to open up. Eventually receives the request, understands the format, and the server understand you want to look an HTML of the Algoexpert. 

All computers talk around the world, client server concepts, type in the browser communicating throught the browser.

## Network Protocols

Majority admitidly low level. All this things are network and system design inteviews only need ot know them at high level. You will likely have the aha moments. How they communicate and what a protocol is.
An agreed upon rules, when two people meet each other, have some exchange and may even have an protocol. A communication protocol, we are going to exchange the words, abvery common. protocol between two human beings

Sent and receive, over the network, sent over the internet, from one machine to another. The format the order, if there should be some sort of respomnse, from one to another. The majority you don't need to kno about them.

Those are the ones we want to cover

### IP
An Internet Protocol. In context is that the modern interne truns in UIP. When a machine tries to interact and sends data, is sent in the IP package, and data thats sent from one machine to another.
By way and memory, other ways as bytes and have two main sections. Headers source and IP address, the stimation and the estimations and quick pause.

The header you can know what the total size of the package is. It turns out there are two versions. With the IPV4 and now being used the IPV6 which is now getting started to being used. The rest this part here,
The data of the machine, and limited in size, 2^16 bytes, which is actually not that much, Sending an image, way more than 2^16 bytes. Likely no fit, the IP packages, when you have multiple IP packages, you dont actually get a way to receive all the data that you were trying to send and neither the 
order of them. Is really ment to solve and serve the IP ways, and the order in which they are readed, they are guaranteed or at least know if some packages are being corrupted, you will know and receive on a incorruptible way. All the applications being used
Because of this things being solved, that cant be accomplished alone. That really isnt useful. working in the networking field. But is important to know from a high level of understanding. What have the PCP, or something like this. Some information, the rest are here, and erase, here the data having
the TCP 



### TCP

Web servers is first going t create a TCP connection, through an handshake, basically communcaites with another package, we are now connected, and both machines send data to each other, the connection can be ended if unsuccessfully connected. A more powerful wrapper along the internet.
Can use to really define meaning ful and easy to use. All sending in these underlined packages. HTTP, is a protocol built on top, introduces a higher level abstraction. Is the response request paradome. One
machine sends one machine request response, to easi9ly build easy to mantian systems. Request that have this defined properties, the power and rigor to visualize hwow this requests look like. Kepepo in mind they are arbitrary just the stuff

The hos and ports, http methods to have here, they basically describe the purpose of the request. retrieving data from the servers, providing data from the server, to delete some data. You asa developer relies int he server logic whatever you like. Really depending on the server.
The path is where you have logic on the server. A server might have have different logic, payment information, making an actual painting, you had a slash auth paths, the request would likely have to do with authentication.00


### HTTP

Just the data, piece of data in JSON format, int h similar format, one improtant field being the status codes, specific inks by normal API standards are error codes, that they might not had been found.
Accepts JSON, defines endpoints, get and post endpoints, console logging stuff, headers and methods of the requests, the body of the rquests. Hey I receive the POST requests. in the top terminal listingin to the curl localhost3000/hello.

A bunch of different protocols since we haven't specified anything else we ge the GET requests witht he response of the servers. Headers with the metadata, post requests, headers where we issue. Applications / Json.

As specification of Data. Food point bar. 
Here we have the body, and being unfamiliar, why http is so rare. Those protocols and transformation of data. Developing a large scale system, simple endpoints, as data wasn't formatted as it should be.

A key take waways is that these three are very important protocols. Http is more relevant, some of the request. methods pathings.

## Storage

### Databases

Databases, in lore, lives somewhere in the memory. Is the memories, always. Save files, 
Your computer and machines, very the server, Is persistance, database thats on the database, if it is stored, it is percepted, and stored onn the database, scrashes, once is boot up. A lot of database, is stored
Database and server goes down, server thats down, see as how it goes, the first two endpoints that write data from memory 

Gonna restore the body, in the hash table. Saving after the key value score, the get request is going to brab the memories, 
returning and having null, having null. Storing the data, in the destination file. database data. SUse the actual key

Write data to the destination file, when we get data we try reading that file, and otherwise will return the data, and allow us to store this data.

By launching our server, you have a curl command. Endpoints that grab data, nd is going to store the response body.
Stores the request body.

The key the key bar,.

Acccess ot the database, if we are scalaing that data, and knowing the consistency of these.

## Latency and Throughput

Latency how long itetakes for client to server and server to client. On a machine reading a piece of data, 
refered to latency, Is the fact that there are different things that have different latencies

Reading microbyte by hdd and 20 000 ms. And somethimes sending something from a network takes 10 000

A packet to californiand round trip to nether lands that will take aproximatelly 150 ms. if that takes 150 ms, around the world taes a lot world.
Or reading stuff for them. Is really as how electricity takes to travel, which is considerably slower than some types. 
A network,  or a billion a second. A clients and one clients, How many bits can the server handle? How many bits can be handled? How do I incraease?

The naive answer is o pay the Throughput. In theory we can pay our Thrughput, algthought that might not solve 
It might go to diffeernt servers, related as measures. Not necesssarilly correlated. 


## Systems Availability

Most systems have an implied availability to wathc them. There is an implied guaranteed of availability. You expect the website to be up. And wont be happy for not being able to access it.
As an designer availability matters a lot. It wouldn't been a really end of the world. But for an airplane while the plane is high then there would be unacceptable.

People on Vimeo, and as you can imagine thats really bad. Availability maters a lot. 
Availability as the percentage of a system uptime in a given year. Fifth percent availbaility would be really bad.
Usuallty dealing with high percentages, 90 percent is actually bad,.
99 availabilities, 3 nines availabiltieis, The standard way to talk abot ab=navailities, You have ax 
When you see five, siz times is when theree is the gold standard of availabilities.
Ai to be highly ideal, and maybe even more.Is something that matters a lot. It matters so much, that there is no implied, but guaranteed.
Service level agreement between a service provider and the endusers of them. Among other things. Have the splicit sever agreements taht guarantee this level 
Percentage of guarantees is the SLA, and the SLO. Single server, the part consistent redudant by adding servers 
Now the load balancer is a single failyure, large part to avoid having a single server overloaded, redudancency
Have 5 load balancers, introduced in lots of parts just by adding machines to them. Gets fix, is airplaine, twin engine. Both enginers are used. Passive abundance, active redundancy
Multiple machines only one have handling and doing the work. Doing the work fails, it fials, somehow knows and takes over. 
Play load balances. Suddenly one that fails, if you have an special service that is handled by machines, imagine if only one were responsible iwth the main duties, the right


## Availability

Imagine they died. Systems availability, single points of failure, making them redundant, in place to handle system failures.
Servers tat crash, need processess in place to handle the processess. Highly informative. Computational complex
Lots of time, caching speed up the algorithms, caching is very similar. To reduce the latency of a system.

Operations that took the time, you can imagine a way to design the system. Data trasnfrer, design the system and 
do different types of 

## Caching
Stores data, faster to access from this location. In this location, in the client level. Interacts with the server, Someone in the client.

Always need the client from the database, cache in the server level. In between int he server and the database, System design interviews
In the modern view in the computer, on the CPU level, that makes faster to retrieve memory, something that you take for gtranted, taht coccurs by default in many levels
Concrete instances that caching is helpful, and you want to avoid doing levels. Might request to the database, to the database on the client

Here you want to speedup, network request and get to the database. Instances are helpful if there are computational nlong operations. First, at the server level you perform.
You maight want to perform that.

Not so  ukmuch to increase, but maybe you dont't want to read form the same datbase, so you don't need to read from the database, from there, each server to avoid having that many reads

Cachin on the system by avoiding avoiding to have to do it multiple times. Or maybe you have operations that you want to speed up that many times.

Depending on the database you have the loader, and you cna notice that the loader is no longer there, we know that it is astatic page of context, adds a little complexity.
list of questions. Having user. When you running code on algoexperts. As you imagine, when you run code.

We don't need to do. Running code with the solution, that is running code that where you run code, and detach from the components,
in memory of the caching with the client.


Hash it down to a single integer, we check if its on the cache. We avoid that one second computation.

Users that can read or write posts. Posts that can be stored in the database. If we want to cache them now you have tow sources of trueth
Maybe is on certain intervals, maybe in different type of schedules. Cash evictions, with the right back AOnly the cash will be updated. If something happens.
Before the database is updated, you might lose data. Lets assume we were assigned to design the youtube section.

All the clients read from the caches of the servers. Fetches, and sometime elapses, edits the comment, goe sback to the video already scored in the cache.
Not the new edited one, As ou can imagine that would be really bad for youtube comments. Any written content. Posts would fall in this category.

To put hte cache out of her, you would have the single source of truth. We might not care that much as the scarenesss. View count is not hte most important information.
Thats when you ask yourself what are the requirements, do we actually care? Then we might not be able to use the cache in a more naive way. Caching while it's great have 
many pitfalls. Caching is beautiful, Then things are going ot be trickier. Depending on your usecase that might not be the best.

A single ting reading or writting the data. If you don't care about caching, and you can propoerly invalid distributed systems. Caching and 
eviction policies, the infinite amount of data. Getting rid of data in caches. What policies and rules?


What pieces of data least used more recently, or the least frequently used that we can get rid of.

Depending on the product you are designing. Important fundamental concpts. for system design.

A client makes a request to the proxy and it will forward the request to the server. Server response,

might be able to access to hide otherwise what it is. Using the forward proxy.

Reverse procxies being a little more tricky. The client think s that you are interacting.

The entity is the reverse client server model. Type google.com in your address or google.com Have it configured, is going to have the reverse proxy and not ht eactual server.
The client and the browser or the destination. Will forward. The more request are sent the more likely for it to become overwhelmed. 

For instacnce here with the load balancers and the servers, and the server architecture how to dns queries and google, turns out and the round oblin, DNS Round roblin. Where a signle domain name gets multiple IP addressess how they are associated and they are returned in a big balnace way.

Takes in a domain and google.com Is comes and the IP adddressess. How they end up with different addresses. And we curl them we also get google.com where basically the same domain name is having sam from different IP addressess.
Is new server where to redirect new traffic. To know about each other, load balancer and the load balancer knows about it's existence. The first one is pure random redirection, load balancer following the purely random order, one server could by chance be overbalanced. When we have the DNS robbing
On one server, we are issuing, and then. haivng first second, third etc.

more traffics and servr loading balance, and selection and performance based on load. OT know how much traiffic is there how many resources are there, this server is not handling as well
Is going to start redirecting not to the server, whereas ethe other servers are getting a lot of load. Whenyou get from clients and depending on the value of the hashes and this particular clients, to server n1. IP based are really usefull  if you got cashing on them, really useful always be redirected to the server to the ip balanced, be on the cache server, to another server, you wouldn't be able to use the cashe.
Distributes request to servers srvers based on their path, ruinning code redirected to specific servers and how they are redirected to another servers deploy changs
Big changes this deployment, a lot of routing to different servers, are unaffected. Server strategies, and pick server usage strategies. according tot heir server.


## Proxies

A lot of server strategies, can serve as a solution and how they end up in the servers. They can perform very long time operations, deal with the requests as cashing, cashing here having every server store each and the respnse that hasn't been cash
Skips and immediatelly have the cashing. Load balancer has servers for random strategies. Requests happen to be redirected to server A. 


## Hashing

Servers and load balancers that follow a server selection strategy, will server rerouting, merely as useful that would be otherwise. 
As part of the hashing. and items. We can look at this case 4 clients. A B C and D. These request have the load balancers
The load balancers has to redirect the client to the server pick what server shave selection guarantees. load gand goes to the orders from the top. 

A lot of server strategies can introduce some problems. Request that are computentially complex. They are just expensive. Implement in cash and have every request first
request have tasks and gets the response, skips the operation.  pretty reasonable computational expensive, following a random strategy.

The request happens to be redirected, server A checks the chsh, and the client. Issues once again, round robin approach, Server D doesn't have the response reuqest. If you design in memory hashes, but the load balancer is following a server strategy, the same memory its going to fall out.
Server and cashed. This is where hashing takes in place.

Every client rerouted to the server, hashing each and the example, given to us, through that hashing, 11, 12, 

With thesismplest is to mod by the number of servers we have, if we say 11, by the number of servers (4) the remainder of the division 11 by four.

By the number of servers and that would return the servers. Have that uniformity and the serverr D has thecash hits. When have the server miss the cache hits. over the requests.

Of course, you see there is a large distributed systems. Have server A failing to us, and ton oof traffic and we might need to add multiple servers to our system. If we dealing with server E, we no longer have 4 serversn but 5. And never go to E, we wouldn't be able to keep giving until the D. There is some servers we need to balance.

IP Addresses by modding the server that dies everything beomes a mess are not nearly as useful. These two strategic hashes solves the problem, and we gonna look at the code snipping. Instead having servers as ABCD< on the circle, as the concept consistent hashing.
As you place the servers four initial servers, A, B, C, D. All the way at the pont degree angles this circles can be represented as back to back numbers.
Four clients as the IP Addressess, the susernames, but through thtehashing on the circle, C 1, C2, and here you would have the servers on the circle, you determine, and each client you move clock wise, What if the server C dies.

Now we have the moving o clock wise, Sift incredible Redirected to server D. Bring back C and E. We go throught hte clients and from the clock wise direction, no longer using it. With this system of putting servers on a circle, if we ever add or rmove, we still mantain most of the mappings, only one of them changed, It mantains some good level of consistency in their mapping inot.
In the even more redistribute, a lot of clients, where one of the servers are not present, server D, you can pass all the servers throguh multiple hashing functions. Each having multiple server positions, here and there. Up there.

Having some sort of squeue. Useful for having less hash server latency because of servers diying.


## Relational Databases

In some cases such as non reqlational databases and the user login, the quering language and a lot of that comes with non support of that type of queries, thats why we moved to postgress.
Very powerful querying capabilities.

In python and javascript you could implement this stuff, but if you have therabytes of data, you would have lot of non trillion, thats why sql is powerful. 
ACID Trnasactions.
Atomiciy,  and the consistency, isolation and durability. Database and causes one or more suboperations to work on fail.
Any transactions confrers by rules of the databases. We gonna look one by one, 

A single operation. Updating a database, tahts permament. ACID being the naive database. Relational databases. Databases Indexes. Databases much faster and database indexes.
Ways to be deployed under the good. Take thte apyments withy the auxiliary databases. They would be in sorted order. Table of contents, that make them easier to search. You could break the linear to logarithmic time thats going to be lengendary, Good tool to keep in mind.
You might want some other dtatabase timelines, whatever you write and Write operations read and write operations. Having sql in operation.

Having zero dollars having table and large databases with 50 000 000 rows showing how gigantus databases can be. Ment to demostrate the kid of power copy the query, haivng the query thats useful for the

**Every month **
Reselection of balances, asset properties. No longer needed. Basically select the 10 largest billion roads. Fact that google only have eventual consistency. The data agains thte transactions.
Pain and the sq.
Relatinal databases.

## Key Value Stores
Mapping from keys with aribitrary numbers. Hash tables incredible flexible and simple because the key values store, and have no use for the imposed structure.
Cashing and intances somewhere accessing with IP addressess. Key value and stores use case for dynamic configurations. Constants algo experts having system experts is launch may rely in the parameters, is literally how and the true false.
Previous and few examples, some instance that the database Have data that persisst and the data of them. Totoally acceptable.. 

Pick some key value stores. Taking two files with cashing and replaced with in-memory replaced with in memory key value. 
Prepare to receive check the reddis library see if you have and the key responses otherwise have. Then have few parameters gonna expire. Something that  always serving same page of clients.
Loads and have the hello world. 

## Specialized Storage Paradigms
Massive amounts of the blog store products and the most commons using GCS. Microsoft, common and the big tech companies. Blog scores are optimized for massive amount of data.
Neo 4g. A dataset. How to have the sypher, the interviewers, relationships between these data nodes. Interviewed, interviewed and the relationships.
 Store nativelly on their own. Run it to connect the data. 

## Replication And Sharding
Often shortened as Pub/Sub pattern is a model that that publishers publish to channels and listeners. At least once delivery, persistent storage, ordering of messages and replayability of messages.
Table of payments, maybe charting with the customer names. Any payments between F and G. According tot he region of the customer. 

Sharding and system design interview. How dictated and enduser and have the if else statements. You would rather not have the reverse proxy and the clients
would make a request for the reverse proxy doing that.

## Leader Election
For such system you might have a database to store the database, the date and the price in the database, and then have a third-party service 
needs to communicate, you might not want to have this third-party service to interact directly with the database.

Connect directly insert in the middle. Service on the middle. When the user subscription is going to be communicating with the database, and knowing.
This could pose a problem, in one machine. What would happen if it fails?
This request is the kind of request that we dont want to duplicate. How do we ensure that this operation is only performed once?

That are in charge of doing the same only one thing, leader have the servers elect themselves as the leaders. and doing the actions of all the servers to be.

Elect a leader among themselves. Only server for doign the logic. In case something happens to the leader.
This seemengly trivial task, any point in time difficulty broadly speaking. Sharing state, ahving difficult and network failures.
This concept is non-trivial, is more the act of having multiple machiens on having concensus together. Who the leader is. Paxos and Raft.
Never expected to implement them yourself. Not necessarily, and having zookeper using Etcd. Think of hashtable highly available and consistent.
Multiple machines reading and writting. databases that are highly consistent. y implementing an consistent consensus argument.
Having read and write always having a single source of truth. 

The nodes need to have one leader to take care and use the consuensus algorithm. General gist of leader election with multiple servers given point int he store who the leader is
and other special key. with the name of the leader. You know that the value in any given point in time you got leader election.


## Peer-To-Peer Network
Thousand seconds. A thousand times, thousand seconds. We might do this. Remove an dhte machnine, ten machiens serving
Requesting the five distributed files. This would spped up the system.

Five and some of the files. 20 files, each machine that dont need to replicate transfer 1 to the same and bottleneck. All the approaches are problematic.
Peer to Peer Network. How would that function on the system.

What if instead worked to split up and having into smaller chunks and having the peers to communicate with each other.

Divide into thousand five megabytes files. Megabyte files to the machines. Imagine would send out thosuand megafile to each of them.

Network throughput, with thousand machines.


