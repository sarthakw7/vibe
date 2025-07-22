import { openai, createAgent } from "@inngest/agent-kit";


import { inngest } from "./client";


export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },

  async ({ event }) => {
    const codeAgent = createAgent({
      name: "code-agent",
      system: "You are an expert next.js developer.  You write readable, maintainable code. You write simple next.js & react snippets",
      model: openai({ model: "gpt-4o" }),
    });


    const { output } = await codeAgent.run(
      `write the following test: ${event.data.value}`,
    );
   
    return { output };
  },
);