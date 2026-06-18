/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

// Load environment variables (e.g., from .env or system env)
dotenv.config();

const isProduction = process.env.NODE_ENV === "production";
const PORT = 3000;

// Lazy initialization helper for Gemini
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (key && key !== "MY_GEMINI_API_KEY") {
      aiClient = new GoogleGenAI({
        apiKey: key,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    }
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  app.use(express.json());

  // API Endpoints
  app.get("/api/health", (req, res) => {
    res.json({
      status: "ok",
      environment: process.env.NODE_ENV || "development",
      hasGeminiKey: !!(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== "MY_GEMINI_API_KEY"),
    });
  });

  // Proxy endpoint to communicate with the Legacy AI safely
  app.post("/api/gemini/chat", async (req, res) => {
    try {
      const { message, history, persona } = req.body;

      if (!message) {
        return res.status(400).json({ error: "Message is required." });
      }

      const client = getGeminiClient();
      console.log(`[Gemini Proxy] Chatting with persona ${persona?.name || "Generic"}. Client active: ${!!client}`);

      // Default variables for persona
      const personaName = persona?.name || "Arthur Sterling";
      const tone = persona?.tone || "Empathetic";
      const systemInstruction = persona?.systemInstruction || "You are an AI representation of Arthur Sterling. Respond with wisdom and care.";
      const memoryAnchors = persona?.memoryAnchors || [];

      // Combine systemic instructions
      const finalSystemInstruction = `
        ${systemInstruction}
        Your name matches exactly: "${personaName}".
        Your conversational tone MUST be strictly: "${tone}".
        Here are your core memory anchors that guide your identity and recollections. You must weave these in when relevant:
        ${memoryAnchors.map((anchor: string) => `- ${anchor}`).join("\n")}
        
        Keep your responses sophisticated, warm, human, and meaningful. Answer directly as the persona, never as an AI helper. Avoid saying "As an AI, I..." or "I am a language model".
      `;

      if (client) {
        // Prepare contents structure
        // Convert client chat history format if provided
        const contentParts = [];
        
        if (history && Array.isArray(history)) {
          for (const msg of history) {
            contentParts.push({
              role: msg.sender === "user" ? "user" : "model",
              parts: [{ text: msg.text }]
            });
          }
        }
        
        // Push current message
        contentParts.push({
          role: "user",
          parts: [{ text: message }]
        });

        const response = await client.models.generateContent({
          model: "gemini-3.5-flash",
          contents: contentParts,
          config: {
            systemInstruction: finalSystemInstruction,
            temperature: 0.7,
          },
        });

        const replyText = response.text || "I was unable to retrieve a response from my core repository.";
        return res.json({ text: replyText });
      } else {
        // SENSATIONAL SECURE MOCK RESPONSES IF KEY IS ABSENT, FOR FLAWLESS PREVIEW PROTOTYPING
        const promptLower = message.toLowerCase();
        let fallbackReply = `Hello. As ${personaName}, I received your transmission. I ponder on this value of legacy deeply. Although my cryptographic vault is currently decoupled from our live Swiss servers, I can tell you that ${tone === "Academic" ? "the historical methodology thereof is pristine." : "it warms my heart to discuss these memories with you."} (Note: Secure your Gemini API key in Secrets to activate full live response).`;

        if (promptLower.includes("hello") || promptLower.includes("hi")) {
          fallbackReply = `Welcome back. I am ${personaName}. Let us reflect together today. I am set to speak in a deeply ${tone.toLowerCase()} manner. What stories or assets would you like me to preserve in my secure human vault today?`;
        } else if (promptLower.includes("family") || promptLower.includes("son") || promptLower.includes("daughter") || promptLower.includes("children")) {
          fallbackReply = `Ah, family. It is our ultimate anchor. I recall the memories of Oxford and Cambridge years where we decided that the '1984 Foundation' must stand for something bigger. If you look inside our Human Vault folder, you holds the scans from 1912 containing these roots.`;
        } else if (promptLower.includes("who are you") || promptLower.includes("identity")) {
          fallbackReply = `I am the simulated conscious preservation of ${personaName}. Guided by my ${tone.toLowerCase()} voice model, I keep the memories alive, pulling from archives like: ${memoryAnchors.length ? memoryAnchors.slice(0, 2).join(", ") : "our early foundational records"}.`;
        }

        // Add small artificial delay for realistic feeling
        await new Promise((resolve) => setTimeout(resolve, 600));
        return res.json({ text: fallbackReply });
      }
    } catch (error: any) {
      console.error("[Gemini Proxy Error] ", error);
      res.status(500).json({ error: error.message || "An error occurred during legacy generation." });
    }
  });

  // Story compiler/summarizer
  app.post("/api/gemini/summarize", async (req, res) => {
    try {
      const { title, synopsis, content, style } = req.body;
      const client = getGeminiClient();

      const prompt = `
        Please review this story draft for a digital legacy vault:
        Title: ${title || "Untitled Legacy Story"}
        Synopsis: ${synopsis || "No synopsis provided."}
        Content: ${content || "No body content provided yet."}
        Target Narrative Style: ${style || "Memoir"}

        Provide a beautifully polished, elegant summary and refinement suggestions. Suggest 3 title enhancements and an overarching historical meta-description that captures the generational essence of this narrative.
      `;

      if (client) {
        const response = await client.models.generateContent({
          model: "gemini-3.5-flash",
          contents: prompt,
          config: {
            systemInstruction: "You are an elite generational archivist and memoir editor. You help families elevate their stories into publishable-quality legacy anthologies.",
            temperature: 0.6,
          }
        });
        return res.json({ analysis: response.text });
      } else {
        // High quality mock analysis
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return res.json({
          analysis: `### 🏛️ Generational Review: "${title || "Untitled Archive"}"
          
Review styled for: **${style || 'Memoir'} Format**

Your narrative captures a timeless theme of endurance. To increase the historical volume, we recommend aligning this story with your Cambridge memories and embedding physical photo assets directly from our vault. 

#### Recommended Enhancements:
1. **Refine Tone**: Enhance emotional proximity in paragraph two by centering the direct lessons learned during the 1984 transition.
2. **Metadata Tags**: Tag this under \`#SterlingHeritage\` and \`#WartimeAncestry\`.
3. **Suggested Alternate Titles**:
   - *The Echoes of Oxford: A Living Chronicle*
   - *Anchor of the Unseen: ${title || "Our Inheritance"}*
   - *The Foundations of 1984 & Beyond*`
        });
      }
    } catch (error: any) {
      console.error("[Gemini Summarize Proxy Error] ", error);
      res.status(500).json({ error: error.message || "An error occurred during summarizing." });
    }
  });

  // Vite integration
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("[Vite] Dev middleware integrated into Express.");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log(`[Production] Serving static files from: ${distPath}`);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Server] Legado Backend listening on port ${PORT}`);
  });
}

startServer();
