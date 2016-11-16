<h1>Nofig</h1>

<h2 id="toc">Table of Contents</h2>

[Getting Started](#getting-started) | [Use Cases](#use-cases) | [Benefits](#benefits) | [Roadmap](#roadmap) | [Philosophy](#philosophy) |

---------

<h3 id="getting-started">Getting Started</h3>


[^ back to top](#toc)

--------
<h3 id="use-cases">Use Case</h3>


[^ back to top](#toc)

--------
<h3 id="benefits">Benefits</h3>


[^ back to top](#toc)

--------
<h3 id="roadmap">Roadmap</h3>

[^ back to top](#toc)

<h4>Core</h4>
`Pending`:
* Integrate vorpal
* Config factory loader
* Multithreaded environment

<h4>Loaders</h4>
`P2`:
* nofig-git
* nofig-alias
* nofig-build
* nofig-deploy 

`P3`:
* nofig-test
* nofig-run
* nofig-test

`P4`:
* nofig-project-management

--------

<h3 id="philosophy">Philosophy</h3>
<h4>What does "multitenant" mean?</h4>
```The term "software multitenancy" refers to a software architecture in which a single instance of software runs on a server and serves multiple tenants. A tenant is a group of users who share a common access with specific privileges to the software instance. With a multitenant architecture, a software application is designed to provide every tenant a dedicated share of the instance - including its data, configuration, user management, tenant individual functionality and non-functional properties. Multitenancy contrasts with multi-instance architectures, where separate software instances operate on behalf of different tenants. [1]```

<h4>What does multitenant mean to `nofig`?</h4>

Imagine the following:
* Jane is a developer
  * Jane contributes to her organization's github account
  * Jane contributes open source software to her own github account
  * Jane has a secret, private repo she's working on  

Currently, Jane has to manage all of the project dependencies herself.
She's a fan of SOA's which is fortunate, because the monolith she started with was soon outpaced for a variety of reasons.
These builds need to happen in proper order to avoid race-case issues.
Additionally, some of her projects rely on other modules that she's developing.

Her project hierarchy looks something like this:
```
Project Alpha:
  Dep __A
  Dep __B 
  Dep __C

Project Omega:
  Dep __B
  Dep __D
  Dep __E

Project Zed:
  Dep Alpha
  Dep Omega

```

As a result, she's developed quite the complicated infrastructure for herself.
Attempts to simplify this interdependency makes her long for simpler days... (like when all git issues were resolved with rim raf & clone) 
She liked webpack's idea for module loaders on a per-project basis, but she needed something that would scale across her developer environment.

[^ back to top](#toc)

--------