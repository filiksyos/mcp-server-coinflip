import { z } from "zod";
import { type InferSchema, type ToolMetadata } from "xmcp";

// Define the schema for tool parameters
export const schema = {
  count: z.number().min(1).max(100).optional().default(1).describe("Number of coins to flip (1-100)"),
  weighted: z.boolean().optional().default(false).describe("Whether to use a weighted coin (70% heads, 30% tails)"),
};

// Define tool metadata
export const metadata: ToolMetadata = {
  name: "flip-coin",
  description: "Flip one or more coins and get random heads or tails results. Optionally use a weighted coin for biased results.",
  annotations: {
    title: "Flip Coin",
    readOnlyHint: true,
    destructiveHint: false,
    idempotentHint: false, // Each flip produces different random results
  },
};

// Tool implementation
export default async function flipCoin({ count, weighted }: InferSchema<typeof schema>) {
  const results: string[] = [];
  let headsCount = 0;
  let tailsCount = 0;

  for (let i = 0; i < count; i++) {
    const random = Math.random();
    let result: string;

    if (weighted) {
      // 70% heads, 30% tails
      result = random < 0.7 ? "Heads" : "Tails";
    } else {
      // 50/50 fair coin
      result = random < 0.5 ? "Heads" : "Tails";
    }

    results.push(result);
    if (result === "Heads") {
      headsCount++;
    } else {
      tailsCount++;
    }
  }

  if (count === 1) {
    return `🪙 ${results[0]}!`;
  } else {
    const coinType = weighted ? "weighted coin" : "fair coin";
    const resultsList = results.map((r, i) => `Flip ${i + 1}: ${r}`).join("\n");
    const summary = `\n\nSummary (${coinType}):\n✅ Heads: ${headsCount}\n❌ Tails: ${tailsCount}\n📊 Heads percentage: ${((headsCount / count) * 100).toFixed(1)}%`;
    return `🪙 Flipped ${count} coins:\n\n${resultsList}${summary}`;
  }
}
