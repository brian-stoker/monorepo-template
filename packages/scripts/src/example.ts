import { Resource } from "sst";
import { Example } from "@sst-monorepo-template-pnpm/core/example";

console.log(`${Example.hello()} Linked to ${Resource.MyBucket.name}.`);
