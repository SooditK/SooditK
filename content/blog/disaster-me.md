---
external: false
draft: false
title: 🌊🌊🌊 Disaster Me Daddy
description: Because even virtual storms need an umbrella!
date: 2024-03-18
ogImagePath: /assets/blog/cloud.png
---

![Cloud Me Daddy](https://i.imgflip.com/50p249.jpg)

Contrary to popular belief, applications hosted in the cloud are not foolproof—failures happen.

We're going to be using Azure, but the same stuff applies for AWS, GCP or any other major cloud provider.

## The Main Thing

The failover process in Azure should be automated as much as possible, You should configure alerts (I prefer Slack Bots that calls the Health Check API), so that you can stay informed about the health of your application and take necessary actions to trigger your Data Recovery Plan.

There are regions in Azure, and mostly, I've seen applications are regional, you should deploy them in availability zones (physically separated zones within a region) to protect against datacenter failures.

YOU SHOULD ALWAYS HAVE A BACKUP STRATEGY. I've seen people who don't have a backup strategy, and it's not a good idea.

## Some Gibberish

#### RPO - Recovery Point Objective and RTO - Recovery Time Objective

RPO is the maximum acceptable amount of data loss measured in time. RTO is the maximum acceptable amount of time to recover from a failure.

The best way to understand RPO and RTO is to think about a database. If you have an RPO of 1 hour, and your database fails at 3:00 PM, you can only lose data up to 2:00 PM. If you have an RTO of 1 hour, you must be able to recover your database by 4:00 PM.

The best strategy is to adopt a active/passive or warm-spare approach, where you have a secondary system that is ready to take over in case of a failure.

### Disaster Recovery Plan for your stuff

- VMs: Azure Site Recovery - That's the beauty, it replicates the VMs to another region, and you can failover to the secondary region in case of a disaster. It supports replicating VMs in VMware/Hyper-V or in physical machines to Azure

- Storage: Okay, for Azure Blob, you can use snapshots to create read-only point-in-time copies of your data. For Azure Storage, any outage that makes the primary endpoint unavailable, you can use the secondary endpoint. The failover process will cause the secondary endpoint to become the primary one so that applications can continue to use the storage.

- Databases: I'd suggest (if you're using Azure SQL, MySQL, PostgreSQL, or Cosmos DB) that you turn on the Automated Backup Service, it takes regular snapshot-based backups of the database to a separate storage account. A window of 10 days is pretty good, but you can configure it to be retained for longer period of time.

- Azure App Service: JUST GO WITH [Multi-Region Deployments](https://learn.microsoft.com/en-us/azure/architecture/web-apps/app-service/architectures/multi-region). It has backup and restore feature of Azure App Service, which automatically creates a backup of your app and its configuration settings. You can restore the app to a previous state by using the backup.


## One Last Piece of Advice

If you're deploying to AWS, I'd suggest you to use Cloud Development Kit (CDK), But for your Frontend, I highly recommend you to use a Platform like [Vercel](https://vercel.com), [Netlify](https://www.netlify.com) or [Cloudflare Pages](https://pages.cloudflare.com) for your Frontend, they have a very good failover strategy and you can deploy your app to multiple regions with a single click.