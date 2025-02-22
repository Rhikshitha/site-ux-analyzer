import asyncio
from pyppeteer import launch
import openai
import base64

import time

ts = time.time()


async def take_screenshot(url, output_path):
    browser = await launch(headless=True)  # Launch a headless browser
    page = await browser.newPage()
    await page.goto(url, {'waitUntil': 'networkidle2'})  # Wait until the page loads
    await page.screenshot({'path': output_path, 'fullPage': True})  # Capture full page screenshot
    await browser.close()
    print(f"Screenshot saved: {output_path}")



url = "https://jahincorporation.com/"  # YOUR INPUT HERE
output_file = "./jah.png"  # File Name
asyncio.run(take_screenshot(url, output_file))




# Set up your OpenAI API key
openai.api_key = "API_KEY_HERE"
# Read the image and encode it in base64
with open(output_file, "rb") as image_file:
    base64_image = base64.b64encode(image_file.read()).decode("utf-8")

# Send to OpenAI's API
response = openai.ChatCompletion.create(
    model="gpt-4-turbo",
    messages=[
        {"role": "system",
         "content": "You are an AI UX consultant with expertise in psychology-driven design. Analyze the uploaded webpage design based on the following psychology principles: ✅ *Cognitive Load* – Identify areas where users may feel overwhelmed and suggest ways to simplify. ✅ *Visual Hierarchy* – Assess how well the design guides attention and suggest improvements. ✅ *Hick’s Law* – Analyze decision complexity and recommend ways to reduce choices for faster user actions. ✅ *Gestalt Principles* – Identify patterns, proximity, similarity, and figure-ground relationships. ✅ *Fitts’s Law* – Evaluate button sizes and placements for ease of interaction. ✅ *Von Restorff Effect* – Check if key elements (e.g., CTAs) stand out effectively. ✅ *Color Psychology* – Assess the emotional impact and readability of the color scheme. ✅ *Dual-Coding Theory* – Check if text and visuals work together to enhance comprehension. ✅ *Serial Position Effect* – Determine if important content appears at the best positions (beginning or end). ✅ *Jakob’s Law* – See if the design aligns with user expectations based on common UI patterns. Provide *specific, actionable UX fixes* based on these principles. Structure your response under each category."},
        {"role": "user", "content": [
            {"type": "text",
             "text": "Analyze this webpage design and suggest improvements using psychology-driven UX principles."},
            {"type": "image_url", "image_url": {"url": "https://i.imgur.com/hXOzmek.png"}}
        ]}
    ],
    max_tokens=300
)

# Print response
print(response["choices"][0]["message"]["content"])




