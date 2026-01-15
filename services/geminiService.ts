
import { GoogleGenAI, Type } from "@google/genai";

/**
 * Generates UPSC Prelims level MCQs based on a provided topic using gemini-3-flash-preview.
 */
export const generateUPSCQuiz = async (topic: string) => {
  // Always use process.env.API_KEY directly as per guidelines.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `Act as a UPSC (Union Public Service Commission) expert examiner. 
  Generate 3 high-quality Multiple Choice Questions (MCQs) for the topic: '${topic}'.
  The questions should be Prelims level (Difficult/Conceptual). 
  Each question MUST have 4 options and a detailed explanation.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              question: { type: Type.STRING },
              options: { 
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              correctIndex: { type: Type.INTEGER },
              explanation: { type: Type.STRING }
            },
            required: ["question", "options", "correctIndex", "explanation"]
          }
        }
      },
    });

    // Extract text output using the .text property (not a method).
    const text = response.text;
    if (!text) throw new Error("AI returned an empty response.");
    return JSON.parse(text);
  } catch (error) {
    console.error("Error generating UPSC quiz:", error);
    throw error;
  }
};

/**
 * Generates a UI design suggestion image using the gemini-2.5-flash-image model.
 */
export const generateDesignSuggestion = async (style: string, palette: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `Create a visually stunning and professional UI design concept for a UPSC Civil Services preparation dashboard. 
  Artistic Style: ${style}. 
  Color Palette: ${palette}. 
  The design should include a study progress tracker, mock test module, and high-quality typography. 
  Modern, clean, and highly motivating for aspirants.`;

  try {
    // For gemini-2.5-flash-image, use generateContent to generate images.
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }]
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9"
        }
      }
    });

    // Iterate through candidates and parts to find the image (inlineData).
    if (response.candidates && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64Data = part.inlineData.data;
          return `data:image/png;base64,${base64Data}`;
        }
      }
    }
    
    throw new Error("No image data found in the response.");
  } catch (error) {
    console.error("Error generating design suggestion:", error);
    throw error;
  }
};
