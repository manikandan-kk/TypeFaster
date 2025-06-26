<div class="page-header">
    <h1>
      TypeFaster - Test your typing skills and improve it!
    </h1>
</div>

<div class="preliminary-design">
    <h2> Preliminary Design </h2>
    <div class="pl-interaction-view">
        <p> Interaction view | HLD </p>
        <div class="pl-interaction-view-design">
            <img src = "./github-contents/imgs/preliminary_hld.png" width="800" height="600">
        </div>
        <div class="components-desc">
            <h3>Components Involved</h3>
            <ul>
                <li>
                    <h3>CloudFront</h3>
                    <p>
                        Type: CDN Network
                    </p>
                    <p>
                        Usage Pattern:
                        <ol>
                            <li>
                                Cloudfront will serve both the FE and BE since it's a same domain request (need not handle CORS separately)
                            </li>
                            <li>
                                Although it's a lower user-traffic website, Cloudfront can still help in caching the static web contents (served via S3)
                            </li>
                            <li>
                                Can speed up the TRT after hitting nearby Edge location and the entire interaction then is carried over the AWS internal network backbone (not via Internet)
                            </li>
                        </ol>
                    </p>
                </li>
                <li>
                    <h3>Lambda</h3>
                    <p>
                        Type: Serverless Compute
                    </p>
                    <p>
                        Usage Pattern:
                        <ol>
                            <li>
                                Need for serverless compute since it's a low-scale app (and no requirement to run compute layer - 24 x 7). Also there is no requirement for Autoscale though Lambda can handle the same.
                            </li>
                            <li>
                                Lambda offers Always free-tier (for 1st 1 million requests / month) which is Safe to user rather using compute services like EC2. Hence this will be highly cost-bounded.
                            </li>
                            <li>
                                No need to manage the Infra since AWS runs the provided execution very quickly over the pre-warm nodes (managed internally)
                            </li>
                        </ol>
                    </p>
                </li>
                <li>
                    <h3>DynamoDB</h3>
                    <p>
                        Type: Serverless Storage
                    </p>
                    <p>
                        Usage Pattern:
                        <ol>
                            <li>
                                Need for serverless storage since it's a low-scale app (and no requirement to manage the storage layer). Also there is no requirement for Autoscale though DynamoDB can handle the same.
                            </li>
                            <li>
                                DynamoDB offers Always free-tier (for 25 RCU,WCU / second) which is Safe to user rather than setting infra layer. Hence this will be highly cost-bounded.
                            </li>
                            <li>
                                Although Typewriter data has relationships involved (primary RDBMS use-case), it can be perfectly normal to model in NoSQL world (trade-off for using Always free tier DynamoDB).
                            </li>
                        </ol>
                    </p>
                </li>
            </ul>
        </div>
    </div>
    <div class="pl-erd-view">
        <p> ERD Relationship view | LLD </p>
        <div class="pl-erd-view-design">
            <img src = "./github-contents/imgs/preliminary_erd.png" width="600" height="300">
        </div>
    </div>
</div>
